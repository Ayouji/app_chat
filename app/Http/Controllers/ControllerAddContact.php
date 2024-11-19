<?php

namespace App\Http\Controllers;

use App\Events\SendNotification;
use App\Models\Invitation;
use App\Models\User;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

use Inertia\Response;

class ControllerAddContact extends Controller
{
    //
    public function Add_Contact(Request $request) 
    { 
            # code...
            $request->validate([
                'email'=>'required',
               
            ]);
            $auth = Auth::user(); 
        $receiver = User::all()->where('email','=',$request->email)->first();
    if ($auth->email !== $request->email && $receiver) {
                # code...
            
       
       
        $inv = Invitation::where('receiver_id',$receiver->id)->where('user_id',$auth->id)->first();
       if($inv ===null){
        
        $invitation = new Invitation();
        $invitation->receiver_id=$receiver->id;
        $invitation->user_id=$request->user()->id;
        $invitation->status_invite = 'pending';
        $invitation->save();

        $sender=$request->user();
        

        broadcast(new SendNotification( $receiver, $invitation->status_invite, $invitation->created_at, $sender))->toOthers();
        
        return redirect()->back()
                ->with('session_Email_Invit', ['message'=>'A friend has been invited successfully','icon'=>'success']);
        }else{
            return redirect()->back()
            ->with('session_Email_Invit', ['message'=>'This email address is already invited','icon'=>'warning']);


            }
  
    }else{

        return redirect()->back()
                ->with('session_Email_Invit', ['message'=>'This email address is Invalid','icon'=>'error']);

    }
        ;
       
        // return true;
        // } catch (\Exception) {
        //     //throw $th;
        //     return abort(404);
        // }
             
            
      
        //  true;
        // Redirect::to('/');
    }
    public function Confirme_Invit(){

    }
}
