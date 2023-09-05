import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

interface ViteConfigInput {
    mode: string;
    command: string;
}

export default (args: ViteConfigInput) => {
    const generateScopedName =
        args.mode === 'production' ? '[hash:2]' : '[folder]_[local]_[hash:2]';

    return defineConfig({
        server: {
            host: true,
        },
        resolve: {
            alias: {
                '@': resolve(__dirname, './src'),
                '@styles': resolve(__dirname, './src/assets/styles'),
                '@components': resolve(__dirname, './src/components'),
                '@modules': resolve(__dirname, './src/modules'),
            },
        },
        plugins: [react()],
        css: {
            modules: {
                generateScopedName,
                localsConvention: 'camelCaseOnly',
            },
        },
    });
};
