import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import 'dotenv/config'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  server: {
    port: parseInt(process.env.VITE_PORT || '3000'),
  },
  plugins: [react(), tsconfigPaths()],
  base:'/'
})