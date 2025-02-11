import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './', // Используй '/' если сайт в корне GitHub Pages, иначе './' для корректных путей
})
