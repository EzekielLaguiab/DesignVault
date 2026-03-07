# DesignVault 🗂️

> **Free, production-ready web design templates with complete design systems.**

DesignVault is a free open-source collection of **24 website templates** across **8 categories** — each shipped with a full design system: color palette, typography pairing, spacing tokens, and reusable components. Built for developers and designers who want to learn good design fundamentals while getting a head start on real projects.

---

## ✨ Live Preview

Every template includes a **live in-browser preview** — click any template to see a fully rendered webpage using its exact colors, typography, and real content. No guessing what it looks like in practice.

---

## 📁 Project Structure

```
DesignVault/
├── index.html       # Single-page app shell — all pages rendered by JS
├── styles.css       # Full design token system + all component styles
├── script.js        # Template data, live preview generator, routing
└── README.md
```

The entire project runs as a **vanilla HTML/CSS/JS** single-page application — zero frameworks, zero build tools, zero dependencies. Just open `index.html` in a browser.

---

## 🗂️ Template Categories & Full List

### 🎨 Portfolio (3 templates)
| Template | Style | Key Features |
|---|---|---|
| **Nova Portfolio** | Dark, Editorial | Full-screen hero, project grid, case study layout |
| **Sage Studio** | Light, Nature | Masonry grid, stacked hero, about section |
| **Circuit Dev** | Dark, Terminal | Monospace aesthetic, skills grid, GitHub activity |

### 🚀 Landing Page (4 templates)
| Template | Style | Key Features |
|---|---|---|
| **Aura Launch** | Gradient, App | Split hero, pricing tiers, testimonials |
| **Zenith Agency** | Dark, Bold | Full-bleed hero, services, stats counter |
| **Fusion Labs** | Neon, Startup | Gradient hero, feature cards, integrations |
| **Atlas Ventures** | Corporate, Clean | Data hero, portfolio grid, partners section |

### 🛍️ E-commerce (3 templates)
| Template | Style | Key Features |
|---|---|---|
| **Market Fresh** | Warm, Boutique | Product grid, category filter, cart drawer |
| **Petal Beauty** | Luxury, Pink | Best sellers, ingredients section, reviews |
| **Prism Tech Store** | Dark, Electronics | Product hero, featured specs, comparison table |

### 📝 Blog (3 templates)
| Template | Style | Key Features |
|---|---|---|
| **Prose Blog** | Minimal, Light | Featured post, post grid, author bio |
| **Inkdrop Magazine** | Editorial, Bold | Hero story, story grid, opinion section |
| **Verdant Journal** | Earthy, Lifestyle | Recipe cards, seasonal hero, categories |

### ⚡ SaaS (3 templates)
| Template | Style | Key Features |
|---|---|---|
| **Tempo SaaS** | Indigo, Modern | App hero, feature tabs, pricing cards |
| **Gridlock Dashboard** | Slate, Analytics | Dashboard mockup, metrics grid, enterprise CTA |
| **Koda DevTools** | Dark, Developer | Terminal hero, API showcase, SDK cards |

### 🍽️ Restaurant (3 templates)
| Template | Style | Key Features |
|---|---|---|
| **Ember Kitchen** | Dark, Fine Dining | Full-bleed hero, menu sections, reservations form |
| **Zest Café** | Bright, Casual | Daily menu, order online, events board |
| **Nakama Ramen** | Minimal, Japanese | Menu tabs, story hero, location map |

### 🏡 Real Estate (3 templates)
| Template | Style | Key Features |
|---|---|---|
| **Haven Realty** | Clean, Professional | Property search hero, listing cards, agent profiles |
| **Luxe Estates** | Dark, Premium | Cinematic hero, off-market listings, concierge CTA |
| **Verde Living** | Green, Eco | Floorplans, sustainability stats, register interest |

### 💪 Fitness (2 templates)
| Template | Style | Key Features |
|---|---|---|
| **Iron Gym** | Dark, Bold | Class schedule grid, trainer profiles, membership plans |
| **Bloom Wellness** | Soft, Yoga | Class schedule, studio team, retreat signup |

---

## 🎯 What's Inside Each Template

Every template ships with:

### 🎨 Color Palette (5 tokens)
- `--color-primary` — Primary brand color
- `--color-secondary` — Supporting / button color
- `--color-background` — Page background
- `--color-text` — Body text color
- `--color-accent` — Highlight / callout color

### 🔤 Typography Pairing
- Display font for headings (`Playfair Display` or theme-specific)
- Body font for paragraphs and UI (`DM Sans` or `DM Mono`)
- Pairing rationale explaining *why* the combination works

### 📐 Spacing System
An 8px-base spacing scale — `xs` through `2xl` — consistent across all templates:

```
--space-xs:  4px
--space-sm:  8px
--space-md:  16px
--space-lg:  24px
--space-xl:  48px
--space-2xl: 80px
```

### 🧩 Components
Each template documents its component set, including navbar, hero, feature grid, content cards, testimonial, CTA band, and footer — all pre-styled in the template's palette.

### 📋 Copy CSS Variables
One click copies a complete `:root {}` CSS token block ready to paste into any project.

---

## 🔍 Live Preview System

When you open any template, DesignVault renders a **complete, scrollable webpage inside an iframe** — with a realistic browser chrome (traffic light dots, URL bar). The preview uses:

