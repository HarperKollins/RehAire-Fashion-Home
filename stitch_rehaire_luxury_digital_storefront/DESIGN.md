---
name: Noir d'Or Editorial
colors:
  surface: '#121414'
  surface-dim: '#121414'
  surface-bright: '#37393a'
  surface-container-lowest: '#0c0f0f'
  surface-container-low: '#1a1c1c'
  surface-container: '#1e2020'
  surface-container-high: '#282a2b'
  surface-container-highest: '#333535'
  on-surface: '#e2e2e2'
  on-surface-variant: '#d0c5af'
  inverse-surface: '#e2e2e2'
  inverse-on-surface: '#2f3131'
  outline: '#99907c'
  outline-variant: '#4d4635'
  surface-tint: '#e9c349'
  primary: '#f2ca50'
  on-primary: '#3c2f00'
  primary-container: '#d4af37'
  on-primary-container: '#554300'
  inverse-primary: '#735c00'
  secondary: '#c9c6c5'
  on-secondary: '#313030'
  secondary-container: '#4a4949'
  on-secondary-container: '#bab8b7'
  tertiary: '#d0cdcd'
  on-tertiary: '#313030'
  tertiary-container: '#b4b2b2'
  on-tertiary-container: '#454544'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffe088'
  primary-fixed-dim: '#e9c349'
  on-primary-fixed: '#241a00'
  on-primary-fixed-variant: '#574500'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c9c6c5'
  on-secondary-fixed: '#1c1b1b'
  on-secondary-fixed-variant: '#474646'
  tertiary-fixed: '#e5e2e1'
  tertiary-fixed-dim: '#c8c6c5'
  on-tertiary-fixed: '#1c1b1b'
  on-tertiary-fixed-variant: '#474746'
  background: '#121414'
  on-background: '#e2e2e2'
  surface-variant: '#333535'
  matte-black: '#0D0D0D'
  brushed-gold: '#D4AF37'
  subtle-grey: '#6E7169'
  pure-white: '#FFFFFF'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 72px
    fontWeight: '700'
    lineHeight: 80px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '600'
    lineHeight: 48px
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '500'
    lineHeight: 40px
  body-lg:
    fontFamily: Montserrat
    fontSize: 18px
    fontWeight: '300'
    lineHeight: 28px
    letterSpacing: 0.01em
  body-md:
    fontFamily: Montserrat
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: Montserrat
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.2em
  button:
    fontFamily: Montserrat
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.1em
spacing:
  unit: 8px
  gutter: 24px
  margin-desktop: 80px
  margin-mobile: 20px
  section-padding: 120px
---

## Brand & Style

The design system is engineered for a high-end, editorial fashion experience. It targets a sophisticated audience seeking exclusivity and curated luxury. The aesthetic is rooted in **Modern Minimalism** with a **High-Contrast** edge, evoking the feeling of a physical luxury lookbook or an invitation-only boutique.

The interface prioritizes breathtaking imagery over interface chrome. It utilizes a deep, matte aesthetic to create an immersive environment where products appear as illuminated artifacts. The mood is confident, quiet, and uncompromisingly premium.

## Colors

The palette is strictly limited to maintain an aura of exclusivity. 

- **Matte Black (#0D0D0D):** The foundation of the system. Used for all primary backgrounds to create a "void" that allows photography to pop.
- **Brushed Gold (#D4AF37):** Reserved for moments of high importance—primary actions, active states, and delicate ornamentation.
- **Pure White (#FFFFFF):** Used exclusively for typography and essential icons to ensure maximum legibility against the dark canvas.
- **Surface Tones:** A secondary black (#1A1A1A) is used for subtle layering to distinguish between the background and elevated components like cards or menus.

## Typography

This design system employs a high-contrast typographic pairing to balance tradition and modernity.

- **Headlines:** Use **Playfair Display**. This serif typeface provides the "Editorial" feel. It should be used for product names, section headers, and large display quotes. Use tighter letter spacing for large display sizes to increase the feeling of tension and luxury.
- **Body & UI:** Use **Montserrat**. This geometric sans-serif provides clarity and a modern architectural feel. 
- **The "Label-Caps" Style:** A signature of the system. Used for categories, breadcrumbs, and small metadata. It must always be uppercase with generous letter spacing (0.2em) to evoke high-end branding.

## Layout & Spacing

The layout philosophy is based on a **Fixed Grid** with extreme whitespace. In luxury fashion, space equals value.

- **Desktop:** 12-column grid with an 80px outer margin. Gutters are kept at 24px to maintain a tight relationship between images, while section vertical padding is expansive (120px+) to allow the eye to rest.
- **Mobile:** 4-column grid with a 20px outer margin. 
- **Alignment:** Centralize key content for a symmetrical, formal feel. Use "asymmetric balance" for editorial lookbooks—shifting imagery off-center to create visual interest.

## Elevation & Depth

This design system avoids traditional shadows in favor of **Tonal Layers** and **Bold Outlines**.

- **Depth through Contrast:** Instead of shadows, use subtle shifts in background color (from #0D0D0D to #1A1A1A) to denote a surface is "closer" to the user.
- **Thin Outlines:** Use 1px solid borders in Gold (#D4AF37) at 30-50% opacity or subtle greys (#6E7169) to define containers and buttons. 
- **Transitions:** All hover states and page entries must use slow, elegant fades (300ms - 500ms) rather than "snapping" into place, mimicking the fluid movement of high-quality fabric.

## Shapes

The shape language is **Sharp (0)**. 

To maintain a rigorous, architectural, and "high-fashion" aesthetic, all corners are strictly 0px. This applies to buttons, input fields, product cards, and images. The sharp edges communicate precision, authority, and a modern edge.

## Components

### Buttons
- **Primary:** 1px gold border (#D4AF37), sharp corners, uppercase centered text with 0.1em tracking. Background is transparent, filling with a subtle gold tint on hover.
- **Secondary:** All white text with a 1px white bottom-border only (underline style), no side borders.

### Cards (Product)
- Minimalist design. The image fills the container edge-to-edge. 
- Typography (Price/Name) is placed underneath in a centered stack. 
- No borders on the card itself; use whitespace to separate items.

### Input Fields
- Underline-only style (1px grey border on bottom). 
- Placeholder text in Montserrat Light.
- Focused state transforms the underline to 1px Gold.

### Pricing Table
- A structured, minimalist grid. 
- Use thin 1px horizontal lines to separate rows. No vertical lines.
- The "Luxury Tier" or "Selected" column is highlighted with a very faint gold vertical accent on the left-hand side.

### Navigation
- Top-anchored, transparent background that becomes #0D0D0D on scroll. 
- Centered logo with navigation links split to the left and right (or hidden in a minimalist "Menu" trigger).