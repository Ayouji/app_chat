<?php

namespace App\Http\Controllers;

use App\Events\SendMessage;
use App\Http\Requests\ProfileUpdateRequest;
use App\Models\Chat;
use App\Models\Message;
use App\Models\Report;
use App\Models\User;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Notifications\Messages\BroadcastMessage;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Broadcast;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Inertia\Response;

class SendMessageController extends Controller
{
    /**
     * Display the user's profile form.
     */

 

    
    	
     public function storeMessage(Request $request)
     {
         // ---------------------------------------------
         $user = $request->user();
         $room = Chat::where('id', $request->chat_id)->firstOrFail();
        
         $lastModified =  $request->input('Id_Msg');
         // ------------------------------------------
         if (is_array($request->message)) {
             
             $files = $request->file('message');
             $accept =$this->testFile($files);
          if ($accept['message']) {
                # code...
             
             foreach ($files as $index=>$key) {
 
                 $extension = $key->getClientOriginalExtension();
                
                 
                // dd($lastModified);
             // Determine the file type based on the extension
                     $fileType = $this->GetFile($extension);
                 
             if ($fileType !== 'unknown') {
                
                if ($request->hasFile('message') && $key->isvalid() ) {
                 // ------------------add Message File -----------------
                 
                 $ex = $key->extension();
                 $nm= $fileType.time().'.'.$ex;
                 if ($fileType ==='image') {
 
                 $getFileName = $key->storeAs('images',$nm,'public');
                 }elseif ($fileType ==='video') {
 
                     $getFileName = $key->storeAs('video',$nm,'public');
                 }elseif ($fileType ==='document'){
 
                     $getFileName =$key->storeAs('document',$nm,'public');
                 }
 
                 $SMessage = $request->user()->messages()->create([
                 'ID_Msg'=>$lastModified[$index],
                 'message' => $getFileName,
                 'status_Message'=>$fileType,
                 'chat_id' => $request->chat_id,
                 'Originale_Name_File'=>$key->getClientOriginalName(),
                 'sizeFile'=>$key->getSize(),
             ]);
             
             // -----------------------------------------------------
                 broadcast(new SendMessage($user,$SMessage , null , $room))->toOthers();
 
         } 
             
             
         }
 
             }
             
                return Redirect::back();
            }else{

                return Redirect::back()->with('message_type_file', ['message'=>'The .'.$accept["ext"].' extension is not accepted','status'=>5005]);
            }
         }
         else
         {
            
            if($request->hasFile('message') ){
                
                $files = $request->file('message');
                $ex = $files->extension();
                $Typemsgg = $this->GetFile($ex);
                $nm= $Typemsgg.time().'.'.$ex;
                $Rmessage =  $files->storeAs('audio',$nm,'public');

            }else{
                $Rmessage =  $request->message;
                $Typemsgg = 'text';
            }
             $SMessage = $request->user()->messages()->create([
                
                'ID_Msg'=>$lastModified,
                 'message' => $Rmessage,
                 'status_Message'=>$Typemsgg,
                 'chat_id' => $request->chat_id,
             ]);

         // // -----------------report Message---------------
        
             if ($request->reportMsg) {
             # code...
             $ReportsMsg = $SMessage->reports()->create([
                 "user_id"=> $request->reportMsg['user_id'],
                 "message_id"=> $SMessage->id,
                 "reportMsg_id"=> $request->reportMsg['id'],
             ]);
             
         }else{ $ReportsMsg=null;}
 

   
         DB::table('chats_users')
         ->where('chat_id',$request->chat_id)
         ->where('user_id', '=', $user->id)
         ->update(['unread_messages_count' => DB::raw('unread_messages_count + 1')])
         ;
 
         broadcast(new SendMessage($user,$SMessage , $request->reportMsg , $room))->toOthers();
     //    ---------------------------------------------------------------------------------------
     
            return Redirect::back()->with('msg','d');
         }
 
         
 
     }
 



public function GetFile($extension){
    if (in_array(strtolower($extension), ['jpg', 'jpeg', 'png', 'gif','svg'])) {
        $fileType = 'image';
    } elseif (in_array(strtolower($extension), ['pdf', 'doc', 'docx','pptx','ppt', 'txt','html','css','php','rar','zip','gz'])) {
        $fileType = 'document';
    } elseif (in_array(strtolower($extension), ['mp4', 'avi', 'mov', 'wmv'])) {
        $fileType = 'video';
    } elseif(in_array(strtolower($extension), ['mp3', 'webm'])){
       
       $fileType = 'audio' ;
    }
    else {
        $fileType = 'unknown';
    }
    return $fileType;
}




public function testFile($filName)
{

    $test = true;
    foreach ($filName as $index=>$key) {
 
        $extension = $key->getClientOriginalExtension();

            $fileType = $this->GetFile($extension);
            if ($fileType === 'unknown') {
                $test = false;
                break;
            }
        }
        return array_merge(['message'=>$test],['ext'=>$extension]);
}




    public function Delete_Message(Request $request){
            $MessageI = Message::where('ID_Msg',$request->input('idMsg'))->first();

            if ($request->input('IdReply')) {
                # code...
            $Reply = Message::where('ID_Msg',$request->input('IdReply'))->first();

            if ($Reply && is_null($Reply->deleted_at)) {
            $IDReply = Report::where('reportMsg_id',$Reply->id)->where('message_id',$MessageI->id)->delete();
            }
            }
            if ($MessageI && is_null($MessageI->deleted_at)) {

                 $MessageI->delete();

            return redirect()->back()->with('Delete_message',[
                'message'=>'Your message has been deleted.',
                 'icons'=>'success']);
                }else{
                    
            return redirect()->back()->with('Delete_message',[
                'message'=>'Your message has already been deleted.',
                'icons'=>'warning']);

                }
    }


     public function destroy_unread_messages_count(Request $request){
        
        $user = $request->user();
        DB::table('chats_users')
        ->where('chat_id',$request->chat_id)
        ->where('user_id', '=', $user->id)
        ->update(['unread_messages_count' => 0])
        ;

     }































    public function edit(Request $request): Response
    {
        return Inertia::render('room/Edit', [
            'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
            'status' => session('status'),
        ]);
    }

    /**
     * Update the user's profile information.
     */
    public function update($id,$val)
    {
       return User::whereId($id)->update(['is_active'=>$val]);

    }
    
    public function getOnline(){
        
        return  User::all()->where('is_active',true);
    }
    /**
     * Delete the user's account.
     */
    public function destroy(Request $request): RedirectResponse
    {
        // $request->validate([
        //     'password' => ['required', 'current-password'],
        // ]);

        // $user = $request->user();

        // Auth::logout();

        // $user->delete();

        // $request->session()->invalidate();
        // $request->session()->regenerateToken();

        return Redirect::to('/');
    }

}
