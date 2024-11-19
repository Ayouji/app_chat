<?php

namespace App\Http\Controllers;

use App\Events\SendMessage;
use App\Models\Chat;
use App\Models\Invitation;
use App\Models\Message;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use Illuminate\Contracts\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Relations\MorphTo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;
use Inertia\Response;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use function React\Promise\Stream\first;

class ControllerChat extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request,  string $room_ID=null) : Response
    {
        $Iduser = Auth::user()->id ;
        
        /**
         * ---------Charger Rooms
         */
// try {        
        $room_User_message = $this->GetRooms($Iduser);
        // dd($room_User_message);

         /**
         * --------- Get message rooms
         */

    $room_message = $this->Get_Message($room_ID);
       
        /**
         * Liste User Contact
         */
            // --- Get id contact in accepted "pluck"
            $id_contact = Auth::user()->invitations->where('status_invite','accepted')->pluck('receiver_id');
            // --- Get contact to table user
            $Liste_contact = User::whereIn('id',$id_contact)->get();

        //    $lazy =  Inertia::lazy(function() use($room_message){ dd($room_message);});
        //    dd($lazy,$room_message);
        /**
         * Get Invitation
         */
            $Invitation = $this->Get_Invitation($Iduser);
            
    /**
     * Render Dashboard
     */
        return Inertia::render('Dashboard',
        [
            'room_User_messages'=>$room_User_message,
            'Liste_data_des_Contact'=>$Liste_contact,
            'Invitation_data'=> $Invitation,
            'message_in_rooms'=>$room_message,
            // 'message_in_rooms'=>Inertia::lazy(function() use($room_message){ dd($room_message);}),
            // 'user_Invited'=> $pck,
            // ---------------Routage 
            'url'=>url('/'),
            'room_ID'=>$room_ID,
            'AuthUserId'=>Auth::user()  ,
            'Path_Asset' => asset(''),
            // ------------------------------------
            
            'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
            'status' => session('status'),
        ]);


    // } catch (\Throwable $th) {
    //     abort(404);
    // }

    }


/**
 *--------------------------------------Charger Rooms
*/
 public function GetRooms($Iduser){
    

    //code...
        $room_User_message = Chat::whereHas('users', function ($req) use ($Iduser) {
            $req->where('user_id', $Iduser);
        })
        ->with(['users' => function ($req) use ($Iduser) {
            
                $req->where('user_id', '<>', $Iduser);
            } 
            ,
            'userAuth' => function ($req) use ($Iduser) {
                $req->where('id', '=', $Iduser);
            }
            
            ,'messages'=>function ($req) {
            
                 $req->orderBy('created_at', 'desc');
            },'messages.users'
            ])
        ->get()
        ->map(function($req) {
            $req->setRelation('messages', $req->messages->take(1));

            return $req;
        })
        ->toArray();
       

    return $room_User_message;
 }


// --------------------------------------------------------------------------------------------------------------


// --------------------------------------Get Message ------------------------------------------------------------

 public function Get_Message($room_ID){
    
if ($room_ID && Auth::user()->Chats->where('Channel_id',$room_ID)->first() != null) {

           return Chat::with(
                ['messages'=>function($requet)
                {
                $requet->orderBy('created_at', 'asc');
               }
               ,'messages.users','messages.reports.reportMessages.users'=>function($rq){
                $rq->first();
                // dd($rq->get());
               }])
            ->where('Channel_id',$room_ID)
            ->first()
            ->toArray();

            // dd($room_message);
        //     $lazyroom_message = Inertia::lazy(function () use ($room_message) {
        //         return $room_message;
        //     }

        // );
        // dd($lazyroom_message);
        }
        else if($room_ID && Auth::user()->Chats->where('Channel_id',$room_ID)->first() == null)
        {
            
           return abort(404,'Room is not found.');
            
        }else{
            return '';
        }
    
 }


 
// --------------------------------------------------------------------------------------------------------------

// ------------------------------------------------Get Invitation------------------------------------------------------------
public function Get_Invitation($Iduser){
    

return Invitation::with('users_sender')->where(['receiver_id'=>$Iduser,'status_invite'=>'pending'])->get();
// $Invitation = Auth::user()->invitation_Receive->where('status_invite','accepted');
    // dd($Invitation);
// $id_User = $Invitation->pluck('user_id');

// $user_Invited = User::whereIn('id',$id_User)->get();
// print_r($user_Invited);

}











    
    // public function sendMessage(Request $request)
    // {
    //     $request->validate([
    //         'room' => ['required', 'string', 'max:50'],
    //         'message' => ['required', 'string', 'max:140'],
    //     ]);
    //     $user = $request->user();
    //     $room = Chat::where('name', $request->room)->firstOrFail();
    //     $message = $user->messages()->create([
    //         'message' => $request->message,
    //         'room_id' => $room->id
    //     ]);
    //     broadcast(new SendMessage($user, $message,$room))->toOthers();
    //     return Response::json(['ok' => true]);
    // }




}