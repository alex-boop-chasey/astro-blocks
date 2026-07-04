# 🚀 AstroBlocks

**A modern, production-ready component library for Astro**
Build beautiful landing pages in minutes with pre-built, customizable sections.

[![Astro](https://img.shields.io/badge/Astro-5.16.8-FF5D01?style=flat&logo=astro)](https://astro.build)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-3178C6?style=flat&logo=typescript)](https://www.typescriptlang.org/)

---

## ✨ Features

- 🎨 **30+ Pre-built Components** - Heroes, Features, Pricing, Contact forms, and more
- 📱 **Mobile-First & Responsive** - Optimized for all screen sizes
- 🌙 **Dark Mode Ready** - Built-in dark theme support
- ⚡ **Performance Optimized** - Lighthouse 100 scores out of the box
- 🎯 **Zero JavaScript** - Static by default, interactive when needed
- 🔧 **Fully Customizable** - Centralized theme system with inline documentation
- 🤖 **AI-Friendly** - Designed for Claude Code and AI-assisted development
- ♿ **Accessible** - WCAG compliant with semantic HTML

---

## 📦 Component Library

### 🦸 Heroes (6 variants)
Full-screen hero sections with CTAs, images, and announcements
- `Hero1` - Centered with announcement pill
- `Hero2` - Split layout with image
- `Hero3` - Gradient background
- `Hero4` - Video background
- `Hero5` - Minimal centered
- `Hero6` - Dashboard screenshot

### ⚡ Features (10 variants)
Showcase your product features with icons and descriptions
- `Feature1` - Two-column with image
- `Feature2` - 2×2 grid centered
- `Feature3` - Dashboard with 3-column grid
- `Feature4` - Split in opaque container
- `Feature5` - Asymmetric headline + grid
- `Feature6` - Checklist layout
- `Feature7` - Simple 3-column text
- `Feature8` - Image + checklist
- `Feature9` - Bento image gallery
- `Feature10` - 3×3 icon grid

### 🎴 Bento Grids (4 variants)
Modern bento-box style layouts
- `Bento1` - 2×2 equal cards
- `Bento2` - Asymmetric 4-card layout
- `Bento3` - 5-card mixed layout
- `Bento4` - 6-card masonry grid

### 💰 Pricing (5 variants)
Pricing tables and comparison cards
- `Price1` - 3-column comparison
- `Price2` - Featured center card
- `Price3` - Toggle annual/monthly
- `Price4` - Simple stacked
- `Price5` - Enterprise comparison

### 📞 Contact (2 variants)
Contact forms and information displays
- `Contact1` - Full sales form
- `Contact2` - Contact cards + locations

---

## 🚀 Quick Start

### Installation

```bash
# Clone or download the project
git clone <your-repo-url> astro-blocks
cd astro-blocks

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:4321` to see your site.

### Project Structure

```
astro-blocks/
├── src/
│   ├── components/
│   │   ├── sections/      # All hero, feature, bento, pricing, contact components
│   │   ├── common/        # Header, Footer, Image components
│   │   └── ui/            # Button, Toggle components
│   ├── layouts/
│   │   ├── Layout.astro   # Base layout
│   │   └── PageLayout.astro # Page wrapper with info bar
│   ├── pages/             # Your pages (index, about, contact, etc.)
│   ├── config/
│   │   ├── theme.ts       # 🎨 Centralized theme configuration
│   │   └── metadata.ts    # SEO metadata
│   ├── styles/
│   │   └── global.css     # Global styles & Tailwind imports
│   └── navigation.ts      # Header/footer navigation config
└── public/                # Static assets
```

---

## 🛠️ Usage

### Method 1: Manual Composition

Create pages by importing and composing components:

```astro
---
// src/pages/about.astro
import PageLayout from '~/layouts/PageLayout.astro';
import Hero1 from '~/components/sections/Hero1.astro';
import Feature3 from '~/components/sections/Feature3.astro';
import Feature4 from '~/components/sections/Feature4.astro';
import Bento2 from '~/components/sections/Bento2.astro';
import Contact1 from '~/components/sections/Contact1.astro';
---

<PageLayout metadata={{ title: 'About Us - AstroBlocks' }}>
  <Hero1
    headline="Building the future of web development"
    description="We create tools that make developers' lives easier."
  />

  <Feature3
    headline="Our Mission"
    description="To democratize beautiful web design."
  />

  <Feature4
    headline="Why Choose Us"
    features={[
      { icon: '...', title: 'Fast', description: 'Lightning quick' },
      { icon: '...', title: 'Secure', description: 'Bank-level security' }
    ]}
  />

  <Bento2 />

  <Contact1 />
</PageLayout>
```

### Method 2: AI-Assisted Development (Recommended) 🤖

AstroBlocks is designed to work seamlessly with Claude Code and other AI assistants.

#### Example Prompts:

**Create a new page:**
```
Claude, create a Services page using Hero2, Feature10, Bento3, and Contact2
```

**Customize content:**
```
Update the Hero1 headline to "Welcome to Bundaberg's Best Bakery"
and change the CTA button to say "Order Now"
```

**Compose a landing page:**
```
Build a SaaS landing page with:
- Hero1 for the main headline
- Feature2 to showcase 4 key features
- Price3 for pricing table
- Contact1 for demo requests
```

**Theme customization:**
```
Change the theme to use blue instead of indigo throughout the site
```

#### Why AI-Friendly?

Every component includes:
- 📝 **Editable Content Sections** with clear emoji markers
- 💡 **Inline Documentation** explaining every Tailwind class
- 🎨 **Clear Structure** with commented sections
- 🔧 **Customization Instructions** built into comments

**Example from Hero1.astro:**

```astro
// ============================================================================
// 📝 EDITABLE CONTENT - Change your text and links here
// ============================================================================
const defaultProps: Props = {
  // 💡 ANNOUNCEMENT PILL (top badge)
  announcementText: 'Announcing our next round of funding.', // Main announcement text
  announcementLink: '#', // Where the announcement links to

  // 💡 MAIN HEADLINE
  headline: 'Data to enrich your online business', // Primary headline text

  // 💡 DESCRIPTION
  description: 'Anim aute id magna aliqua ad ad non deserunt sunt...', // Subtitle below headline

  // 💡 CTA BUTTONS
  primaryButtonText: 'Get started', // Main call-to-action button text
  primaryButtonLink: '#', // Where the primary button links to
}
```

---

## 🎨 Theme Customization

### Centralized Theme System

All colors, typography, and spacing are configured in `src/config/theme.ts`:

```typescript
// Change the entire site's color scheme here
export const SECTION_BACKGROUND = 'bg-linear-to-b from-slate-900 via-slate-900 to-black';
export const TEXT_PRIMARY = 'text-white';
export const TEXT_MUTED = 'text-slate-400';
export const HEADLINE_CLASSES = 'text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight';
```

### Quick Theme Changes

**Change from dark to light:**
```typescript
export const SECTION_BACKGROUND = 'bg-white';
export const TEXT_PRIMARY = 'text-gray-900';
export const TEXT_MUTED = 'text-gray-600';
```

**Change accent color (indigo → blue):**
Use find & replace across the project:
- `indigo-400` → `blue-400`
- `indigo-500` → `blue-500`
- `indigo-600` → `blue-600`

Or ask Claude: *"Change all indigo colors to blue throughout the site"*

---

## 📖 Component Documentation

Every component includes:

### 1. Header Documentation
```astro
/**
 * ============================================================================
 * HERO1 - Main Landing Hero Section
 * ============================================================================
 *
 * FEATURES:
 * - Full viewport height hero
 * - Announcement pill with link
 * - Large centered headline
 * ...
 */
```

### 2. Editable Content Sections
```astro
// 📝 EDITABLE CONTENT - Change your text and links here
const defaultProps = {
  // 💡 Clear instructions for each prop
}
```

### 3. Inline Styling Comments
```astro
<!--
💡 SECTION WRAPPER
- py-24: Vertical padding (96px)
- To adjust spacing: Change py-24 to py-16 (less) or py-32 (more)
-->
```

This makes it easy for both humans and AI to understand and modify components.

---

## 🏗️ Building Pages

### Example: Complete Landing Page

```astro
---
// src/pages/index.astro
import PageLayout from '~/layouts/PageLayout.astro';
import Hero1 from '~/components/sections/Hero1.astro';
import Feature2 from '~/components/sections/Feature2.astro';
import Bento2 from '~/components/sections/Bento2.astro';
import Price1 from '~/components/sections/Price1.astro';
import Contact1 from '~/components/sections/Contact1.astro';
---

<PageLayout metadata={{
  title: 'AstroBlocks - Beautiful Landing Pages',
  description: 'Pre-built Astro components for modern websites'
}}>
  <!-- Hero Section -->
  <Hero1
    announcementText="🎉 New components released!"
    headline="Build faster with AstroBlocks"
    description="30+ production-ready components for Astro"
    primaryButtonText="Get Started"
    primaryButtonLink="/docs"
  />

  <!-- Features Grid -->
  <Feature2
    headline="Everything you need"
    description="All the components to build a complete website"
    features={[
      { icon: '...', title: 'Fast', description: 'Optimized for speed' },
      { icon: '...', title: 'Responsive', description: 'Mobile-first design' },
      { icon: '...', title: 'Accessible', description: 'WCAG compliant' },
      { icon: '...', title: 'Customizable', description: 'Easy to modify' }
    ]}
  />

  <!-- Bento Grid -->
  <Bento2
    headline="Beautiful layouts"
    description="Modern bento-box designs"
  />

  <!-- Pricing -->
  <Price1
    headline="Simple pricing"
    description="Choose the plan that's right for you"
  />

  <!-- Contact Form -->
  <Contact1
    headline="Get in touch"
    description="We'd love to hear from you"
  />
</PageLayout>
```

### Example: Simple About Page

```astro
---
import PageLayout from '~/layouts/PageLayout.astro';
import Hero2 from '~/components/sections/Hero2.astro';
import Feature7 from '~/components/sections/Feature7.astro';
import Contact2 from '~/components/sections/Contact2.astro';
---

<PageLayout metadata={{ title: 'About' }}>
  <Hero2
    headline="Our Story"
    description="Built by developers, for developers"
  />

  <Feature7
    headline="Our Values"
    features={[
      { title: 'Quality', description: 'We never compromise' },
      { title: 'Speed', description: 'Performance is paramount' },
      { title: 'Community', description: 'Built together' }
    ]}
  />

  <Contact2 />
</PageLayout>
```

---

## 🧪 Common Workflows

### Adding a New Component to Existing Page

```bash
# Using Claude Code
"Add Feature5 below the Hero on the homepage, highlighting 4 key benefits"
```

```astro
<!-- Manual addition -->
<Hero1 />
<Feature5
  headline="Key Benefits"
  features={[...]}
/>
<Feature2 />
```

### Changing Colors Throughout Site

```bash
# Using Claude Code
"Change all indigo colors to purple throughout the entire site"
```

```bash
# Manual find & replace
indigo-400 → purple-400
indigo-500 → purple-500
indigo-600 → purple-600
```

### Creating a New Page

```bash
# Using Claude Code
"Create a Products page with Hero3, Feature10 showing 9 product categories,
Bento4 with product images, and Contact1"
```

```bash
# Manual creation
# 1. Create src/pages/products.astro
# 2. Import components
# 3. Compose the page
# 4. Add to navigation.ts
```

---

## 🔧 Configuration

### SEO Metadata

Edit `src/config/metadata.ts`:

```typescript
export const SITE_METADATA = {
  title: 'Your Site Name',
  description: 'Your site description',
  author: 'Your Name',
  // ... more SEO settings
}
```

### Navigation

Edit `src/navigation.ts`:

```typescript
export const headerData = {
  links: [
    { text: 'Home', href: '/' },
    { text: 'About', href: '/about' },
    { text: 'Services', href: '/services' },
    { text: 'Contact', href: '/contact' },
  ],
  actions: [
    { text: 'Get Started', href: '/signup', target: '_self' }
  ]
}
```

---

## 🧞 Commands

| Command | Action |
|---------|--------|
| `npm install` | Install dependencies |
| `npm run dev` | Start dev server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview production build locally |
| `npm run astro check` | Run TypeScript type checking |

---

## 🎯 Best Practices

### 1. Start with a Plan
Sketch out your page structure before coding:
```
Hero1 (main headline)
↓
Feature2 (4 key features)
↓
Bento2 (visual showcase)
↓
Price1 (pricing)
↓
Contact1 (CTA form)
```

### 2. Use Component Showcase Pages
Visit `/heros`, `/features`, `/bento`, `/pricing`, `/contact` to preview all variants.

### 3. Customize Theme First
Before modifying individual components, set up your theme in `src/config/theme.ts`.

### 4. Keep Default Props
Components include sensible defaults - only override what you need:

```astro
<!-- Override only what's needed -->
<Hero1
  headline="My Custom Headline"
  <!-- Other props use defaults -->
/>
```

### 5. Use AI for Repetitive Tasks
Let Claude handle:
- Creating multiple similar pages
- Updating content across components
- Theming and color changes
- Adding navigation items

---

## 🤝 Working with Claude Code

### Setup Instructions for Claude

When starting a new session with Claude Code:

```
I'm working on an Astro site using the AstroBlocks template library.
The project structure is:
- Components are in src/components/sections/
- Each component has emoji-marked editable sections (📝)
- Theme config is in src/config/theme.ts
- All components have inline documentation

I need you to [your specific task].
```

### Example Claude Prompts

**Page Creation:**
```
Create a "Services" page with Hero2, Feature10 (9 service cards),
Bento3, and Contact1. Use a professional consulting theme.
```

**Content Updates:**
```
Update all Hero components to reference "Bundaberg" instead of generic text.
Make it specific to a local bakery business.
```

**Styling Changes:**
```
Change the color scheme from dark to light throughout the site.
Update theme.ts and all component backgrounds.
```

**Component Discovery:**
```
Show me all available Bento components and their differences.
```

**Bug Fixes:**
```
The Contact1 form validation isn't working. Fix it and add
proper error messages.
```

---

## 📚 Additional Resources

- [Astro Documentation](https://docs.astro.build)
- [Tailwind CSS v4 Docs](https://tailwindcss.com)
- [Astro Icons](https://www.astroicon.dev/)
- [Tabler Icons](https://tabler.io/icons)

---

## 📄 License

MIT License - feel free to use this in your projects!

---

## 🙏 Credits

Built with:
- [Astro](https://astro.build) - The web framework for content-driven websites
- [Tailwind CSS](https://tailwindcss.com) - A utility-first CSS framework
- [Astro Icon](https://www.astroicon.dev/) - Icon component for Astro
- [Tabler Icons](https://tabler.io/icons) - Open source icon set

---

**Made with ❤️ for developers who value speed and quality**

*Questions? Issues? Open an issue on GitHub or ask Claude Code for help!*
