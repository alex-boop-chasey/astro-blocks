# 🎨 AstroBlocks Customization Guide

Complete guide to editing and customizing your AstroBlocks components.

## 📋 Table of Contents

1. [Quick Start](#quick-start)
2. [Global Styling (theme.ts)](#global-styling)
3. [Component Structure](#component-structure)
4. [Editing Content](#editing-content)
5. [Editing Layout & Styling](#editing-layout--styling)
6. [Common Customizations](#common-customizations)

---

## 🚀 Quick Start

**Where to make changes:**

1. **Global colors, fonts, backgrounds** → Edit `src/config/theme.ts`
2. **Component content (text, images, links)** → Edit `defaultProps` in each component file
3. **Component layout (spacing, sizing, alignment)** → Edit Tailwind classes in component HTML

---

## 🎨 Global Styling

### Location: `src/config/theme.ts`

This is your **main control panel**. Changes here apply to ALL components automatically.

```typescript
// ============================================================================
// SECTION BACKGROUNDS
// ============================================================================
export const SECTION_BACKGROUND = 'bg-gradient-to-b from-slate-900 via-slate-900 to-black';
// EDIT: Change 'slate-900' to any Tailwind color
// Examples:
// - Light theme: 'bg-white'
// - Blue gradient: 'bg-gradient-to-b from-blue-900 to-black'
// - Custom color: 'bg-[#1a1a2e]'

// ============================================================================
// TYPOGRAPHY
// ============================================================================
export const HEADLINE_CLASSES = 'text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white';
// EDIT: Adjust sizes for all headlines globally
// Size breakpoints:
// - text-4xl: mobile (base)
// - sm:text-5xl: small screens (640px+)
// - md:text-6xl: medium screens (768px+)
// - lg:text-7xl: large screens (1024px+)

export const TEXT_PRIMARY = 'text-white';
// EDIT: Change main text color
// Examples: 'text-gray-900' (light theme), 'text-gray-100' (softer white)

export const TEXT_MUTED = 'text-slate-400';
// EDIT: Change secondary/muted text color
// Examples: 'text-slate-300' (lighter), 'text-gray-600' (light theme)

export const BORDER_DEFAULT = 'border-slate-700/50';
// EDIT: Change border colors globally
// Examples: 'border-slate-600', 'border-blue-500/30', 'border-gray-300' (light theme)

export const IMAGE_OVERLAY = 'bg-gray-900/70';
// EDIT: Adjust overlay on background images
// Examples: 'bg-gray-900/90' (darker), 'bg-blue-900/70' (blue tint), 'bg-white/80' (light theme)
```

---

## 📦 Component Structure

Every component follows this pattern:

```astro
---
// 1. IMPORTS
import { HEADLINE_CLASSES, TEXT_MUTED } from '~/config/theme';

// 2. METADATA
export const metadata = {
  name: 'Hero1',
  path: 'src/components/sections/Hero1.astro',
  description: '...',
};

// 3. PROPS INTERFACE (defines what can be customized)
interface Props {
  headline: string;
  subtitle: string;
  // ... more props
}

// 4. DEFAULT CONTENT (👉 EDIT THIS to change text/images/links)
const defaultProps: Props = {
  headline: 'Your headline here',
  subtitle: 'Your subtitle here',
  // ... more content
};

const { headline, subtitle } = { ...defaultProps, ...Astro.props };
---

<!-- 5. HTML/LAYOUT (👉 EDIT Tailwind classes to change layout) -->
<section class="py-20">
  <h1 class={HEADLINE_CLASSES}>{headline}</h1>
  <p class={TEXT_MUTED}>{subtitle}</p>
</section>
```

---

## ✏️ Editing Content

### Where: `defaultProps` section in each component

Look for sections marked with `// 💡` comments:

```typescript
const defaultProps: Props = {
  // 💡 MAIN HEADLINE
  headline: 'Data to enrich your online business', // ← Edit this text

  // 💡 SUBTITLE/DESCRIPTION
  subtitle: 'Your description text here', // ← Edit this text

  // 💡 PRIMARY BUTTON
  primaryButtonText: 'Get started', // ← Edit button text
  primaryButtonLink: '#', // ← Change where button links to

  // 💡 BACKGROUND IMAGE (in components with images)
  backgroundImage: 'https://images.unsplash.com/...', // ← Replace with your image URL

  // 💡 FEATURES ARRAY (in Feature components)
  features: [
    {
      icon: '...', // SVG path data
      title: 'Feature Name', // ← Edit feature title
      description: 'Feature description', // ← Edit feature description
    },
  ],
};
```

### Image Sources

You can use:
1. **External URLs**: `'https://images.unsplash.com/...'`
2. **Local images**: Import from `/src/assets/` folder
   ```typescript
   import myImage from '~/assets/my-image.jpg';
   // Then use: image: myImage
   ```

---

## 🎯 Editing Layout & Styling

### Where: HTML section (after the `---` separator)

Look for HTML comments with `💡` markers explaining each class:

```astro
<!--
💡 SECTION WRAPPER
- py-20: Vertical padding (top and bottom)
- To add more space: py-32
- To reduce space: py-10
-->
<section class="py-20">

  <!--
  💡 CONTENT CONTAINER
  - max-w-7xl: Maximum width of content
  - To make wider: max-w-full
  - To make narrower: max-w-6xl or max-w-5xl
  -->
  <div class="max-w-7xl mx-auto px-4">

    <!--
    💡 TEXT ALIGNMENT
    - text-center: Centers text
    - To left-align: text-left
    - To right-align: text-right
    -->
    <div class="text-center">
      <h1 class={HEADLINE_CLASSES}>{headline}</h1>
    </div>

  </div>
</section>
```

---

## 🔧 Common Customizations

### 1. Change Section Spacing

**More space between sections:**
```astro
<!-- Change from: -->
<section class="py-20">

<!-- To: -->
<section class="py-32">
```

**Less space:**
```astro
<section class="py-10">
```

### 2. Adjust Content Width

**Make content wider:**
```astro
<!-- Change from: -->
<div class="max-w-7xl">

<!-- To: -->
<div class="max-w-full">  <!-- Full width -->
```

**Make content narrower:**
```astro
<div class="max-w-5xl">  <!-- Smaller max width -->
```

### 3. Change Text Alignment

```astro
<!-- Center (default): -->
<div class="text-center">

<!-- Left-align: -->
<div class="text-left">

<!-- Right-align: -->
<div class="text-right">
```

### 4. Adjust Spacing Between Elements

```astro
<!-- Small spacing: -->
<div class="space-y-4">

<!-- Medium spacing: -->
<div class="space-y-8">

<!-- Large spacing: -->
<div class="space-y-12">
```

### 5. Change Button Layouts

**Stack buttons vertically on all screens:**
```astro
<div class="flex flex-col gap-4">
```

**Side-by-side on all screens:**
```astro
<div class="flex flex-row gap-4">
```

**Stack on mobile, side-by-side on desktop (default):**
```astro
<div class="flex flex-col sm:flex-row gap-4">
```

### 6. Modify Border Radius

**More rounded corners:**
```astro
<!-- Change from: -->
<div class="rounded-2xl">

<!-- To: -->
<div class="rounded-3xl">  <!-- More rounded -->
```

**Less rounded corners:**
```astro
<div class="rounded-lg">   <!-- Less rounded -->
<div class="rounded-none">  <!-- Sharp corners -->
```

### 7. Adjust Grid Layouts

**2-column grid:**
```astro
<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
```

**3-column grid:**
```astro
<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
```

**4-column grid:**
```astro
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
```

---

## 📱 Responsive Design Breakpoints

Tailwind uses these breakpoints:

- `sm:` - Small screens (640px and up)
- `md:` - Medium screens (768px and up)
- `lg:` - Large screens (1024px and up)
- `xl:` - Extra large screens (1280px and up)

**Example:**
```astro
<!--
Mobile: text-2xl (small)
Tablet: text-4xl (medium)
Desktop: text-6xl (large)
-->
<h1 class="text-2xl md:text-4xl lg:text-6xl">
```

---

## 🎨 Color Examples

### Tailwind Color Scale

Colors go from 50 (lightest) to 950 (darkest):

```
gray-50   → Very light gray
gray-100  → Light gray
gray-200  →
gray-300  →
gray-400  →
gray-500  → Medium gray
gray-600  →
gray-700  →
gray-800  →
gray-900  → Very dark gray
gray-950  → Almost black
```

**Common color families:**
- `slate-` (neutral gray with blue tint)
- `gray-` (true neutral gray)
- `blue-` (blue)
- `indigo-` (purple-blue)
- `violet-` (purple)
- `red-` (red)
- `green-` (green)

### Opacity Modifiers

Add `/##` for transparency:

```astro
bg-gray-900/50   → 50% transparent
bg-blue-500/75   → 75% transparent
text-white/90    → 90% opaque (10% transparent)
```

---

## 🛠️ Practical Examples

### Example 1: Change Hero to Light Theme

**In `theme.ts`:**
```typescript
export const SECTION_BACKGROUND = 'bg-white';
export const HEADLINE_CLASSES = '... text-gray-900'; // Dark text
export const TEXT_PRIMARY = 'text-gray-900';
export const TEXT_MUTED = 'text-gray-600';
export const BORDER_DEFAULT = 'border-gray-200';
```

### Example 2: Make Headline Smaller

**In `theme.ts`:**
```typescript
// Change from:
export const HEADLINE_CLASSES = 'text-4xl sm:text-5xl md:text-6xl lg:text-7xl ...';

// To:
export const HEADLINE_CLASSES = 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl ...';
```

### Example 3: Change Hero Content

**In `Hero1.astro`:**
```typescript
const defaultProps: Props = {
  headline: 'Welcome to My Company', // ← Your headline
  subtitle: 'We build amazing products', // ← Your subtitle
  primaryButtonText: 'Start Free Trial', // ← Your button text
  primaryButtonLink: '/signup', // ← Your link
};
```

### Example 4: Add More Space Around Section

**In any component HTML:**
```astro
<!-- Change from: -->
<section class="py-20">

<!-- To: -->
<section class="py-32">  <!-- More vertical padding -->
```

---

## 📚 Resources

- **Tailwind CSS Docs**: https://tailwindcss.com/docs
- **Color Palette**: https://tailwindcss.com/docs/customizing-colors
- **Spacing Scale**: https://tailwindcss.com/docs/padding
- **Responsive Design**: https://tailwindcss.com/docs/responsive-design

---

## ✅ Component Checklist

When customizing a component:

- [ ] Edit content in `defaultProps` section
- [ ] Update images (replace URLs or add local images)
- [ ] Change button links from `#` to real URLs
- [ ] Adjust spacing/layout if needed (edit Tailwind classes)
- [ ] Test on mobile and desktop
- [ ] Update alt text on images for accessibility

---

## 🆘 Need Help?

1. **Check the file comments**: Look for `💡` markers in code
2. **Read this guide**: Search for your specific customization
3. **Tailwind docs**: Most layout changes use standard Tailwind classes
4. **Global changes**: Remember to check `theme.ts` first!

---

**Last updated**: 2026-01-14
