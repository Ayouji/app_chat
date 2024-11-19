import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    server: { 
        host:'localhost', 
        port:'8080',
        hmr: { host:'localhost' }, 
        // https: { 
        //     key: fs.readFileSync(`/path/to/${host}.key`), 
        //     cert: fs.readFileSync(`/path/to/${host}.crt`), 
        // }, 
    },
    plugins: [
        laravel({
            input: 'resources/js/app.jsx',
            ssr: 'resources/js/ssr.jsx',
            refresh: true,
        }),
        react(),

    ],
    
});
