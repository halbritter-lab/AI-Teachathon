import { defineConfig } from 'vitepress'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  title: 'AI-Teachathon | Halbritter Lab',
  description: 'Learn Git, GitHub & AI Tools — Hands On',
  base: '/AI-Teachathon/',

  vite: {
    plugins: [tailwindcss()]
  },

  appearance: 'dark',  // Default to dark mode

  themeConfig: {
    search: {
      provider: 'local'
    },

    siteTitle: 'AI-Teachathon | Halbritter Lab',

    nav: [],  // No top nav bar -- sidebar only. Top bar shows site title only.

    sidebar: [
      { text: 'Setup', link: '/setup' },
      { text: 'Agenda', link: '/agenda' },
      { text: 'AI Tools', link: '/ai-tools' },
      { text: 'Hands-On', link: '/hands-on' },
      { text: 'Ideas', link: '/ideas' },
      { text: 'Resources', link: '/resources' }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/berntpopp/AI-Teachathon' }
    ],

    footer: {
      message: 'Halbritter Lab · CeRKiD · Charite Berlin',
      copyright: '<a href="https://github.com/berntpopp/AI-Teachathon">Contribute on GitHub</a>'
    }
  }
})
