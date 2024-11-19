<?php

namespace App\Http\Controllers\Auth;

use App\Events\OfflineUser;
use App\Events\OnlineUser;
use App\Http\Controllers\Controller;
use App\Http\Controllers\SendMessageController;
use App\Http\Requests\Auth\LoginRequest;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Inertia\Response;

class AuthenticatedSessionController extends Controller
{
    /**
     * Display the login view.
     */
    // $path = public_path().'/logo/'.$filename;

    // if (!File::exists($path)) {
    //     abort(404);
    // }

    // $file = File::get($path);
    // $type = File::mimeType($path);

    // $response = Response::make($file, 200);
    // $response->header("Content-Type", $type);

    public function create(): Response
    {
        return Inertia::render('Auth/Login', [
            'canResetPassword' => Route::has('password.request'),
            'status' => session('status'),
            // 'image' => ,
            // 'base_url' => url('/'),
        ]);
    }

    /**
     * Handle an incoming authentication request.
     */
    public function store(LoginRequest $request): RedirectResponse
    {
        $request->authenticate();

        $request->session()->regenerate();
         
   
        $user = User::find(auth()->id());

        // Update user's online status
        $user->is_active = 1;
        $user->save();

    // broadcast(new OnlineUser($user->id));
        // event(new OnlineUser($request->user()->id));
        // DB::update('update users set is_active = 1 where id = ?', [$userid]);
        return redirect()->intended(RouteServiceProvider::HOME);
    }

    /**
     * Destroy an authenticated session.
     */
    public function destroy(Request $request): RedirectResponse
    {
        
        $user = $request->user();
        // Update user's online status
        $user->update(['is_active' => 0]);

        // broadcast(new OfflineUser($user->id));

        Auth::guard('web')->logout();
        
        

        $request->session()->invalidate();

        $request->session()->regenerateToken();
        // DB::update('update users set is_active = 0 where id = ?', [$id]);
        // --------------------------------------------------------------------------
        // $sendmsg = new SendMessageController();
        // $sendmsg->update($id,0);

        return redirect('/');
    }
}
