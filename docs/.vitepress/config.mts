import { defineConfig } from 'vitepress'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  title: 'AI-Teachathon | Halbritter Lab',
  description: 'Learn Git, GitHub & AI Tools — Hands On',
  base: '/AI-Teachathon/',

  // Git-based last updated timestamps on every page
  lastUpdated: true,

  // Extract page metadata into separate chunks for better caching
  metaChunk: true,

  appearance: 'dark',

  vite: {
    plugins: [tailwindcss()],

    server: {
      // Auto-open browser on dev server start
      open: '/AI-Teachathon/',

      // HMR over WebSocket — enabled by default, overlay shows build errors
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

    siteTitle: 'AI-Teachathon | Halbritter Lab',

    nav: [],

    sidebar: [
      { text: 'Setup', link: '/setup' },
      { text: 'Agenda', link: '/agenda' },
      { text: 'Slides', link: '/presentation.html' },
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
