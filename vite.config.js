import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    // Configurazione dell'alias
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  build: {
    rollupOptions: {
      output: {
        entryFileNames: `[name].js`,
        chunkFileNames: `[name].js`,
        assetFileNames: `[name].[ext]`
      }
    },
    cssCodeSplit: false // Combina il CSS in un singolo file
  },
  define: {
    'process.env': {},
//  'Cross-Origin-Opener-Policy': 'same-origin-allow-popups'

  }
})
