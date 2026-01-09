/**
 * ============================================================================
 * COMPONENT SHOWCASE CONFIGURATION
 * ============================================================================
 *
 * Centralized configuration for all component showcase data.
 * Edit this file to update component props, backgrounds, and metadata.
 *
 * USAGE:
 * - Import specific sections: import { heroComponents } from '~/config/components'
 * - Access component data by key: heroComponents.hero1
 */

import type { Hero } from '~/types';

// ============================================================================
// HERO COMPONENTS
// ============================================================================

export const heroComponents = {
  hero1: {
    metadata: {
      name: 'Hero1',
      path: 'src/components/sections/Hero1.astro',
      description: 'Full-width hero section with announcement pill, headline, subtitle, and dual CTA buttons. Features dark gradient background and responsive layout.',
    },
    props: {
      announcementText: 'Announcing our next round of funding.',
      announcementLink: '#',
      announcementLinkText: 'Read more',
      headline: 'Data to enrich your online business',
      subtitle: 'Anim qute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat.',
      primaryButtonText: 'Get started',
      primaryButtonLink: '#',
      secondaryButtonText: 'Learn more',
      secondaryButtonLink: '#',
    } as Hero,
    background: 'bg-gradient-to-b from-slate-900 via-slate-900 to-black',
  },

  hero2: {
    metadata: {
      name: 'Hero2',
      path: 'src/components/sections/Hero2.astro',
      description: 'Full-width hero section with background image overlay, announcement pill, headline, subtitle, and dual CTA buttons. Same structure as Hero1 but with background image.',
    },
    props: {
      backgroundImage: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2830&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply',
      announcementText: 'Announcing our next round of funding.',
      announcementLink: '#',
      announcementLinkText: 'Read more',
      headline: 'Data to enrich your online business',
      subtitle: 'Anim qute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat.',
      primaryButtonText: 'Get started',
      primaryButtonLink: '#',
      secondaryButtonText: 'Learn more',
      secondaryButtonLink: '#',
    } as Hero,
    background: 'bg-slate-900',
  },

  hero3: {
    metadata: {
      name: 'Hero3',
      path: 'src/components/sections/Hero3.astro',
      description: 'Centered hero section with headline, subtitle, CTA buttons, and a large dashboard screenshot below. Features double border effect on the image with rounded corners.',
    },
    props: {
      headline: 'Data to enrich your online business',
      subtitle: 'Anim qute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat.',
      primaryButtonText: 'Get started',
      primaryButtonLink: '#',
      secondaryButtonText: 'Learn more',
      secondaryButtonLink: '#',
      image: 'https://tailwindcss.com/plus-assets/img/component-images/dark-project-app-screenshot.png',
    },
    background: 'bg-gradient-to-b from-slate-900 via-slate-900 to-black',
  },
} as const;

// ============================================================================
// FEATURE COMPONENTS
// ============================================================================

export const featureComponents = {
  feature1: {
    metadata: {
      name: 'Feature1',
      path: 'src/components/sections/Feature1.astro',
      description: 'Two-column feature section with feature list on the left and image on the right. Image scales to match content height.',
    },
    props: {
      eyebrow: 'Deploy faster',
      headline: 'Everything you need to deploy your app',
      description: 'Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum pulvinar et feugiat blandit at. In mi viverra elit nunc.',
      features: [
        {
          icon: 'M2.5 12.5C2.5 7.52944 6.52944 3.5 11.5 3.5C16.4706 3.5 20.5 7.52944 20.5 12.5C20.5 17.4706 16.4706 21.5 11.5 21.5C6.52944 21.5 2.5 17.4706 2.5 12.5Z',
          iconBg: 'bg-indigo-500/10',
          title: 'Push to deploy',
          description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis.',
        },
        {
          icon: 'M2.5 12.5C2.5 7.52944 6.52944 3.5 11.5 3.5C16.4706 3.5 20.5 7.52944 20.5 12.5C20.5 17.4706 16.4706 21.5 11.5 21.5C6.52944 21.5 2.5 17.4706 2.5 12.5Z',
          iconBg: 'bg-indigo-500/10',
          title: 'SSL certificates',
          description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
        },
        {
          icon: 'M2.5 12.5C2.5 7.52944 6.52944 3.5 11.5 3.5C16.4706 3.5 20.5 7.52944 20.5 12.5C20.5 17.4706 16.4706 21.5 11.5 21.5C6.52944 21.5 2.5 17.4706 2.5 12.5Z',
          iconBg: 'bg-indigo-500/10',
          title: 'Database backups',
          description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        },
      ],
      image: {
        src: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
        alt: 'Product screenshot',
      },
    },
    background: 'bg-gradient-to-b from-slate-900 via-slate-900 to-black',
  },
} as const;

// ============================================================================
// HELPER TYPES (for type inference)
// ============================================================================

export type HeroComponentKey = keyof typeof heroComponents;
export type FeatureComponentKey = keyof typeof featureComponents;
