<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" data-theme="dark">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <meta name="color-scheme" content="light dark">

        <title inertia>{{ config('app.name', 'Laravel') }}</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

        <link rel="stylesheet" class="css-dk" href="{{ URL::asset('css/assets/css/template.bundle.color.css')}}" 
        media="(prefers-color-scheme: dark)"
        />

        <link rel="stylesheet" class="css-lt" href="{{ asset('css/assets/css/template.bundle.css')}}"
        media="(prefers-color-scheme: light)"/>
        
        <link rel="stylesheet" class="css-nh" href="{{ asset('css/assets/css/template.bundle.dark.css')}}"
        />
        {{--color <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" /> --}}
  <!-- Theme mode -->
        <script>

const LTCSS = document.querySelectorAll('link[class=css-lt]');
        const DKCSS = document.querySelectorAll('link[class=css-dk]');
        const NIGHT = document.querySelectorAll('link[class=css-nh]');
    if (localStorage.getItem('color-scheme')) {
        let scheme = localStorage.getItem('color-scheme');
        
        [...LTCSS].forEach((link) => {
            link.media = (scheme === 'light') ? 'all' : 'not all';
        });

        [...NIGHT].forEach((link) => {
            link.media = (scheme === 'night') ? 'all' : 'not all';
        });
        [...DKCSS].forEach((link) => {
            link.media = (scheme === 'dark') ? 'all' : 'not all';
        });
        console.log(scheme , ModeDark)
    }
    else{
        [...LTCSS].forEach((link) => {
            link.media =  'all' ;
        });
    }
   
        </script>
        <!-- Font -->
        {{-- <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700" rel="stylesheet"> --}}
        <!-- Scripts -->
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia
    </body>
</html>
