/**
 * ============================================================================
 * THEME CONFIGURATION
 * ============================================================================
 *
 * 🎨 CENTRALIZED STYLING - Edit these values to update ALL components at once
 *
 * This is your main styling control panel. Changes here apply globally across
 * every Hero, Feature, Bento, and Price component automatically.
 *
 * QUICK START:
 * 1. Change colors by editing the Tailwind classes (e.g., 'from-slate-900' → 'from-blue-900')
 * 2. Adjust text sizes in HEADLINE_CLASSES (e.g., 'text-7xl' → 'text-6xl')
 * 3. Switch text colors in TEXT_PRIMARY (e.g., 'text-white' → 'text-gray-100')
 * ============================================================================
 */

// ============================================================================
// 📐 SECTION BACKGROUNDS
// ============================================================================
/**
 * Background applied to all section components
 *
 * 💡 EDIT THIS: Change colors/gradients here
 * Current: Dark gradient (slate-900 to black)
 *
 * Examples:
 * - Light theme: 'bg-white'
 * - Blue gradient: 'bg-linear-to-b from-blue-900 via-blue-800 to-black'
 * - Custom color: 'bg-[#1a1a2e]'
 */
export const SECTION_BACKGROUND = 'bg-linear-to-b from-slate-900 via-slate-900 to-black';

// ============================================================================
// ✏️ TYPOGRAPHY
// ============================================================================
/**
 * Main headline styling - used in all Hero/Feature headlines
 *
 * 💡 EDIT THIS: Adjust sizes, weight, color, spacing
 *
 * Size breakpoints:
 * - text-4xl: mobile (base)
 * - sm:text-5xl: small screens (640px+)
 * - md:text-6xl: medium screens (768px+)
 * - lg:text-7xl: large screens (1024px+)
 *
 * Examples:
 * - Smaller: 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl'
 * - Different color: Replace 'text-white' with 'text-blue-100'
 * - Lighter weight: Replace 'font-bold' with 'font-semibold'
 */
export const HEADLINE_CLASSES = 'text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-tight';

/**
 * Subtitle/description styling
 *
 * 💡 EDIT THIS: Adjust subtitle sizes
 * Examples:
 * - Larger: 'text-lg sm:text-xl md:text-2xl'
 * - Smaller: 'text-sm sm:text-base md:text-lg'
 */
export const SUBTITLE_CLASSES = 'text-base sm:text-lg md:text-xl leading-relaxed';

// ============================================================================
// 🎨 TEXT COLORS
// ============================================================================
/**
 * Primary text color - used for body text, labels, etc.
 *
 * 💡 EDIT THIS: Change main text color
 * Examples:
 * - Light theme: 'text-gray-900'
 * - Softer white: 'text-gray-100'
 * - Custom: 'text-[#e0e0e0]'
 */
export const TEXT_PRIMARY = 'text-white';

/**
 * Muted text color - used for secondary text, descriptions
 *
 * 💡 EDIT THIS: Change subtle text color
 * Examples:
 * - Lighter: 'text-slate-300'
 * - Blue tint: 'text-blue-200'
 * - Light theme: 'text-gray-600'
 */
export const TEXT_MUTED = 'text-slate-400';

// ============================================================================
// 🔲 BORDERS
// ============================================================================
/**
 * Default border color - used for cards, dividers
 *
 * 💡 EDIT THIS: Change border colors
 * Examples:
 * - Brighter: 'border-slate-600'
 * - Colored: 'border-blue-500/30'
 * - Light theme: 'border-gray-300'
 */
export const BORDER_DEFAULT = 'border-slate-700/50';

// ============================================================================
// 🖼️ IMAGE OVERLAYS
// ============================================================================
/**
 * Overlay for background images (makes text readable)
 *
 * 💡 EDIT THIS: Adjust overlay darkness/color
 * Examples:
 * - Darker: 'bg-gray-900/90'
 * - Lighter: 'bg-gray-900/50'
 * - Blue tint: 'bg-blue-900/70'
 * - Light theme: 'bg-white/80'
 */
export const IMAGE_OVERLAY = 'bg-gray-900/70';
