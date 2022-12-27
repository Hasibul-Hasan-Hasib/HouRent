import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import envCompatible from 'vite-plugin-env-compatible'
import svgrPlugin from 'vite-plugin-svgr'
const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
    envPrefix: 'REACT_APP_',
    // This changes the out put dir from dist to build
    // comment this out if that isn't relevant for your project
    server: {
        port: '3000',
        // proxy: {
        //     '/': 'http://localhost:3000',
        //     '/': {
        //         target: 'http://localhost:3000/'
        //     },
        //     '/admin': {
        //         target: 'http://localhost:8081/'
        //     },
        // },
    },
    build: {
        outDir: 'build',
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, '/.src')
        },
    },
    plugins: [
        react(),
        envCompatible(),
        svgrPlugin({
            svgrOptions: {
                icon: true,
            },
        }),
    ],
})