---
name: Hanoi Autumn Indochine
colors:
  surface: '#fbf9f9'
  surface-dim: '#dbdad9'
  surface-bright: '#fbf9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3f3'
  surface-container: '#efeded'
  surface-container-high: '#e9e8e7'
  surface-container-highest: '#e4e2e2'
  on-surface: '#1b1c1c'
  on-surface-variant: '#43474c'
  inverse-surface: '#303031'
  inverse-on-surface: '#f2f0f0'
  outline: '#74777c'
  outline-variant: '#c4c6cc'
  surface-tint: '#506071'
  primary: '#051625'
  on-primary: '#ffffff'
  primary-container: '#1b2b3a'
  on-primary-container: '#8292a5'
  inverse-primary: '#b8c8dc'
  secondary: '#924a34'
  on-secondary: '#ffffff'
  secondary-container: '#fea186'
  on-secondary-container: '#783522'
  tertiary: '#735c00'
  on-tertiary: '#ffffff'
  tertiary-container: '#cca830'
  on-tertiary-container: '#4f3e00'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d3e4f8'
  primary-fixed-dim: '#b8c8dc'
  on-primary-fixed: '#0c1d2b'
  on-primary-fixed-variant: '#384858'
  secondary-fixed: '#ffdbd1'
  secondary-fixed-dim: '#ffb5a0'
  on-secondary-fixed: '#3b0900'
  on-secondary-fixed-variant: '#753320'
  tertiary-fixed: '#ffe088'
  tertiary-fixed-dim: '#e9c349'
  on-tertiary-fixed: '#241a00'
  on-tertiary-fixed-variant: '#574500'
  background: '#fbf9f9'
  on-background: '#1b1c1c'
  surface-variant: '#e4e2e2'
typography:
  display-lg:
    fontFamily: Hanken Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-md:
    fontFamily: Hanken Grotesk
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 30px
    fontWeight: '600'
    lineHeight: 38px
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-sm:
    fontFamily: Hanken Grotesk
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-lg:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.04em
  display-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 48px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
  stack-xl: 64px
---

## Brand & Style

This design system is built to evoke the refined tranquility of a Hanoi autumn—a blend of historical depth and modern luxury. The brand personality is **distinguished, hospitable, and curated**, targeting high-discerning travelers and expatriates looking for premium stays in the capital.

The visual direction follows a **Modern Minimalism** approach with a **Tactile** twist. We prioritize high-quality photography and generous whitespace to allow the properties to breathe, while using "Hanoi Autumn" color accents to provide a sense of place and warmth. The UI should feel like a high-end concierge service: efficient and professional, yet deeply welcoming.

## Colors

The palette is inspired by the textures of Hanoi.
- **Primary (Deep Indigo):** Represents the twilight sky over West Lake and the professional trust required for high-end real estate.
- **Secondary (Terracotta):** Inspired by the weathered bricks of the Old Quarter and the warmth of a sunset. Use this for primary calls to action and key highlights.
- **Tertiary (Soft Gold):** Used sparingly for premium badges, "Superhost" statuses, or luxury tier indicators.
- **Background (Warm Bone):** An off-white base that prevents the "clinical" feel of pure white, providing a soft, paper-like quality to the interface.
- **Success/Error:** Use a muted Sage Green for success and a deep Burnt Sienna for errors to maintain the sophisticated tonal range.

## Typography

We use **Hanken Grotesk** for headlines to convey a sharp, contemporary edge. Its geometric precision feels architectural and premium. For body copy and functional UI elements, **Inter** provides exceptional legibility, especially for Vietnamese diacritics which can often feel cluttered in tighter fonts.

- **Headlines:** Use SemiBold or Bold weights. Keep letter spacing slightly tight for a modern "editorial" look.
- **Body:** Use Regular weight with generous line height (1.5x) to ensure readability during long browsing sessions.
- **Labels:** Use Medium or SemiBold in all-caps (sparingly) for categories like "AMENITIES" or "LOCATION" to create visual hierarchy.

## Layout & Spacing

The design system utilizes a **12-column fixed-fluid hybrid grid**. The content is centered with a maximum width of 1280px on desktop to maintain focus, while margins expand to fill ultra-wide screens.

- **Vertical Rhythm:** Built on an 8px base unit. 
- **Whitespace:** Use `stack-xl` (64px) between major sections (e.g., Hero to Featured Listings) to emphasize high-end positioning.
- **Mobile:** Transition to a 4-column grid with 16px side margins. Cards should typically span the full width of the container minus margins to maximize the impact of interior photography.

## Elevation & Depth

To maintain a "modern Indochine" aesthetic, we avoid heavy shadows. Instead, we use **Tonal Layers** and **Soft Ambient Shadows**.

- **Level 0 (Background):** #FAFAF8. The canvas.
- **Level 1 (Cards/Surfaces):** Pure White (#FFFFFF) with a very soft, diffused shadow (15% opacity Primary color, 20px blur, 4px Y-offset). This makes the property cards appear as if they are resting lightly on the warm background.
- **Level 2 (Navigation/Modals):** Pure White with a slightly sharper shadow to indicate interactivity and priority.
- **Outlines:** Use a 1px border in #E5E5E1 for input fields and inactive states to maintain structure without adding visual weight.

## Shapes

The shape language is **friendly yet structured**. We use a "Rounded" (Level 2) approach to soften the high-end professional feel, making it approachable.

- **Standard Elements:** Buttons and input fields use a `0.5rem` (8px) radius.
- **Large Elements:** Property cards, search bars, and imagery containers use `rounded-lg` (1rem / 16px) to create a soft, modern frame for photography.
- **Iconography:** Icons should be medium-stroke (2px) with rounded caps and joins to match the corner radii of the containers.

## Components

### Buttons
- **Primary:** Filled Terracotta (#B1624B) with white text. High-contrast for "Book Now" or "Search."
- **Secondary:** Outlined Deep Indigo (#1B2B3A). Used for "View Details" or "Message Host."
- **Ghost:** Text-only in Deep Indigo for low-priority actions like "Clear Filters."

### Cards
- Property cards must have a fixed aspect ratio (4:3) for the main image. 
- Title and price should be clearly separated using `headline-sm` for price and `body-md` for the title.
- Incorporate a small "Luxury" or "Verified" badge using the Soft Gold color.

### Inputs & Search
- The global search bar should be a floating Level 2 element with `rounded-xl` corners.
- Use "Floating Labels" for input fields to keep the form clean and minimize vertical space.

### Chips & Badges
- Used for amenities (e.g., "Wifi," "Balcony"). Use a light gray background (#F1F1F1) with `label-md` text. Rounded-pill shape.

### Images
- All images should have a subtle 1px inner border in 5% black to define edges against the warm white background.