import { defineConfig } from 'vite';
import { resolve } from "path";

export default defineConfig({
  base: "./",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        history: resolve(__dirname, 'view-history.html'),
        historyJs: resolve(__dirname, './src/js/history.js'),
      },
    },
  },
});
