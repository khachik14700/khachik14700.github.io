import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/khachik14700.github.io/', // Обратите внимание на корректный путь
})
