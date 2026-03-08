import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/march8/', // имя вашего репозитория
  server: {
    host: true,
    allowedHosts: ['.ngrok-free.dev'],
    port: 5173,
    headers: {
      'ngrok-skip-browser-warning': 'true'
    }
  }
})