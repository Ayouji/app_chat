<?php

namespace App\Http\Controllers;

use App\Events\SendNotification;
use App\Models\Chat;
use App\Models\Invitation;
use App\Models\Message;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rule;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;
// use Inertia\Response;
// use Illuminate\Support\Facades\Response;
use Inertia\Response as InertiaResponse;

class ControllerInvetation extends Controller
{
    public function index(): InertiaResponse
    {

         return Inertia::render('Notifications/Notf', [
            'status' => 'Hi',
        ]);

    }

    	
    
public function Accepted_Invit(string $id , Request $request ){
    // dd($id);

    $user = $request->user();

        $tbinvit = DB::table('invitations')
        ->where('receiver_id',$user->id)
        ->where('user_id', '=', $id)
        ->update(['status_invite' => 'accepted'])
        ;
        $invitation = new Invitation();
        $invitation->receiver_id = $id;
        $invitation->user_id = $user->id;
        $invitation->status_invite = 'accepted';
        $invitation->save();

    $chanl = uniqid().time();
    
    $chat = new Chat();
    $chat->Status_Chat='user';
    $chat->Channel_id=$chanl;
    $chat->save();
    DB::table('chats_users')
    ->insert([[
        'user_id'=>$id,
        'chat_id'=>	$chat->id],[
        'user_id'=>$user->id,
        'chat_id'=>	$chat->id
    ]
    ]);
    
    return redirect()->to('Chats/rooms/'.$chanl);
}


}