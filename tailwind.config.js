/**
 * ============================================================================
 * TAILWIND PLUS - TAILWIND CSS CONFIGURATION
 * ============================================================================
 *
 * Custom Tailwind configuration with CSS variable-based theming for runtime
 * color customization without rebuilds.
 *
 * Based on AstroWind's theming pattern with CSS variables.
 * ============================================================================
 */

import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // CSS variable-based theming for runtime customization
        primary: 'var(--tp-color-primary, #6366f1)', // indigo-500
        secondary: 'var(--tp-color-secondary, #8b5cf6)', // violet-500
        accent: 'var(--tp-color-accent, #06b6d4)', // cyan-500
        default: 'var(--tp-color-text-default, #ffffff)',
        muted: 'var(--tp-color-text-muted, #9ca3af)', // gray-400
      },
      fontFamily: {
        // CSS variable fallbacks for flexible typography
        sans: ['var(--tp-font-sans, ui-sans-serif)', ...defaultTheme.fontFamily.sans],
        serif: ['var(--tp-font-serif, ui-serif)', ...defaultTheme.fontFamily.serif],
        mono: ['var(--tp-font-mono, ui-monospace)', ...defaultTheme.fontFamily.mono],
        heading: ['var(--tp-font-heading, ui-sans-serif)', ...defaultTheme.fontFamily.sans],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.4s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        slideInRight: {
          '0%': {
            opacity: '0',
            transform: 'translateX(-20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
      },
    },
  },
  plugins: [
    // Custom plugin for intersection observer variant
    function ({ addVariant }) {
      addVariant('intersect', '&.intersect');
    },
  ],
};
