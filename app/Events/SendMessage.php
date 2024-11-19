<?php

namespace App\Events;

// use Illuminate\Broadcasting\Channel;

// use BeyondCode\LaravelWebSockets\WebSockets\Channels\Channel;
use Illuminate\Broadcasting\Channel ;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;

use Illuminate\Contracts\Broadcasting\ShouldBroadcast;

use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class SendMessage implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    /**
     * Create a new event instance.
     */
    public $user;
    public $message;
    public $room;
    public $report;
    public function __construct($user,$message,$report=null,$room)
    {
        $this->user = $user;
        $this->message = $message; 
        $this->room = $room; 
        $this->report = $report; 
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return array<int, \Illuminate\Broadcasting\Channel>
     */

    public function broadcastOn(): array
    {
        return [
            // new Channel('public'),
            new PresenceChannel('room.'.$this->room->Channel_id)
            // new PresenceChannel('presence.1')
        ];
    }
    // public function broadcastOn(): Channel
    // {
    //     return new channel('public.playground.1');
    //     ;
    // }

    // public function broadcastAs()
    // {
    //     return "toumi";
    //  }
public function broadcastWith() : array
{ 

return array_merge($this->message->toArray(),['reports'=>$this->report?['report_messages'=>$this->report]:null], ['users' => $this->user]);
}
}