- The template's **exact color palette** for every element
- **Real content** specific to each template category (menu items for restaurants, pricing tiers for SaaS, property listings for real estate, etc.)
- **Responsive layout** that adapts to the iframe's viewport
- **Smart contrast logic** — button text, muted colours, and backgrounds automatically adapt for dark vs. light templates

---

## 🖥️ Pages

| Page | Description |
|---|---|
| **Home** | Hero section + filterable template grid |
| **Templates** | Full collection with category filter |
| **Template Detail** | Live preview iframe + complete design system breakdown |
| **Design System** | Shared tokens, typography scale, spacing, and component library |
| **About** | Project mission and stats |

---

## 🚀 Getting Started

No installation needed.

```bash
# Clone the repo
git clone https://github.com/EzekielLaguiab/DesignVault.git

# Open in browser
cd DesignVault
open index.html
```

Or simply download the ZIP from GitHub and open `index.html` directly.

> **Note:** For the Google Fonts to load correctly, open the file via a browser (not a local file protocol). You can use VS Code's **Live Server** extension or any local HTTP server.

```bash
# With Python (built-in)
python -m http.server 8000
# Then open http://localhost:8000

# With Node.js
npx serve .
```

---

## 🛠️ Tech Stack

| Layer | Tech |
|---|---|
| Markup | HTML5 (semantic, single-page) |
| Styles | Vanilla CSS3 (custom properties, grid, flexbox) |
| Logic | Vanilla JavaScript ES6+ (no frameworks) |
| Fonts | Google Fonts (Playfair Display, DM Sans, DM Mono) |
| Build tools | None — zero dependencies |
| License | MIT |

---

## 🎨 Design System Philosophy

DesignVault is built on the idea that great UI comes from **understanding design fundamentals**, not just copying code. Every template is designed to teach:

- **Color theory** — how palette roles (primary, secondary, accent) interact
- **Typography hierarchy** — why certain font pairings work and what they communicate
- **Spatial rhythm** — how an 8px grid creates visual consistency
- **Component thinking** — how isolated, reusable pieces compose into full layouts

---

## ♿ Accessibility

- Semantic HTML elements throughout (`<nav>`, `<section>`, `<footer>`, etc.)
- `aria-label` attributes on interactive elements
- Colour contrast ratios considered in palette selection
- Keyboard-navigable interface
- Mobile-first responsive layouts tested from 320px to 1920px

---

## 🌙 Dark Mode

DesignVault supports system-level dark mode toggling via a theme toggle button in the navbar. The preference is persisted in `localStorage`.

```css
[data-theme="dark"] {
  --ink: #F0F0F0;
  --surface: #111111;
  /* ... all tokens reassigned */
}
```

---

## 📦 Using a Template in Your Project

1. Open the template in DesignVault
2. Click **Copy CSS Variables** to copy the `:root {}` token block
3. Paste into your project's CSS file
4. Reference the tokens in your own stylesheets:

```css
.hero {
  background: var(--color-background);
  color: var(--color-text);
}

.btn-primary {
  background: var(--color-secondary);
  border-radius: var(--radius-md);
  padding: var(--space-sm) var(--space-lg);
  transition: all var(--transition);
}
```

---

## 🤝 Contributing

Contributions are welcome! If you'd like to add a new template or improve an existing one:

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/new-template`
3. Add your template to the `templates` array in `script.js` following the existing schema
4. Commit your changes: `git commit -m 'Add: YourTemplate template'`
5. Push to the branch: `git push origin feature/new-template`
6. Open a Pull Request

### Template Schema

```js
{
  id: 'your-id',          // Unique lowercase kebab-case ID
  name: 'Template Name',  // Display name
  category: 'landing',    // One of the 8 category IDs
  desc: 'Short description...',
  tags: ['Tag1', 'Tag2', 'Tag3'],
  palette: {
    primary:    { name: 'Color Name', hex: '#XXXXXX' },
    secondary:  { name: 'Color Name', hex: '#XXXXXX' },
    background: { name: 'Color Name', hex: '#XXXXXX' },
    text:       { name: 'Color Name', hex: '#XXXXXX' },
    accent:     { name: 'Color Name', hex: '#XXXXXX' },
  },
  fonts: {
    display: 'Font Name',
    body: 'Font Name',
    use: 'Explanation of why this pairing works.',
  },
  gradient: 'linear-gradient(...)',
  textOnCard: '#XXXXXX',
  components: ['Component 1', 'Component 2', ...],
  content: {
    brand: 'Brand Name',
    tagline: 'Hero headline.',
    sub: 'Supporting copy.',
    cta: 'Primary button',
    cta2: 'Secondary button',
    features: [
      { icon: '✦', title: 'Feature', desc: 'Description.' },
      // ... 3 features
    ],
    cards: [
      { label: 'Card label', title: 'Card title', sub: 'Card subtitle' },
      // ... 3 cards
    ],
    testimonial: { quote: '...', author: 'Name', role: 'Role, Company' },
    footerTagline: 'Short footer descriptor.',
  },
}
```

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

You are free to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of any template for personal or commercial projects.

---

## 👤 Author

**Ezekiel Laguiab**

- GitHub: [@EzekielLaguiab](https://github.com/EzekielLaguiab)

---

<p align="center">
  Made with care · Free forever · MIT Licensed
</p>
