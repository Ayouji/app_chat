<?php

namespace App\Events;

// use Illuminate\Broadcasting\Channel;

// use BeyondCode\LaravelWebSockets\WebSockets\Channels\Channel;

use App\Models\Invitation;
use Illuminate\Broadcasting\Channel ;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;

use Illuminate\Contracts\Broadcasting\ShouldBroadcast;

use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Log;

class SendNotification implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    /**
     * Create a new event instance.
     */
    public $user;
    // public $message;
    public $receiver;
    public $status_invite;
    public $created_at;
    public function __construct($receiver , $status_invite, $created_at,$user)
    {
        $this->user = $user;
        $this->receiver = $receiver;
        $this->status_invite = $status_invite;
        $this->created_at = $created_at;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return array<int, \Illuminate\Broadcasting\Channel>
     */

    public function broadcastOn(): array
    {
        // {$this->receiver->id}
        return [
            new PrivateChannel("Notification.".$this->receiver->id),
            // new privateChannel('public.playground.1')
        ];
    }
   
public function broadcastWith() : array
{ 

return ['receiver'=>$this->receiver->id,'status_invite'=>$this->status_invite,'created_at'=>$this->created_at,'users_sender' => $this->user];

}
}
