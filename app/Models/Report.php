<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Report extends Model
{
    use HasFactory , SoftDeletes;
    protected $fillable = [
        'message_id',
        'reportMsg_id',
        'user_id',
    ];
    
    protected $dates = ['deleted_at'];

    public function users(){
        return $this->belongsTo(User::class,'user_id','id');
    }

    public function messages(){
        return $this->belongsTo(Message::class,'message_id','id');
    }

    public function reportMessages(){
        return $this->belongsTo(Message::class,'reportMsg_id','id');

    }
}
