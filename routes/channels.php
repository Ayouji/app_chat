<?php

use App\Models\Chat;
use App\Models\Invitation;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Broadcast;

/*
|--------------------------------------------------------------------------
| Broadcast Channels
|--------------------------------------------------------------------------
|
| Here you may register all of the event broadcasting channels that your
| application supports. The given channel authorization callbacks are
| used to check if an authenticated user can listen to the channel.
|
*/

Broadcast::channel('App.Models.User.{id}', function ($user, $id) {
    return (int) $user->id === (int) $id;
});

Broadcast::channel("public", function () {
    return true;
});

// Broadcast::channel("private", function ($user, $id) {
//     return (int) $user->id === (int) $user;
// });
Broadcast::channel('private.{id}', function ($user, $id) {
    // $aut= Auth::user()->id;
    return $user->id == $id;
});

Broadcast::channel('presence.{id}', function ($user, $id) {
    return $user->id == $id && $user;
});

//  ---------------------- USER Join Room ------------------------

Broadcast::channel('chat.{roomId}', function (User $user, int $roomId) {
    if ($user->canJoinRoom($roomId)) {
        return ['id' => $user->id, 'name' => $user->name];
    }
});

Broadcast::channel('Notification.{id}', function ($user) {
    // return $user->only('id', 'name');
    // $user->id = Invitation::finOrFile($id)->receiver_id
    return $user->only('id', 'name');
    
});



Broadcast::channel('room.{id}', function ($user , $id) {

        return $user->only('id', 'name');
    
    
});


Broadcast::channel('online_user_Channel', function ($user) {
    return Auth::check() ? $user->only('id', 'name') : null;
});