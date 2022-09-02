import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';

export default defineConfig({
  plugins: [solidPlugin()],
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
  },
  test: {
    globals: true,
    environment: 'jsdom',
    transformMode: {
        web: [/\.[jt]sx?$/],
    },
    setupFiles: './setupVitest',
    // solid needs to be inline to work around
    // a resolution issue in vitest
    // And solid-testing-library needs to be here so that the 'hydrate'
    // method will be provided
    deps: {
        inline: [/solid-js/, /solid-testing-library/],
    },
},
resolve: {
    conditions: ['development', 'browser'],
},
});
