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
    // Allow access from network (0.0.0.0 = all network interfaces)
    host: '0.0.0.0',
    port: 5173,
    strictPort: true,
    watch: {
      // Reduce EBUSY / "resource busy or locked" on Windows when IDE has file open
      usePolling: true,
    },
  },
})
