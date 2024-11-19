<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Inertia\Middleware;
use Tightenco\Ziggy\Ziggy;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): string|null
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        return array_merge(parent::share($request), [
            'auth' => [
                'user' => $request->user(),
            ],
            'ziggy' => function () use ($request) {
                return array_merge((new Ziggy)->toArray(), [
                    'location' => $request->url(),
                ]);
            },

            'flash' => [
                'notification' => fn () => $request->session()->get('notification'),
                'session_group' => fn () => $request->session()->get('session_group'),
                'session_Email_Invit' => fn () => $request->session()->get('session_Email_Invit'),
                'Add_Member' => fn () => $request->session()->get('Add_Member'),
                'Create_Group' => fn () => $request->session()->get('Create_Group'),
                'message_type_file' => fn () => $request->session()->get('message_type_file'),
                'Delete_message' => fn () => $request->session()->get('Delete_message'),
            ],
            
        ]);
    }
}