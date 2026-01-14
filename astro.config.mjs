// @ts-check
/**
 * ============================================================================
 * ASTROBLOCKS - ASTRO CONFIGURATION
 * ============================================================================
 *
 * Main configuration file for the Astro + Vite + TailwindCSS project.
 *
 * INTEGRATIONS:
 * - TailwindCSS v4 (via @tailwindcss/vite plugin)
 *
 * USAGE:
 * - Modify this file to add integrations, configure build options, etc.
 * - See: https://astro.build/config
 * ============================================================================
 */
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';

export default defineConfig({
  integrations: [icon()],
  vite: {
    plugins: [tailwindcss()]
  },
  image: {
    // Allow external image domains for optimization
    domains: ['tailwindcss.com', 'images.unsplash.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.tailwindcss.com'
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com'
      }
    ]
  }
});