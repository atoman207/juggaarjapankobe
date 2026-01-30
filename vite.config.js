import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Bind to 127.0.0.1 so local dev works with VPN (avoids VPN routing localhost)
    host: '127.0.0.1',
    port: 5173,
    strictPort: true,
  },
})
