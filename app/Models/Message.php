<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Message extends Model
{
    use HasFactory , SoftDeletes;
    protected $fillable = [
        
            'ID_Msg' ,
            'status_Message',
        	'message'	,
            'user_id'	,
            'chat_id'   ,
            'Originale_Name_File',
            'sizeFile'
            
    ];
    
    protected $dates = ['deleted_at'];
    
    public function users(){
        return $this->belongsTo(User::class,'user_id','id');
    }
    public function chats(){
        return $this->belongsTo(Chat::class,'chat_id','id');
    }

    
    public function reports(){
        return $this->hasOne(Report::class,"message_id");
        // return $this->morphOne()
    }
}
