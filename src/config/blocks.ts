/**
 * Central block registry for AstroBlocks.
 *
 * This is intentionally plain data. Showcase pages, future filters, the page
 * builder, and the eventual code exporter can all read this without importing
 * Astro components directly.
 */

export type BlockCategory = 'hero' | 'feature' | 'bento' | 'pricing' | 'contact';

export type RecommendedPage =
  | 'home'
  | 'landing'
  | 'about'
  | 'services'
  | 'features'
  | 'pricing'
  | 'contact';

export interface BlockCategoryDefinition {
  id: BlockCategory;
  label: string;
  route: string;
  description: string;
}

export interface BlockDefinition {
  id: string;
  name: string;
  category: BlockCategory;
  componentName: string;
  sourcePath: `src/components/sections/${string}.astro`;
  importPath: `~/components/sections/${string}.astro`;
  showcaseRoute: string;
  description: string;
  tags: string[];
  bestFor: RecommendedPage[];
  editableProps: string[];
}

export const blockCategories = [
  {
    id: 'hero',
    label: 'Hero Components',
    route: '/heros',
    description: 'First-screen sections for landing pages, product pages, and campaign pages.',
  },
  {
    id: 'feature',
    label: 'Feature Components',
    route: '/features',
    description: 'Sections for explaining benefits, capabilities, processes, values, and proof points.',
  },
  {
    id: 'bento',
    label: 'Bento Components',
    route: '/bentos',
    description: 'Dense grid layouts for presenting several product or service highlights at once.',
  },
  {
    id: 'pricing',
    label: 'Pricing Components',
    route: '/pricing',
    description: 'Pricing tables, plan cards, and offer sections for conversion flows.',
  },
  {
    id: 'contact',
    label: 'Contact Components',
    route: '/contact',
    description: 'Lead capture, sales inquiry, department, and location sections.',
  },
] as const satisfies BlockCategoryDefinition[];

const heroEditableProps = [
  'announcementText',
  'announcementLink',
  'announcementLinkText',
  'headline',
  'subtitle',
  'primaryButtonText',
  'primaryButtonLink',
  'secondaryButtonText',
  'secondaryButtonLink',
];

const featureEditableProps = ['tagline', 'headline', 'description', 'features', 'imageSrc', 'imageAlt'];

const pricingEditableProps = [
  'headline',
  'description',
  'plans',
  'features',
  'primaryButtonText',
  'primaryButtonLink',
];

const bentoCardProps = [
  'tagline',
  'headline',
  'cardTitles',
  'cardDescriptions',
  'cardImages',
];

