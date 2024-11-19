<?php

namespace App\Http\Controllers;

use App\Events\SendNotification;
use App\Models\Chat;
use App\Models\Invitation;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

use Inertia\Response;

class ControllerCreateGroup extends Controller
{
   
    public function Create_Group(Request $request) 
    {
      
        $Channel_id = time().substr(base_convert(sha1(uniqid(mt_rand())), 16, 36), 0, 10);
        $getFileName = null;


        if ($request->hasFile('image') && $request->file('image')->isvalid() ) {
            // ------------------Get image File -----------------
            
            $ex = $request->file('image')->extension();
            $nm= 'GroupImage'.time().'.'.$ex;

            $getFileName = $request->file('image')->storeAs('images',$nm,'public');

            }
            // dd($request->Description);
    $Chat = Chat::create([
        'Status_Chat'=>'group',
        'titre'=>$request->titre,
        'Description' => $request->Description,
        'Channel_id' => $Channel_id,
        'image' => $getFileName,
    ]);
    $chatUserA = DB::table('chats_users')->insert([
        'is_Admin'=> 1,
        'chat_id' => $Chat->id,
        'user_id' => Auth::user()->id,
    ]);

    foreach ($request->contacts as $key) {
        # code...
        $chatUser = DB::table('chats_users')->insert([
            'is_Admin'=> 0,
            'chat_id' => $Chat->id,
            'user_id' => $key,
        ]);

    }


    // $sender=$request->user();
    // broadcast(new SendNotification( $receiver , $sender))->toOthers();
    
    // return redirect()->to('http://127.0.0.1:8000/Chats/rooms/'.$Channel_id)
    //         ->with('session_group', [
    //                 'message' => 'Ajouter group avec succes'
    //         ]);
    return redirect()->to('Chats/rooms/'.$Channel_id)->with('Create_Group',['message'=>'The group has been created successfully','icon'=>'success']);
    }

    public function Add_Member(Request $request){

        $groupUser = [];
        $message =null;
        foreach ($request->Group_contacts as $key) {
            if (!DB::table('chats_users')->where('chat_id', $request->Chat_id)->where('user_id', $key)->first()) {
                # code...
            $AddUser = DB::table('chats_users')->insert([
                'is_Admin'=> 0,
                'chat_id' => $request->Chat_id,
                'user_id' => $key,
            ]);
            array_push($groupUser,$key);
            
            $message ="The member has been added successfully";
            $status=209;
            }else{
                $message =" Member Already Added to Group";
                $status=509;
            }
        }

        return redirect()->back()->with('Add_Member', ['data'=>$groupUser,'message'=>$message,'status'=>$status]);
    }
}
