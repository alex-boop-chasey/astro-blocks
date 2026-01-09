/**
 * ============================================================================
 * ASTROBLOCKS - TYPE DEFINITIONS
 * ============================================================================
 *
 * Central TypeScript type definitions for components, layouts, and utilities.
 * Based on AstroWind's compositional type system.
 *
 * Pattern: Base interfaces composed using Omit to avoid duplication while
 * maintaining strict typing.
 * ============================================================================
 */

import type { AstroComponentFactory } from 'astro/runtime/server/index.js';
import type { HTMLAttributes, ImageMetadata } from 'astro/types';

/**
 * ============================================
 * BASE COMPONENT TYPES
 * ============================================
 */

/** Base widget/section properties */
export interface Widget {
  id?: string;
  isDark?: boolean;
  bg?: string;
  classes?: Record<string, string | Record<string, string>>;
}

/** Common headline structure */
export interface Headline {
  title?: string;
  subtitle?: string;
  tagline?: string;
  classes?: Record<string, string>;
}

/** Call-to-action button properties */
export interface CallToAction extends Omit<HTMLAttributes<'a'>, 'slot'> {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'link';
  text?: string;
  icon?: string;
  classes?: Record<string, string>;
  type?: 'button' | 'submit' | 'reset';
}

/** Image properties */
export interface Image {
  src: string | ImageMetadata;
  alt?: string;
}

/**
 * ============================================
 * HERO COMPONENT TYPES
 * ============================================
 */

/** Hero section with centered content */
export interface Hero extends Omit<Headline, 'classes'>, Omit<Widget, 'classes'> {
  content?: string;
  actions?: string | CallToAction[];
  image?: string | ImageMetadata | Image;
  backgroundImage?: string | ImageMetadata;
}

/**
 * ============================================
 * FEATURE COMPONENT TYPES
 * ============================================
 */

/** Individual feature item */
export interface Item {
  title?: string;
  description?: string;
  icon?: string;
  classes?: Record<string, string>;
  callToAction?: CallToAction;
  image?: Image;
}

/** Feature with icon */
export interface Feature {
  icon: string;
  iconBg?: string;
  title: string;
  description: string;
}

/** Features section */
export interface Features extends Omit<Headline, 'classes'>, Widget {
  image?: string | unknown;
  video?: Video;
  items?: Array<Item>;
  columns?: number;
  defaultIcon?: string;
  callToAction1?: CallToAction;
  callToAction2?: CallToAction;
  isReversed?: boolean;
  isBeforeContent?: boolean;
  isAfterContent?: boolean;
}

/**
 * ============================================
 * METADATA & SEO TYPES
 * ============================================
 */

export interface MetaDataRobots {
  index?: boolean;
  follow?: boolean;
}

export interface MetaDataOpenGraph {
  url?: string;
  siteName?: string;
  images?: Array<{
    url: string;
    width?: number;
    height?: number;
  }>;
  locale?: string;
  type?: string;
}

export interface MetaDataTwitter {
  handle?: string;
  site?: string;
  cardType?: string;
}

export interface MetaData {
  title?: string;
  ignoreTitleTemplate?: boolean;
  canonical?: string;
  robots?: MetaDataRobots;
  description?: string;
  openGraph?: MetaDataOpenGraph;
  twitter?: MetaDataTwitter;
}

/**
 * ============================================
 * NAVIGATION TYPES
 * ============================================
 */

export interface Link {
  text?: string;
  href?: string;
  ariaLabel?: string;
  icon?: string;
}

export interface MenuLink extends Link {
  links?: Array<Link>;
}

/**
 * ============================================
 * LAYOUT TYPES
 * ============================================
 */

export interface LayoutProps {
  metadata?: MetaData;
}

/**
 * ============================================
 * VIDEO TYPES
 * ============================================
 */

export interface Video {
  src: string;
  type?: string;
}
