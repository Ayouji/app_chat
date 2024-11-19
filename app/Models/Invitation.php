<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Invitation extends Model
{

    use HasFactory;
    public $incrementing = false;
    // public $timestamps = false;
    // protected $keyType = 'string';
    // protected $table = 'invitations';
    protected $primaryKey = [
        'user_id',
        'receiver_id',
];
    protected $fillable = [
        // 'chat_id',
        'receiver_id',
        'user_id',
        'status_invite',
    
    ];
    
    public function users(){
        return $this->belongsTo(User::class,'user_id');
    }
    
    public function users_sender(){
        return $this->belongsTo(User::class,'user_id');
    }
}
