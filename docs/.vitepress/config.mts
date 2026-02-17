import { defineConfig } from 'vitepress'
import tailwindcss from '@tailwindcss/vite'
import { readFileSync, existsSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  title: 'AI-Teachathon | Halbritter Lab',
  description: 'Learn Git, GitHub & AI Tools - Hands On',
  base: '/AI-Teachathon/',

  // Git-based last updated timestamps on every page
  lastUpdated: true,

  // Extract page metadata into separate chunks for better caching
  metaChunk: true,

  appearance: 'dark',

  vite: {
    plugins: [
      tailwindcss(),
      {
        name: 'serve-public-html',
        configureServer(server) {
          server.middlewares.use((req, res, next) => {
            if (req.url?.endsWith('/presentation.html')) {
              const filePath = resolve(__dirname, '../public/presentation.html')
              if (existsSync(filePath)) {
                res.setHeader('Content-Type', 'text/html')
                res.end(readFileSync(filePath, 'utf-8'))
                return
              }
            }
            next()
          })
        },
      },
    ],

    server: {
      // Auto-open browser on dev server start
      open: '/AI-Teachathon/',

      // HMR over WebSocket - enabled by default, overlay shows build errors
      hmr: {
        overlay: true,
      },

      // File watcher config (chokidar)
      watch: {
        // Ignore dirs that don't affect the site
        ignored: ['**/.planning/**', '**/node_modules/**', '**/.git/**'],
      },
    },
  },

  themeConfig: {
    search: {
      provider: 'local',
    },

    editLink: {
      pattern: 'https://github.com/berntpopp/AI-Teachathon/edit/main/docs/:path',
      text: 'Edit this page on GitHub',
    },

    siteTitle: 'AI-Teachathon | Halbritter Lab',

    nav: [],

    sidebar: [
      { text: 'Setup', link: '/setup' },
      { text: 'Agenda', link: '/agenda' },
      { text: 'Slides', link: '/slides' },
      { text: 'AI Tools', link: '/ai-tools' },
      { text: 'Hands-On', link: '/hands-on' },
      { text: 'Ideas', link: '/ideas' },
      { text: 'Resources', link: '/resources' },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/berntpopp/AI-Teachathon' },
    ],

    footer: {
      message: 'Halbritter Lab · CeRKiD · Charite Berlin',
      copyright:
        '<a href="https://github.com/berntpopp/AI-Teachathon">Contribute on GitHub</a>',
    },
  },
})
