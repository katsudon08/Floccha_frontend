import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // globalとwindowの互換性を示すことによってdraft.jsのエラーを解消
  define: { global: 'window' }
})
