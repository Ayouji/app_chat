<?php

use App\Events\EventPrivate;
use App\Events\PresenceEvent;
use App\Events\SendMessage;
use App\Http\Controllers\ControllerAddContact;

use App\Http\Controllers\ControllerChat;
use App\Http\Controllers\ControllerCreateGroup;
use App\Http\Controllers\ControllerInvetation;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SendMessageController;
use App\Websockets\SocketHandler\BaseSocketHandler;
use App\Websockets\SocketHandler\GetUserOnlineSocketHandler;
use App\Websockets\SocketHandler\UpdatePostSocketHandler;
use App\Websockets\SocketHandler\UpdateUserOnlineSocketHandler;
use BeyondCode\LaravelWebSockets\Facades\WebSocketsRouter;
use BeyondCode\LaravelWebSockets\QueryParameters;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    // Inertia::
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

// -----------------------------webSocket-------------------------------

Route::get('/mmsge',[SendMessageController::class,'getOnline']);
// -------------------------------------------------------------
    
Route::middleware('auth','verified')->group(function(){

    Route::get('/Chats/rooms/{room_ID?}/', [ControllerChat::class,'index'])->name('Chat.index');
 
    Route::get('/Chats/Friends/{room_ID?}/', [ControllerChat::class,'index'])->name('Chat.Friends');
    Route::get('/Chats/New_Chat/{room_ID?}/', [ControllerChat::class,'index'])->name('Chat.New_Chat');
    Route::get('/Chats/Notification/{room_ID?}/', [ControllerChat::class,'index'])->name('Chat.Notification');
    Route::get('/Chats/Settings/{room_ID?}/', [ControllerChat::class,'index'])->name('Chat.Settings');
    Route::post('/Chat/contact', [ControllerAddContact::class,'Add_Contact'])->name('Contacts.Add_Contact');

    Route::get('/Invitation/{id}', [ControllerInvetation::class,'Accepted_Invit'])->name('Invit.Accepte');
    
    Route::post('/create_Group', [ControllerCreateGroup::class,'Create_Group'])->name('chat.create_Group');
    Route::post('/Chat/create_Group/Addmember', [ControllerCreateGroup::class,'Add_Member'])->name('chat.contact.AddMember');
// ---------------message

    Route::post('/send-message', [SendMessageController::class, 'storeMessage'])->name('Message.send');
    
    Route::post('/DeleteMessage', [SendMessageController::class, 'Delete_Message'])->name('Delete.Message');
    
    Route::get('/profile', [ProfileController::class, 'change_Image_profilt'])->name('profile.ChangeImg');

    Route::post('/Chat/message', [SendMessageController::class,'destroy_unread_messages_count'])->name('destroy.unread_messages_count');
    // --------------------------------

    
    Route::get('/download-image/{imagePath}', function ($imagePath) {
        $path = str_replace('storage/', 'public/storage/', $imagePath);
        // dd($imagePath);
        return response()->download(storage_path($path));
    })->name('download.image');

   
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    // Route::get('/ws', [ProfileController::class, 'ws']);

   

});


// Route::get('/contact', [ControllerContact::class,'index'])->name('Contacts.index');

require __DIR__.'/auth.php';

Route::get(
        '/fireEvent',
        function () {
            // faking file upload  
            // sleep(3);
            // EventPrivate::dispatch('Profile picutre has been updated');
            return event(new EventPrivate('Profile picutre has been updated',auth()->user()));
        }
    );

