import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite'
import Inspect from "vite-plugin-inspect";

// const { resolve, dirname } = require('path');

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  plugins: [Inspect()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        cart: resolve(__dirname, 'cart/index.html'),
        login: resolve(__dirname, 'login/index.html'),
        logout: resolve(__dirname, 'logout/index.html'),
        product: resolve(__dirname, 'product/index.html'),
        products: resolve(__dirname, 'products/index.html'),
        signin: resolve(__dirname, 'signin/index.html'),
      },
    },
  },
})