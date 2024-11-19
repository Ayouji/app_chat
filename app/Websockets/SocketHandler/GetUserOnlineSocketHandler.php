<?php

namespace App\Websockets\SocketHandler;

use App\Http\Controllers\SendMessageController;
use App\Http\Resources\PostResource;
use App\Models\Post;
use App\Models\User;
use App\Repositories\PostRepository;
use Exception;
use Ratchet\ConnectionInterface;
use Ratchet\RFC6455\Messaging\MessageInterface;
use Ratchet\WebSocket\MessageComponentInterface;

class GetUserOnlineSocketHandler extends BaseSocketHandler implements MessageComponentInterface
{


    function onMessage(ConnectionInterface $from, MessageInterface $msg)
    {

        // $body = collect(json_decode($msg->getPayload(), true));

        // $id = $body->get('id');
        // // dump($msg->getPayload());
        $sendmsg = new SendMessageController();
        
        
        $userOnline = $sendmsg->getOnline();
      
        // dump("Onlinne =======",$userOnline);
        $response = ($userOnline)->toJson();

        $from->send($response);
        

    }

}