import { defineConfig } from 'vite';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';

export default defineConfig({
    server: {
        port: process.env.PORT || 3000,
        open: true,
        host: true
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@import "./src/scss/abstracts/_variables.scss";`
            }
        },
        postcss: {
            plugins: [
                autoprefixer(),
                cssnano({
                    preset: ['default', {
                        discardComments: {removeAll: true },
                        reduceIdents: false,
                        mergeRules: true,
                    }]
                })
            ]
        }
    },
    build: {
        outDir: 'dist',
        assetsDir: 'assets',
        sourcemap: true,
        lib: {
            entry: 'src/js/index.js',
            name: 'ZephCode',
            fileName: (format) => `zephcode.${format}.js`
        },
        rollupOptions: {
            input: {
                main: 'index.html'
            },
            output: {
                assetFileNames: (assetInfo) => {
                    if (assetInfo.name.endsWith('.css')) {
                        return 'css/[name][extname]';
                    }
                    return 'assets/[name]-[hash][extname]';
                }
            }
        }
    }
});