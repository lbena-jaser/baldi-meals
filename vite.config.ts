import { defineConfig } from 'vite'
import { resolve } from 'path'
import fs from 'fs'

export default defineConfig({
  root: resolve(__dirname, 'public'),
  publicDir: resolve(__dirname, 'assets'),
  build: {
    outDir: resolve(__dirname, 'dist'),
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'public/index.html'),
        join: resolve(__dirname, 'public/join/index.html'),
      }
    }
  },
  server: {
    open: '/'
  },
  resolve: {
    alias: {
      '/src': resolve(__dirname, 'src')
    }
  },
  appType: 'mpa',
  plugins: [
    {
      name: 'rewrite-middleware',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          const url = req.url?.split('?')[0] // Remove query params
          
          // Skip if it's a file with extension or already includes index.html
          if (url?.includes('.') || url?.includes('index.html')) {
            return next()
          }
          
          // Check if directory exists and has index.html
          if (url && url !== '/') {
            const dirPath = resolve(__dirname, 'public', url.slice(1))
            const indexPath = resolve(dirPath, 'index.html')
            
            if (fs.existsSync(indexPath)) {
              req.url = `${url}/index.html`
            }
          }
          
          next()
        })
      }
    }
  ]
})