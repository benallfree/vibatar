import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'node:fs'
import path from 'node:path'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'profile-models',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          const match = req.url?.match(/^\/([^/]+)\.gltf$/)
          if (match) {
            const username = match[1]
            const modelPath = path.join(
              process.cwd(),
              'public',
              'profiles',
              username,
              'default.gltf'
            )

            console.log(modelPath)
            if (fs.existsSync(modelPath)) {
              console.log(`found`)
              const content = fs.readFileSync(modelPath)
              res.setHeader('Content-Type', 'model/gltf+json')
              res.end(content)
              return
            }
          }
          next()
        })
      },
    },
  ],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
})
