import './bootstrap';
// import '../css/app.css';
import '../css/style01.css';
// import '../css/styleRom.css';
// import '../css/fonts.css';

// import 'bootstrap/dist/css/bootstrap.min.css';

import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { Provider } from 'react-redux';
import 'popper.js';
import "bootstrap/dist/js/bootstrap.bundle.min";
// import Echo from 'laravel-echo';
// import Echo from 'laravel-echo';

// import   '../css/assets/css/template.bundle.dark.css'
// import '../css/assets/css/template.bundle.css'
// import '../css/assets/js/template'
// import '../css/assets/js/vendor'
import { BrowserRouter } from 'react-router-dom';
import {Store} from './store';
import { useEffect, useState } from 'react';




const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';

createInertiaApp({

    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
    setup({ el, App, props }) {
        const root = createRoot(el);
        root.render(
            <Provider store={Store}>
                <App {...props} />
            </Provider>
        );
    },
    progress: {
        color: '#A6D0DD',
    },
    
    // Update the URL here
    // resolve: (name) => resolvePageComponent(`https://c2c8-160-179-56-57.ngrok-free.app/Pages/${name}.jsx`, import.meta.glob(`https://c2c8-160-179-56-57.ngrok-free.app/Pages/**/*.jsx`)),

});







