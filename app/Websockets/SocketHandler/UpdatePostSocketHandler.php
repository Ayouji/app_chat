<?php

namespace App\Websockets\SocketHandler;

use App\Http\Resources\PostResource;
use App\Models\Post;
use App\Models\User;
use App\Repositories\PostRepository;
use Exception;
use Ratchet\ConnectionInterface;
use Ratchet\RFC6455\Messaging\MessageInterface;
use Ratchet\WebSocket\MessageComponentInterface;

class UpdatePostSocketHandler extends BaseSocketHandler implements MessageComponentInterface
{


    function onMessage(ConnectionInterface $from, MessageInterface $msg)
    {

        $body = collect(json_decode($msg->getPayload(), true));

        $payload = $body->get('payload');
        $id = $body->get('id');

        dump($payload, $id);
        // dump($msg->getPayload());

        $user = User::query()->findOrFail($id);

        $response = ($user)->toJson();

        $from->send($response);
        

    }

}