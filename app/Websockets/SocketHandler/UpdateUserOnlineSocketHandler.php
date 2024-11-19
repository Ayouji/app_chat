<?php

namespace App\Websockets\SocketHandler;

use App\Http\Controllers\SendMessageController;
use App\Http\Resources\PostResource;
use App\Models\Post;
use App\Models\User;
use App\Repositories\PostRepository;
use Exception;
use Illuminate\Support\Facades\DB;
use Ratchet\ConnectionInterface;
use Ratchet\RFC6455\Messaging\MessageInterface;
use Ratchet\WebSocket\MessageComponentInterface;

class UpdateUserOnlineSocketHandler extends BaseSocketHandler implements MessageComponentInterface
{


    function onMessage(ConnectionInterface $from, MessageInterface $msg)
    {

        $body = collect(json_decode($msg->getPayload(), true));

        // $payload = $body->get('payload');
        $id = $body->get('id');

        // dump($id);
        // dump($msg->getPayload());

        // $user = User::all()->findOrFail($id);
        // dump($user);
        // if($user){
       
        // }
        $sendmsg = new SendMessageController();
        $sendmsg->update($id,1);
        // dump('user ',$id);

    }

}