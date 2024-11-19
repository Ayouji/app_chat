<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Chat extends Model
{
    use HasFactory;
    protected $fillable = [
        'Status_Chat',
        'titre',
        'Channel_id',
        'image',
        'Description'
    ];
    function messages(){
        return $this->hasMany(Message::class,'chat_id');
    }

    public function Users(): BelongsToMany
    {
        return $this->belongsToMany(User::class,'chats_users')->withPivot(['unread_messages_count','is_Admin']);
    }

    public function userAuth()
    {
        return $this->belongsToMany(User::class,'chats_users')
            ->withPivot(['unread_messages_count','is_Admin'])
            
            ->where('user_id', auth()->id())
            ;
    }

    // public function usersTherough()
    // {
    //     return $this->hasManyThrough(User::class,);
    // }
    
}
