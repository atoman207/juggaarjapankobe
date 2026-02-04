import path from 'path'
import { fileURLToPath } from 'url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: { '@': path.resolve(__dirname, './src') },
  },
  server: {
    // Bind to 127.0.0.1 so local dev works with VPN (avoids VPN routing localhost)
    host: '127.0.0.1',
    port: 5173,
    strictPort: true,
  },
})
