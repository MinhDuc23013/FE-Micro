import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    https: {
      key: fs.readFileSync(path.resolve(__dirname, 'cert/localhost.key')),
      cert: fs.readFileSync(path.resolve(__dirname, 'cert/localhost.crt')),
    },
    host: 'localhost',
    port: 4200,

    proxy: {
      "/apim": {
        target: "https://localhost:44306",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/apim/, ""),
      },
    },
  }
})