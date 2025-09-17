import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://georgenizoridis.com',
  output: 'static',
  adapter: undefined,
  integrations: [tailwind({ applyBaseStyles: false })],
  server: {
    watch: {
      usePolling: true,
      interval: 300
    }
  }
});
