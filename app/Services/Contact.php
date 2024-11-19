<?php
namespace App\Services;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class Contact extends Controller{

    public function  Get_Contact(){
        // $id_contact = Auth::user()->invitations->where('status_invite','accepted')->pluck('receiver_id');
        // // Get contact to table user
        // $contact = User::whereIn('id',$id_contact)->get();
    }

}