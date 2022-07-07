import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const config = {
  plugins: [react()],
};

const { VITE_PORT } = process.env;
if (VITE_PORT) {
  const port = parseInt(VITE_PORT, 10);
  if (Number.isInteger(port)) {
    Object.assign(config, { server: { port } });
  }
}

// https://vitejs.dev/config/
export default defineConfig(config);
