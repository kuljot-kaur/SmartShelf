# Design System Specification: High-End Editorial Intelligence

## 1. Overview & Creative North Star: "The Intelligent Curated Ledger"

This design system moves away from the "generic SaaS dashboard" to create a premium, editorial-inspired experience for high-stakes inventory management. Our Creative North Star is **"The Intelligent Curated Ledger."** 

We are not just displaying data; we are narrating the health of a supply chain. By rejecting the rigid "box-and-border" constraints of traditional B2B software, we use **intentional asymmetry**, **layered depth**, and **high-contrast typography scales** to create a sense of authoritative calm. The interface should feel like a bespoke digital broadsheet—clean, spacious, and undeniably intelligent.

### The Signature Look
*   **Asymmetric Breathing Room:** Use the `spacing.20` and `spacing.24` tokens to create large structural offsets, allowing the eye to rest.
*   **Editorial Contrast:** We pair the technical precision of *Inter* with the sophisticated, wide-stanced *Manrope* for headlines to signal a premium, "human-in-the-loop" AI experience.

---

## 2. Colors: Tonal Architecture

Color is used as a functional material rather than decoration. We rely on **Tonal Layering** to define hierarchy, adhering to strict visual rules to maintain a high-end feel.

### The "No-Line" Rule
**Borders are strictly prohibited for sectioning.** To separate a sidebar from a main feed, or a header from a body, use background shifts. 
*   *Example:* A `surface-container-low` navigation panel sitting against a `surface` background. The boundary is felt through the color shift, not a 1px line.

### Surface Hierarchy & Nesting
Treat the UI as a physical stack of semi-opaque materials.
*   **Base:** `surface` (#f8f9fa) – The canvas.
*   **Sectioning:** `surface-container-low` (#f3f4f5) – Secondary structural areas.
*   **Primary Interaction Cards:** `surface-container-lowest` (#ffffff) – High-elevation focal points.
*   **Nesting:** When placing a container within a container, always move one step in the hierarchy (e.g., an input field using `surface-container-high` inside a `surface-container-lowest` card).

### The "Glass & Gradient" Rule
To elevate the "AI" personality:
*   **Glassmorphism:** For floating modals or "AI Insight" overlays, use `surface_variant` with a 60% opacity and a `backdrop-filter: blur(20px)`.
*   **Signature Textures:** For high-level Waste Score CTAs, use a subtle linear gradient from `primary` (#05111e) to `primary_container` (#1a2634) at a 135° angle.

---

## 3. Typography: The Narrative Voice

We utilize a dual-typeface system to balance technical efficiency with executive-level sophistication.

| Level | Token | Typeface | Size | Weight / Usage |
| :--- | :--- | :--- | :--- | :--- |
| **Display** | `display-lg` | Manrope | 3.5rem | Light (300). Use for hero metrics (e.g., Total Waste Reduced). |
| **Headline** | `headline-md` | Manrope | 1.75rem | Medium (500). Use for section titles. |
| **Title** | `title-sm` | Inter | 1rem | Bold (700). For card titles and navigation. |
| **Body** | `body-md` | Inter | 0.875rem | Regular (400). Standard data readouts. |
| **Label** | `label-sm` | Inter | 0.6875rem | Semi-bold (600) + All Caps. For metadata and chart axes. |

---

## 4. Elevation & Depth: Tonal Layering

We avoid traditional "material" shadows in favor of **Ambient Depth.**

*   **The Layering Principle:** Depth is achieved via color logic. A `surface-container-highest` element feels "closer" to the user than a `surface-dim` element.
*   **Ambient Shadows:** Use only for floating elements (Tooltips, Modals).
    *   *Spec:* `0px 12px 32px rgba(25, 28, 29, 0.06)`. The shadow color is derived from `on_surface` at ultra-low opacity to mimic natural light.
*   **The "Ghost Border" Fallback:** If a divider is functionally required for accessibility, use `outline_variant` at **15% opacity**. Never use 100% opaque borders.

---

## 5. Components: Precision Primitives

### Cards & Data Modules
*   **Strict Rule:** No dividers. Use `spacing.5` (1.7rem) of vertical white space to separate groups.
*   **Styling:** Radius `md` (0.75rem). Background `surface-container-lowest`. 
*   **Context:** Data viz cards should have an asymmetric internal padding (e.g., more padding at the bottom than the top) to create an editorial feel.

### Status Badges & Progress
*   **Eco-Growth (Secondary):** Use `secondary_container` (#60fcc6) for "Optimal" states.
*   **Waste Alerts:** Use `tertiary_fixed` (#ffdea3) for near-expiry (Soft Yellow) and `error_container` (#ffdad6) for high-waste.
*   **Progress Bars:** Background should be `surface-variant`. The "fill" should be a gradient from `secondary` to `secondary_fixed_dim`.

### Buttons
*   **Primary:** Background `primary` (#05111e), text `on_primary`. Shape `full` (pill) for high-end distinction.
*   **Tertiary (Ghost):** No background, no border. Use `primary` text with a `label-md` style.

### Input Fields
*   **Structure:** Minimalist. Use `surface-container-high` as a subtle background fill rather than an outline. 
*   **Focus State:** Transition the background to `surface-container-highest` and add a 2px "Ghost Border" of `primary` at 20% opacity.

---

## 6. Do’s and Don’ts

### Do
*   **Do** use `display-lg` for single, impactful numbers.
*   **Do** embrace negative space. If a layout feels "empty," increase the margins rather than adding more content.
*   **Do** use `backdrop-blur` on navigation bars to maintain the "frosted glass" depth.

### Don’t
*   **Don’t** use black (#000000) for text. Always use `on_surface` (#191c1d) for a softer, premium contrast.
*   **Don’t** use 1px solid lines to separate list items. Use a background stagger (alternating `surface` and `surface-container-low`).
*   **Don’t** use standard 4px or 6px corners. Stick to the `md` (0.75rem/12px) or `lg` (1rem/16px) scale to maintain the "modern-organic" feel.