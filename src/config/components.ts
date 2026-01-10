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
      backgroundImage: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWVldGluZ3xlbnwwfHwwfHx8MA%3D%3D',
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
      image: 'https://plus.unsplash.com/premium_photo-1757922072982-31adbc729cb9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGJsdWUlMjBwcm9kdWN0JTIwcGhvdG98ZW58MHwwfDB8fHww',
    },
    background: 'bg-gradient-to-b from-slate-900 via-slate-900 to-black',
  },

  hero4: {
    metadata: {
      name: 'Hero4',
      path: 'src/components/sections/Hero4.astro',
      description: 'Split hero section with announcement pill, angled image panel, and dual CTA buttons. Includes a mobile image fallback.',
    },
    props: {
      announcementText: 'Anim qute id magna aliqua ad ad non deserunt sunt.',
      announcementLink: '#',
      announcementLinkText: 'Read more',
      headline: 'Data to enrich your business',
      subtitle: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.',
      primaryButtonText: 'Get started',
      primaryButtonLink: '#',
      secondaryButtonText: 'Learn more',
      secondaryButtonLink: '#',
      image: 'https://images.unsplash.com/photo-1483389127117-b6a2102724ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80',
    },
    background: 'bg-slate-950',
  },

  hero5: {
    metadata: {
      name: 'Hero5',
      path: 'src/components/sections/Hero5.astro',
      description: 'Split hero with brand mark, announcement pill, left-aligned content, and a full-height image panel on the right. Includes dual CTA buttons and mobile image fallback.',
    },
    props: {
      announcementText: 'Anim qute id magna aliqua ad ad non deserunt sunt.',
      announcementLink: '#',
      announcementLinkText: 'Read more',
      headline: 'Data to enrich your business',
      subtitle: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat.',
      primaryButtonText: 'Get started',
      primaryButtonLink: '#',
      secondaryButtonText: 'Learn more',
      secondaryButtonLink: '#',
      image: 'https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2102&q=80',
    },
    background: 'bg-slate-950',
  },

  hero6: {
    metadata: {
      name: 'Hero6',
      path: 'src/components/sections/Hero6.astro',
      description: 'Two-column hero with bold headline, CTA buttons, and a floating collage of rounded photos over a subtle grid background.',
    },
    props: {
      headline: "We’re changing the way people connect",
      subtitle:
        'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua. Anim aute id magna aliqua ad ad non deserunt sunt.',
      primaryButtonText: 'Get started',
      primaryButtonLink: '#',
      secondaryButtonText: 'Live demo',
      secondaryButtonLink: '#',
      imageOne:
        'https://images.unsplash.com/photo-1766228385031-ad983e6a360e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDd8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D',
      imageTwo:
        'https://images.unsplash.com/photo-1767041573027-f77c33df6b7c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDU3fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D',
      imageThree:
        'https://plus.unsplash.com/premium_photo-1766341850543-d54ca4f85172?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDc1fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D',
      imageFour:
        'https://plus.unsplash.com/premium_photo-1661715817028-818d78a4e8e5?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZnJpZW5kc3xlbnwwfHwwfHx8MA%3D%3D',
    },
    background: 'bg-slate-950',
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