export const blocks = [
  {
    id: 'hero-1',
    name: 'Hero1',
    category: 'hero',
    componentName: 'Hero1',
    sourcePath: 'src/components/sections/Hero1.astro',
    importPath: '~/components/sections/Hero1.astro',
    showcaseRoute: '/heros#hero-1',
    description: 'Centered full-width hero with announcement pill, headline, subtitle, and two calls to action.',
    tags: ['centered', 'announcement', 'dual-cta', 'dark'],
    bestFor: ['home', 'landing'],
    editableProps: heroEditableProps,
  },
  {
    id: 'hero-2',
    name: 'Hero2',
    category: 'hero',
    componentName: 'Hero2',
    sourcePath: 'src/components/sections/Hero2.astro',
    importPath: '~/components/sections/Hero2.astro',
    showcaseRoute: '/heros#hero-2',
    description: 'Centered full-width hero with background image overlay, announcement pill, and two calls to action.',
    tags: ['centered', 'background-image', 'announcement', 'dual-cta'],
    bestFor: ['home', 'landing'],
    editableProps: ['backgroundImage', ...heroEditableProps],
  },
  {
    id: 'hero-3',
    name: 'Hero3',
    category: 'hero',
    componentName: 'Hero3',
    sourcePath: 'src/components/sections/Hero3.astro',
    importPath: '~/components/sections/Hero3.astro',
    showcaseRoute: '/heros#hero-3',
    description: 'Centered hero with call to action buttons and a large dashboard screenshot below.',
    tags: ['centered', 'dashboard', 'screenshot', 'saas'],
    bestFor: ['home', 'landing'],
    editableProps: [...heroEditableProps, 'imageSrc', 'imageAlt'],
  },
  {
    id: 'hero-4',
    name: 'Hero4',
    category: 'hero',
    componentName: 'Hero4',
    sourcePath: 'src/components/sections/Hero4.astro',
    importPath: '~/components/sections/Hero4.astro',
    showcaseRoute: '/heros#hero-4',
    description: 'Split hero with announcement pill, angled image panel, and mobile image fallback.',
    tags: ['split', 'angled-image', 'announcement', 'dual-cta'],
    bestFor: ['home', 'landing', 'services'],
    editableProps: [...heroEditableProps, 'imageSrc', 'imageAlt'],
  },
  {
    id: 'hero-5',
    name: 'Hero5',
    category: 'hero',
    componentName: 'Hero5',
    sourcePath: 'src/components/sections/Hero5.astro',
    importPath: '~/components/sections/Hero5.astro',
    showcaseRoute: '/heros#hero-5',
    description: 'Left-aligned split hero with brand mark, announcement pill, and full-height image panel.',
    tags: ['split', 'brand-mark', 'image-panel', 'announcement'],
    bestFor: ['home', 'landing', 'about'],
    editableProps: [...heroEditableProps, 'brandText', 'imageSrc', 'imageAlt'],
  },
  {
    id: 'hero-6',
    name: 'Hero6',
    category: 'hero',
    componentName: 'Hero6',
    sourcePath: 'src/components/sections/Hero6.astro',
    importPath: '~/components/sections/Hero6.astro',
    showcaseRoute: '/heros#hero-6',
    description: 'Two-column hero with bold content and a floating collage over a subtle grid background.',
    tags: ['split', 'photo-collage', 'grid-background', 'dual-cta'],
    bestFor: ['home', 'landing', 'services'],
    editableProps: [...heroEditableProps, 'images'],
  },
  {
    id: 'feature-1',
    name: 'Feature1',
    category: 'feature',
    componentName: 'Feature1',
    sourcePath: 'src/components/sections/Feature1.astro',
    importPath: '~/components/sections/Feature1.astro',
    showcaseRoute: '/features#feature-1',
    description: 'Two-column feature section with feature list on the left and image on the right.',
    tags: ['split', 'image', 'icon-list'],
    bestFor: ['home', 'landing', 'features', 'services'],
    editableProps: featureEditableProps,
  },
  {
    id: 'feature-2',
    name: 'Feature2',
    category: 'feature',
    componentName: 'Feature2',
    sourcePath: 'src/components/sections/Feature2.astro',
    importPath: '~/components/sections/Feature2.astro',
    showcaseRoute: '/features#feature-2',
    description: 'Centered feature section with eyebrow, headline, description, and a two by two icon grid.',
    tags: ['centered', 'icon-grid', 'two-by-two'],
    bestFor: ['home', 'landing', 'features'],
    editableProps: featureEditableProps,
  },
  {
    id: 'feature-3',
    name: 'Feature3',
    category: 'feature',
    componentName: 'Feature3',
    sourcePath: 'src/components/sections/Feature3.astro',
    importPath: '~/components/sections/Feature3.astro',
    showcaseRoute: '/features#feature-3',
    description: 'Centered header, large dashboard image, and a three-column feature grid below.',
    tags: ['dashboard', 'screenshot', 'three-column', 'saas'],
    bestFor: ['home', 'landing', 'features'],
    editableProps: featureEditableProps,
  },
  {
    id: 'feature-4',
    name: 'Feature4',
    category: 'feature',
    componentName: 'Feature4',
    sourcePath: 'src/components/sections/Feature4.astro',
    importPath: '~/components/sections/Feature4.astro',
    showcaseRoute: '/features#feature-4',
    description: 'Split feature section in an opaque container with text content and a dashboard image.',
    tags: ['split', 'dashboard', 'container', 'image'],
    bestFor: ['home', 'features', 'services'],
    editableProps: featureEditableProps,
  },
  {
    id: 'feature-5',
    name: 'Feature5',
    category: 'feature',
    componentName: 'Feature5',
    sourcePath: 'src/components/sections/Feature5.astro',
    importPath: '~/components/sections/Feature5.astro',
    showcaseRoute: '/features#feature-5',
    description: 'Asymmetric feature section with large headline and a two by two feature grid.',
    tags: ['asymmetric', 'icon-grid', 'two-by-two'],
    bestFor: ['home', 'landing', 'features'],
    editableProps: featureEditableProps,
  },
  {
    id: 'feature-6',
    name: 'Feature6',
    category: 'feature',
    componentName: 'Feature6',
    sourcePath: 'src/components/sections/Feature6.astro',
    importPath: '~/components/sections/Feature6.astro',
    showcaseRoute: '/features#feature-6',
    description: 'Asymmetric feature section with intro copy and a two-column checkmark list.',
    tags: ['asymmetric', 'checklist', 'two-column'],
    bestFor: ['home', 'features', 'services'],
    editableProps: featureEditableProps,
  },
  {
    id: 'feature-7',
    name: 'Feature7',
    category: 'feature',
    componentName: 'Feature7',
    sourcePath: 'src/components/sections/Feature7.astro',
    importPath: '~/components/sections/Feature7.astro',
    showcaseRoute: '/features#feature-7',
    description: 'Simple centered header with a text-only feature grid.',
    tags: ['centered', 'text-grid', 'simple'],
    bestFor: ['home', 'features', 'services'],
    editableProps: featureEditableProps,
  },
  {
    id: 'feature-8',
    name: 'Feature8',
    category: 'feature',
    componentName: 'Feature8',
    sourcePath: 'src/components/sections/Feature8.astro',
    importPath: '~/components/sections/Feature8.astro',
    showcaseRoute: '/features#feature-8',
    description: 'Split feature section in an opaque container with image and checklist content.',
    tags: ['split', 'image', 'checklist', 'container'],
    bestFor: ['about', 'services', 'features'],
    editableProps: featureEditableProps,
  },
  {
    id: 'feature-9',
    name: 'Feature9',
    category: 'feature',
    componentName: 'Feature9',
    sourcePath: 'src/components/sections/Feature9.astro',
    importPath: '~/components/sections/Feature9.astro',
    showcaseRoute: '/features#feature-9',
    description: 'Text content paired with an asymmetric bento-style image gallery.',
    tags: ['split', 'image-gallery', 'bento'],
    bestFor: ['about', 'home', 'services'],
    editableProps: ['headline', 'description', 'images', 'imageAlt'],
  },
  {
    id: 'feature-10',
    name: 'Feature10',
    category: 'feature',
    componentName: 'Feature10',
    sourcePath: 'src/components/sections/Feature10.astro',
    importPath: '~/components/sections/Feature10.astro',
    showcaseRoute: '/features#feature-10',
    description: 'Icon grid for showing many available sections, services, or capabilities.',
    tags: ['icon-grid', 'multi-item', 'services'],
    bestFor: ['home', 'services', 'features'],
    editableProps: featureEditableProps,
  },
  {
    id: 'feature-11',
    name: 'Feature11',
    category: 'feature',
    componentName: 'Feature11',
    sourcePath: 'src/components/sections/Feature11.astro',
    importPath: '~/components/sections/Feature11.astro',
    showcaseRoute: '/features#feature-11',
    description: 'Values section with long-form supporting copy and a numbered steps list.',
    tags: ['values', 'steps', 'long-form', 'about'],
    bestFor: ['about', 'services'],
    editableProps: ['headline', 'description', 'steps'],
  },
  {
    id: 'feature-12',
    name: 'Feature12',
    category: 'feature',
    componentName: 'Feature12',
    sourcePath: 'src/components/sections/Feature12.astro',
    importPath: '~/components/sections/Feature12.astro',
    showcaseRoute: '/features#feature-12',
    description: 'Steps timeline with headline, icon steps, and a supporting image.',
    tags: ['timeline', 'steps', 'image', 'process'],
    bestFor: ['about', 'services', 'features'],
    editableProps: ['headline', 'steps', 'imageSrc', 'imageAlt'],
  },
  {
    id: 'bento-1',
    name: 'Bento1',
    category: 'bento',
    componentName: 'Bento1',
    sourcePath: 'src/components/sections/Bento1.astro',
    importPath: '~/components/sections/Bento1.astro',
    showcaseRoute: '/bentos#bento-1',
    description: 'Asymmetric bento grid with headline and four visual feature cards.',
    tags: ['asymmetric', 'image-cards', 'feature-cards'],
    bestFor: ['home', 'landing', 'features'],
    editableProps: bentoCardProps,
  },
  {
    id: 'bento-2',
    name: 'Bento2',
    category: 'bento',
    componentName: 'Bento2',
    sourcePath: 'src/components/sections/Bento2.astro',
    importPath: '~/components/sections/Bento2.astro',
    showcaseRoute: '/bentos#bento-2',
    description: 'Two by two bento grid with tagline, headline, and four equal feature cards.',
    tags: ['two-by-two', 'feature-cards', 'balanced'],
    bestFor: ['home', 'landing', 'features'],
    editableProps: bentoCardProps,
  },
  {
    id: 'bento-3',
    name: 'Bento3',
    category: 'bento',
    componentName: 'Bento3',
    sourcePath: 'src/components/sections/Bento3.astro',
    importPath: '~/components/sections/Bento3.astro',
    showcaseRoute: '/bentos#bento-3',
    description: 'Bento grid with two large cards on top and three compact cards below.',
    tags: ['mixed-grid', 'feature-cards', 'five-card'],
    bestFor: ['home', 'landing', 'features'],
    editableProps: bentoCardProps,
  },
  {
    id: 'price-1',
    name: 'Price1',
    category: 'pricing',
    componentName: 'Price1',
    sourcePath: 'src/components/sections/Price1.astro',
    importPath: '~/components/sections/Price1.astro',
    showcaseRoute: '/pricing#price-1',
    description: 'Two-column pricing section with feature lists and call to action buttons.',
    tags: ['two-column', 'feature-list', 'cta'],
    bestFor: ['pricing', 'landing'],
    editableProps: pricingEditableProps,
  },
  {
    id: 'price-2',
    name: 'Price2',
    category: 'pricing',
    componentName: 'Price2',
    sourcePath: 'src/components/sections/Price2.astro',
    importPath: '~/components/sections/Price2.astro',
    showcaseRoute: '/pricing#price-2',
    description: 'Alternative two-column pricing layout with feature lists and call to action buttons.',
    tags: ['two-column', 'feature-list', 'cta'],
    bestFor: ['pricing', 'landing'],
    editableProps: pricingEditableProps,
  },
  {
    id: 'price-3',
    name: 'Price3',
    category: 'pricing',
    componentName: 'Price3',
    sourcePath: 'src/components/sections/Price3.astro',
    importPath: '~/components/sections/Price3.astro',
    showcaseRoute: '/pricing#price-3',
    description: 'Three-column pricing section with tiered starter, growth, and scale plans.',
    tags: ['three-column', 'tiers', 'comparison'],
    bestFor: ['pricing', 'landing'],
    editableProps: pricingEditableProps,
  },
  {
    id: 'price-4',
    name: 'Price4',
    category: 'pricing',
    componentName: 'Price4',
    sourcePath: 'src/components/sections/Price4.astro',
    importPath: '~/components/sections/Price4.astro',
    showcaseRoute: '/pricing#price-4',
    description: 'Lifetime membership pricing section with a compact two-column offer layout.',
    tags: ['membership', 'single-offer', 'two-column'],
    bestFor: ['pricing', 'landing'],
    editableProps: pricingEditableProps,
  },
  {
    id: 'price-5',
    name: 'Price5',
    category: 'pricing',
    componentName: 'Price5',
    sourcePath: 'src/components/sections/Price5.astro',
    importPath: '~/components/sections/Price5.astro',
    showcaseRoute: '/pricing#price-5',
    description: 'Three-column pricing cards with a featured middle plan.',
    tags: ['three-column', 'featured-plan', 'cards'],
    bestFor: ['pricing', 'landing'],
    editableProps: pricingEditableProps,
  },
  {
    id: 'contact-1',
    name: 'Contact1',
    category: 'contact',
    componentName: 'Contact1',
    sourcePath: 'src/components/sections/Contact1.astro',
    importPath: '~/components/sections/Contact1.astro',
    showcaseRoute: '/contact#contact-1',
    description: 'Professional sales contact form with standard lead fields and privacy policy copy.',
    tags: ['form', 'sales', 'lead-capture'],
    bestFor: ['contact', 'landing', 'services'],
    editableProps: ['headline', 'description', 'buttonText', 'privacyText', 'privacyLinkText', 'privacyLink'],
  },
  {
    id: 'contact-2',
    name: 'Contact2',
    category: 'contact',
    componentName: 'Contact2',
    sourcePath: 'src/components/sections/Contact2.astro',
    importPath: '~/components/sections/Contact2.astro',
    showcaseRoute: '/contact#contact-2',
    description: 'Contact information cards with multiple departments and office locations.',
    tags: ['contact-cards', 'locations', 'departments'],
    bestFor: ['contact', 'about'],
    editableProps: ['headline', 'description', 'departments', 'locations'],
  },
] as const satisfies BlockDefinition[];

export const getBlocksByCategory = (category: BlockCategory) =>
  blocks.filter((block) => block.category === category);

export const getBlockById = (id: string) => blocks.find((block) => block.id === id);

export const blockCategorySummaries = blockCategories.map((category) => ({
  ...category,
  count: getBlocksByCategory(category.id).length,
}));

