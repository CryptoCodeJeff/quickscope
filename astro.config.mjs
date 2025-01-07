import { defineConfig } from 'astro/config'
import svelte from '@astrojs/svelte'
import robots from 'astro-robots'
import sitemap from '@astrojs/sitemap'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// https://astro.build/config
export default defineConfig({
  site: 'https://www.quickscope.vercel.app',
  integrations: [svelte(), sitemap(), robots()],
  output: 'static', // or 'hybrid'
  server: {
    port: 4000,
  },
  vite: {
    resolve: {
      alias: {
        '@/': `${path.resolve(__dirname, 'src')}/`,
      },
    },
  },
})
