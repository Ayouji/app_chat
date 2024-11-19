<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
// use Illuminate\Notifications\Notification;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'image',
        'is_active',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    function messages(){
        return $this->hasMany(Message::class);
    }
    function reports(){
        return $this->hasMany(Report::class);
    }

    function invitations(){
        return $this->hasMany(Invitation::class,);
    }

    function invitation_Receive(){
        return $this->hasMany(Invitation::class,"receiver_id");
    }

    public function Chats(): BelongsToMany
    {
        return $this->belongsToMany(Chat::class,'chats_users')->withPivot(['unread_messages_count','is_Admin']);
    }
    
}
