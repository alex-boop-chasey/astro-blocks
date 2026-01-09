/**
 * ============================================================================
 * ASTROBLOCKS - NAVIGATION CONFIGURATION
 * ============================================================================
 *
 * Centralized navigation structure for the component showcase.
 * Single source of truth for all header and footer links.
 *
 * Usage: Import and pass to Header/Footer components
 * ============================================================================
 */

import type { MenuLink, CallToAction } from '~/types';

/** Header navigation configuration */
export const headerData = {
  links: [
    {
      text: 'Heroes',
      href: '/heros',
    },
    {
      text: 'Features',
      href: '/features',
    },
  ] as MenuLink[],
  actions: [
    {
      text: 'GitHub',
      href: 'https://github.com',
      target: '_blank',
    },
  ] as CallToAction[],
};

/** Footer navigation configuration */
export const footerData = {
  links: [
    {
      title: 'Product',
      links: [
        { text: 'Components', href: '#' },
        { text: 'Templates', href: '#' },
        { text: 'Resources', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Documentation', href: '#' },
        { text: 'Guides', href: '#' },
        { text: 'Community', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: '#' },
        { text: 'Blog', href: '#' },
        { text: 'Careers', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: '#' },
    { text: 'Privacy Policy', href: '#' },
  ],
  socialLinks: [
    { ariaLabel: 'GitHub', icon: 'tabler:brand-github', href: 'https://github.com' },
    { ariaLabel: 'Twitter', icon: 'tabler:brand-twitter', href: 'https://twitter.com' },
  ],
  footNote: '© 2026 AstroBlocks. Built with Astro + Vite + TailwindCSS.',
};
