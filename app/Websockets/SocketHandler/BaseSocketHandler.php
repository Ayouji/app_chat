<?php

namespace App\Websockets\SocketHandler;

use BeyondCode\LaravelWebSockets\Apps\App;
use BeyondCode\LaravelWebSockets\QueryParameters;
use BeyondCode\LaravelWebSockets\WebSockets\Exceptions\UnknownAppKey;
use Ratchet\ConnectionInterface;
use Ratchet\WebSocket\MessageComponentInterface;

abstract class BaseSocketHandler implements MessageComponentInterface
{
 

    // protected function verifyAppKey(ConnectionInterface $connection)
    // {

    //     if (! $app = ) {
    //         throw new UnknownAppKey($appKey);
    //     }

    //     $connection->app = $app;

    //     return $this;
    // }
    // protected function generateSocketId(ConnectionInterface $connection)
    // {

    //     return $this;
    // }

    function onOpen(ConnectionInterface $connection)
    {
        dump('on opened');

        $socketId = sprintf('%d.%d', random_int(1, 1000000000), random_int(1, 1000000000));

        $connection->socketId = $socketId;
// //        auth logic here

        $appKey = QueryParameters::create($connection->httpRequest)->get('my_key');
        $connection->app =App::findByKey($appKey);
        // $this->verifyAppKey($conn)->generateSocketId($conn);
        // dd($conn->httpRequest);


    }

    function onClose(ConnectionInterface $conn)
    {
        dump('closed');
    }

    function onError(ConnectionInterface $conn, \Exception $e)
    {
        dump($e);
        dump('onerror');
    }
}