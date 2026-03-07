/* =============================================
   DESIGNVAULT — script.js
   ============================================= */

const templates = [

  // ── PORTFOLIO ──────────────────────────────
  {
    id: 'nova',
    name: 'Nova Portfolio',
    category: 'portfolio',
    desc: 'A bold, editorial portfolio for designers and creative directors. Dark base with expressive typography.',
    tags: ['Dark', 'Editorial', 'Creative'],
    palette: {
      primary:    { name: 'Obsidian',       hex: '#0A0A0F' },
      secondary:  { name: 'Electric Violet', hex: '#7C3AED' },
      background: { name: 'Deep Night',      hex: '#13131A' },
      text:       { name: 'Soft White',      hex: '#F0F0F5' },
      accent:     { name: 'Neon Mint',       hex: '#00E5A0' },
    },
    fonts: { display: 'Playfair Display', body: 'DM Sans', use: 'Bold serif display paired with a neutral humanist body creates tension and elegance.' },
    gradient: 'linear-gradient(135deg, #0A0A0F 0%, #13131A 40%, #1E0A3C 100%)',
    textOnCard: '#F0F0F5',
    components: ['Minimal nav', 'Full-screen hero', 'Project grid', 'Case study layout', 'Contact form'],
    content: {
      brand: 'Nova',
      tagline: 'Design that speaks before you do.',
      sub: 'Creative direction, brand identity, and digital experiences for forward-thinking companies.',
      cta: 'View My Work',
      cta2: 'Get in Touch',
      features: [
        { icon: '◆', title: 'Brand Identity', desc: 'Logos, color systems, and visual language that make you unforgettable.' },
        { icon: '◈', title: 'Digital Design', desc: 'Web and app interfaces designed with clarity, beauty, and purpose.' },
        { icon: '◉', title: 'Art Direction', desc: 'Campaign direction and visual storytelling across print and digital.' },
      ],
      cards: [
        { label: 'Branding', title: 'Horizon Finance', sub: 'Identity System · 2024' },
        { label: 'Web Design', title: 'Luminary Studio', sub: 'Website · 2024' },
        { label: 'Campaign', title: 'Echo Collective', sub: 'Art Direction · 2023' },
      ],
      testimonial: { quote: 'Nova elevated our brand to a level we didn\'t think was possible.', author: 'Sarah Chen', role: 'CEO, Horizon Finance' },
      footerTagline: 'Creative direction & digital design.',
    },
  },
  {
    id: 'sage',
    name: 'Sage Studio',
    category: 'portfolio',
    desc: 'A calm, nature-inspired portfolio. Soft greens and warm neutrals for architects and illustrators.',
    tags: ['Light', 'Minimal', 'Nature'],
    palette: {
      primary:    { name: 'Forest',    hex: '#2D5016' },
      secondary:  { name: 'Sage',      hex: '#7A9E5F' },
      background: { name: 'Cream',     hex: '#FAF8F3' },
      text:       { name: 'Bark',      hex: '#2C2416' },
      accent:     { name: 'Terracotta', hex: '#C4622D' },
    },
    fonts: { display: 'Playfair Display', body: 'DM Sans', use: 'High-contrast serif display with a geometric sans body creates a refined editorial feel.' },
    gradient: 'linear-gradient(135deg, #2D5016 0%, #7A9E5F 50%, #FAF8F3 100%)',
    textOnCard: '#2C2416',
    components: ['Split nav', 'Stacked hero', 'Masonry grid', 'About section', 'Contact'],
    content: {
      brand: 'Sage Studio',
      tagline: 'Architecture rooted in nature.',
      sub: 'We design spaces that breathe — thoughtful architecture and interior design that honours the natural world.',
      cta: 'Explore Projects',
      cta2: 'About the Studio',
      features: [
        { icon: '◎', title: 'Architecture', desc: 'Residential and commercial projects that integrate with the landscape.' },
        { icon: '◇', title: 'Interiors', desc: 'Warm, textured spaces using natural materials and considered light.' },
        { icon: '○', title: 'Landscaping', desc: 'Gardens and outdoor spaces that extend the home into nature.' },
      ],
      cards: [
        { label: 'Residential', title: 'Forest House', sub: 'Ojai, California · 2024' },
        { label: 'Commercial', title: 'The Canopy Café', sub: 'Portland, Oregon · 2023' },
        { label: 'Interior', title: 'Studio Loft', sub: 'Brooklyn, New York · 2023' },
      ],
      testimonial: { quote: 'Sage Studio brought light and life into every corner of our home.', author: 'Marcus Rivera', role: 'Homeowner, Ojai' },
      footerTagline: 'Architecture & interior design.',
    },
  },
  {
    id: 'circuit',
    name: 'Circuit Dev',
    category: 'portfolio',
    desc: 'A technical portfolio for engineers and developers. Terminal aesthetic with structured code-like layouts.',
    tags: ['Dark', 'Tech', 'Developer'],
    palette: {
      primary:    { name: 'Terminal Green', hex: '#00FF41' },
      secondary:  { name: 'Code Blue',      hex: '#0080FF' },
      background: { name: 'Console Black',  hex: '#0D0D0D' },
      text:       { name: 'Screen White',   hex: '#E8E8E8' },
      accent:     { name: 'Warning Amber',  hex: '#FFB800' },
    },
    fonts: { display: 'DM Mono', body: 'DM Sans', use: 'Monospace display reinforces the developer identity while DM Sans keeps body text readable.' },
    gradient: 'linear-gradient(135deg, #0D0D0D 0%, #001A00 50%, #0A0A0F 100%)',
    textOnCard: '#E8E8E8',
    components: ['Code-style nav', 'Terminal hero', 'Skills grid', 'Project cards', 'GitHub activity'],
    content: {
      brand: '~/alex.dev',
      tagline: 'Full-Stack Engineer.',
      sub: 'I build fast, accessible, and scalable web applications. Currently open to full-time and freelance opportunities.',
      cta: 'View Projects',
      cta2: 'Download CV',
      features: [
        { icon: '▸', title: 'Frontend', desc: 'React, TypeScript, Next.js — pixel-perfect UIs with 60fps performance.' },
        { icon: '▸', title: 'Backend', desc: 'Node.js, Go, PostgreSQL — robust APIs and microservice architectures.' },
        { icon: '▸', title: 'DevOps', desc: 'Docker, Kubernetes, CI/CD — shipped to production with confidence.' },
      ],
      cards: [
        { label: 'Open Source', title: 'FlowState CLI', sub: 'TypeScript · 4.2k stars' },
        { label: 'Web App', title: 'DataPilot Dashboard', sub: 'React + Go · 2024' },
        { label: 'API', title: 'VaultAPI', sub: 'Node.js + PostgreSQL · 2023' },
      ],
      testimonial: { quote: 'Alex shipped our entire platform rewrite in 6 weeks. Exceptional quality.', author: 'Priya Nair', role: 'CTO, DataPilot' },
      footerTagline: 'Full-stack engineering & open source.',
    },
  },

  // ── LANDING PAGE ───────────────────────────
  {
    id: 'aura',
    name: 'Aura Launch',
    category: 'landing',
    desc: 'A soft-gradient product landing page. Glassy elements and flowing curves for consumer apps.',
    tags: ['Gradient', 'Modern', 'App'],
    palette: {
      primary:    { name: 'Iris',  hex: '#6366F1' },
      secondary:  { name: 'Rose',  hex: '#F43F5E' },
      background: { name: 'Ghost', hex: '#FAFAFA' },
      text:       { name: 'Slate', hex: '#1E293B' },
      accent:     { name: 'Sky',   hex: '#38BDF8' },
    },
    fonts: { display: 'Playfair Display', body: 'DM Sans', use: 'A modern serif display with a neutral body creates confidence and readability.' },
    gradient: 'linear-gradient(135deg, #6366F1 0%, #F43F5E 50%, #38BDF8 100%)',
    textOnCard: '#1E293B',
    components: ['Glass navbar', 'Split hero', 'Feature grid', 'Testimonials', 'Pricing', 'CTA'],
    content: {
      brand: 'Aura',
      tagline: 'Focus flows when work does.',
      sub: 'The productivity app that adapts to how your mind works. AI-powered task management for deep focus.',
      cta: 'Start Free Trial',
      cta2: 'Watch Demo',
      features: [
        { icon: '✦', title: 'AI Task Sorting', desc: 'Aura learns your work patterns and surfaces the right task at the right time.' },
        { icon: '✦', title: 'Focus Sessions', desc: 'Distraction-free work blocks with ambient sound and progress tracking.' },
        { icon: '✦', title: 'Team Sync', desc: 'Shared workspaces keep your whole team aligned without endless meetings.' },
      ],
      cards: [
        { label: 'Starter', title: 'Free', sub: 'Up to 3 projects · Always free' },
        { label: 'Pro', title: '$9/mo', sub: 'Unlimited · AI features · Priority support' },
        { label: 'Team', title: '$29/mo', sub: 'Up to 10 seats · Admin controls' },
      ],
      testimonial: { quote: 'Aura cut my planning time in half. I get more done and stress less.', author: 'Jamie Torres', role: 'Freelance Designer' },
      footerTagline: 'AI-powered productivity for deep work.',
    },
  },
  {
    id: 'zenith',
    name: 'Zenith Agency',
    category: 'landing',
    desc: 'A high-impact agency landing page with bold typography, animated counters, and a dark premium feel.',
    tags: ['Dark', 'Agency', 'Bold'],
    palette: {
      primary:    { name: 'Pitch Black', hex: '#080808' },
      secondary:  { name: 'Gold',        hex: '#D4A017' },
      background: { name: 'Night',       hex: '#0F0F0F' },
      text:       { name: 'Pearl',       hex: '#F5F5F0' },
      accent:     { name: 'Champagne',   hex: '#F0DCA0' },
    },
    fonts: { display: 'Playfair Display', body: 'DM Sans', use: 'Serif display for maximum impact paired with refined humanist body text.' },
    gradient: 'linear-gradient(135deg, #080808 0%, #1A1400 60%, #0F0F0F 100%)',
    textOnCard: '#F5F5F0',
    components: ['Horizontal nav', 'Full-bleed hero', 'Services', 'Stats counter', 'Case studies', 'Contact'],
    content: {
      brand: 'ZENITH',
      tagline: 'We build brands that dominate.',
      sub: 'Strategy-led creative agency working with challenger brands and category leaders since 2015.',
      cta: 'Start a Project',
      cta2: 'Our Work',
      features: [
        { icon: '◆', title: 'Brand Strategy', desc: 'Market positioning, audience mapping, and competitive differentiation.' },
        { icon: '◆', title: 'Creative Campaigns', desc: 'Multi-channel campaigns that cut through noise and drive results.' },
        { icon: '◆', title: 'Digital Growth', desc: 'Performance marketing, SEO, and conversion optimisation at scale.' },
      ],
      cards: [
        { label: '2024', title: 'Rebranded Apex Motors', sub: 'Brand Strategy + Identity' },
        { label: '2023', title: 'Launched Nova Health', sub: 'Campaign + Digital' },
        { label: '2023', title: 'Scaled Drift Commerce', sub: 'Growth + Performance' },
      ],
      testimonial: { quote: 'Zenith gave our brand a voice that resonates with millions.', author: 'David Park', role: 'CMO, Apex Motors' },
      footerTagline: 'Strategy-led creative agency.',
    },
  },
  {
    id: 'fusion',
    name: 'Fusion Labs',
    category: 'landing',
    desc: 'A vibrant startup landing page with neon accents, glassmorphism cards, and a dynamic hero gradient.',
    tags: ['Vibrant', 'Startup', 'Neon'],
    palette: {
      primary:    { name: 'Deep Space', hex: '#0F0E17' },
      secondary:  { name: 'Neon Cyan',  hex: '#00F5D4' },
      background: { name: 'Space Dark', hex: '#1A1B2E' },
      text:       { name: 'Star White', hex: '#FFFFFE' },
      accent:     { name: 'Hot Pink',   hex: '#FF2D78' },
    },
    fonts: { display: 'Playfair Display', body: 'DM Sans', use: 'Elegant serif signals a mature, confident startup while DM Sans maximizes reading clarity.' },
    gradient: 'linear-gradient(135deg, #0F0E17 0%, #1A1B2E 40%, #0D2137 100%)',
    textOnCard: '#FFFFFE',
    components: ['Floating nav', 'Gradient hero', 'Feature cards', 'Integrations', 'Pricing table', 'Newsletter'],
    content: {
      brand: 'Fusion',
      tagline: 'Ship product, not problems.',
      sub: 'The developer platform that unifies your entire stack — infrastructure, CI/CD, monitoring, and alerting.',
      cta: 'Start Building Free',
      cta2: 'View Docs',
      features: [
        { icon: '⚡', title: 'Instant Deploy', desc: 'Push to main and your code is live in under 60 seconds, every time.' },
        { icon: '⚡', title: 'Live Monitoring', desc: 'Real-time observability with zero-config alerts and smart grouping.' },
        { icon: '⚡', title: '200+ Integrations', desc: 'Connect GitHub, Slack, Datadog, PagerDuty, and everything else you use.' },
      ],
      cards: [
        { label: 'Hobby', title: 'Free', sub: '1 project · Community support' },
        { label: 'Developer', title: '$19/mo', sub: '10 projects · Priority support' },
        { label: 'Scale', title: '$99/mo', sub: 'Unlimited · SLA · Dedicated support' },
      ],
      testimonial: { quote: 'We went from 2-day deploys to pushing 20 times a day. Fusion made it possible.', author: 'Lena Müller', role: 'Engineering Lead, Stackly' },
      footerTagline: 'The developer platform for modern teams.',
    },
  },
  {
    id: 'atlas',
    name: 'Atlas Ventures',
    category: 'landing',
    desc: 'A professional venture capital or consulting firm landing page. Clean, data-driven layout.',
    tags: ['Corporate', 'Finance', 'Clean'],
    palette: {
      primary:    { name: 'Navy',       hex: '#0D1B4B' },
      secondary:  { name: 'Steel Blue', hex: '#2563EB' },
      background: { name: 'White',      hex: '#FFFFFF' },
      text:       { name: 'Charcoal',   hex: '#1E293B' },
      accent:     { name: 'Teal',       hex: '#0EA5E9' },
    },
    fonts: { display: 'Playfair Display', body: 'DM Sans', use: 'Classic serif authority in display pairings with a trusted editorial body font.' },
    gradient: 'linear-gradient(135deg, #0D1B4B 0%, #2563EB 60%, #0EA5E9 100%)',
    textOnCard: '#1E293B',
    components: ['Corporate nav', 'Data hero', 'Portfolio grid', 'Team section', 'Partners', 'Newsletter'],
    content: {
      brand: 'Atlas Ventures',
      tagline: 'Capital for the bold.',
      sub: 'We partner with founders building category-defining companies. Series A through growth stage.',
      cta: 'Submit Your Pitch',
      cta2: 'Our Portfolio',
      features: [
        { icon: '◎', title: '$2.4B AUM', desc: 'Managing over two billion in assets across four flagship funds.' },
        { icon: '◎', title: '94 Portfolio Companies', desc: 'From pre-seed to IPO, we back founders at every stage.' },
        { icon: '◎', title: '12 Unicorns', desc: 'Twelve portfolio companies have reached unicorn status.' },
      ],
      cards: [
        { label: 'SaaS · Series B', title: 'Meridian Cloud', sub: 'Enterprise workflow automation' },
        { label: 'Fintech · Series A', title: 'Crestline Pay', sub: 'B2B payments infrastructure' },
        { label: 'HealthTech · Seed', title: 'ClearPath Health', sub: 'AI-powered diagnostics' },
      ],
      testimonial: { quote: 'Atlas didn\'t just write a check — they became our most valuable strategic partner.', author: 'Naomi Okafor', role: 'CEO, Meridian Cloud' },
      footerTagline: 'Venture capital for category leaders.',
    },
  },

  // ── E-COMMERCE ─────────────────────────────
  {
    id: 'market',
    name: 'Market Fresh',
    category: 'ecommerce',
    desc: 'A clean, minimal e-commerce template for boutique or artisan stores. Warm neutrals and editorial product photography.',
    tags: ['Minimal', 'Boutique', 'Warm'],
    palette: {
      primary:    { name: 'Linen',     hex: '#F5F0E8' },
      secondary:  { name: 'Clay',      hex: '#C17F5A' },
      background: { name: 'Parchment', hex: '#FAF7F2' },
      text:       { name: 'Espresso',  hex: '#2A1F14' },
      accent:     { name: 'Rust',      hex: '#B85C38' },
    },
    fonts: { display: 'Playfair Display', body: 'DM Sans', use: 'Classic serif elegance in display with clean DM Sans body for product descriptions.' },
    gradient: 'linear-gradient(135deg, #F5F0E8 0%, #C17F5A 60%, #B85C38 100%)',
    textOnCard: '#2A1F14',
    components: ['Top banner', 'Promo hero', 'Product grid', 'Category filter', 'Cart drawer', 'Footer'],
    content: {
      brand: 'Market & Co.',
      tagline: 'Crafted with intention.',
      sub: 'Handmade homeware and gifts from independent artisans around the world. Every piece tells a story.',
      cta: 'Shop the Collection',
      cta2: 'Our Story',
      features: [
        { icon: '◦', title: 'Ceramics', desc: 'Hand-thrown and glazed by studio potters in Portugal and Japan.' },
        { icon: '◦', title: 'Textiles', desc: 'Woven throws and cushions using natural, undyed fibres.' },
        { icon: '◦', title: 'Candles', desc: 'Slow-burn soy candles with botanicals and hand-poured in small batches.' },
      ],
      cards: [
        { label: 'Ceramics', title: 'Raku Serving Bowl', sub: '$68 · Free shipping' },
        { label: 'Textiles', title: 'Linen Throw', sub: '$124 · 3 colours' },
        { label: 'Candles', title: 'Hinoki + Cedar', sub: '$38 · 50hr burn' },
      ],
      testimonial: { quote: 'Every piece I\'ve ordered from Market & Co. has become a cherished part of my home.', author: 'Elise Fontaine', role: 'Verified Customer' },
      footerTagline: 'Handmade goods from independent artisans.',
    },
  },
  {
    id: 'petal',
    name: 'Petal Beauty',
    category: 'ecommerce',
    desc: 'A luxury beauty and skincare e-commerce template. Soft pinks, clean white space, and elegant product showcases.',
    tags: ['Luxury', 'Beauty', 'Pink'],
    palette: {
      primary:    { name: 'Blush',      hex: '#F9C5D1' },
      secondary:  { name: 'Mauve',      hex: '#B56576' },
      background: { name: 'Rose White', hex: '#FFF7F8' },
      text:       { name: 'Deep Rose',  hex: '#3D1A22' },
      accent:     { name: 'Dusty Pink', hex: '#E8879B' },
    },
    fonts: { display: 'Playfair Display', body: 'DM Sans', use: 'Refined serif display evokes luxury beauty brands; DM Sans adds a modern, clean contrast.' },
    gradient: 'linear-gradient(135deg, #F9C5D1 0%, #B56576 50%, #3D1A22 100%)',
    textOnCard: '#3D1A22',
    components: ['Transparent nav', 'Full-bleed hero', 'Best sellers', 'Ingredients', 'Reviews', 'Instagram feed'],
    content: {
      brand: 'Petal',
      tagline: 'Skincare as self-care.',
      sub: 'Clean, plant-powered formulations for luminous, healthy skin. No fillers, no compromises — just results.',
      cta: 'Shop Skincare',
      cta2: 'Find Your Ritual',
      features: [
        { icon: '✿', title: 'Clean Beauty', desc: '100% free from parabens, sulphates, synthetic fragrance, and mineral oil.' },
        { icon: '✿', title: 'Botanically Sourced', desc: 'Active botanicals ethically harvested and traceable to origin.' },
        { icon: '✿', title: 'Dermatologist Tested', desc: 'Every formula is clinically validated for all skin types.' },
      ],
      cards: [
        { label: 'Best Seller', title: 'Rosy Glow Serum', sub: '$52 · 30ml · All skin types' },
        { label: 'New Arrival', title: 'Petal Cloud Cream', sub: '$64 · 50ml · Dry & sensitive' },
        { label: 'Fan Favourite', title: 'Brightening Mask', sub: '$44 · 75ml · Weekly ritual' },
      ],
      testimonial: { quote: 'The Rosy Glow Serum transformed my skin in two weeks. I\'ll never switch.', author: 'Céline Dupont', role: 'Verified Customer' },
      footerTagline: 'Clean beauty for luminous skin.',
    },
  },
  {
    id: 'prism',
    name: 'Prism Tech Store',
    category: 'ecommerce',
    desc: 'A sleek electronics and gadget store template. Dark mode with glowing product highlights.',
    tags: ['Dark', 'Tech', 'Electronics'],
    palette: {
      primary:    { name: 'Void',       hex: '#0A0A14' },
      secondary:  { name: 'Electric',   hex: '#00D4FF' },
      background: { name: 'Near Black', hex: '#111118' },
      text:       { name: 'Ice White',  hex: '#E8F4FF' },
      accent:     { name: 'Plasma',     hex: '#7B2FFF' },
    },
    fonts: { display: 'Playfair Display', body: 'DM Sans', use: 'Condensed display maximises hierarchy in tight layouts; DM Sans body keeps the family cohesive.' },
    gradient: 'linear-gradient(135deg, #0A0A14 0%, #111118 40%, #0D001A 100%)',
    textOnCard: '#E8F4FF',
    components: ['Dark navbar', 'Product hero', 'Featured specs', 'Comparison table', 'Reviews', 'Cart'],
    content: {
      brand: 'PRISM',
      tagline: 'Technology. Elevated.',
      sub: 'Premium audio, computing, and wearables engineered for those who refuse to compromise on experience.',
      cta: 'Shop Now',
      cta2: 'Explore New Arrivals',
      features: [
        { icon: '◈', title: 'Premium Audio', desc: 'Studio-grade headphones and speakers trusted by professionals.' },
        { icon: '◈', title: 'Pro Computing', desc: 'Ultra-portable laptops with desktop-class performance.' },
        { icon: '◈', title: 'Smart Wearables', desc: 'Fitness and lifestyle wearables with a week-long battery life.' },
      ],
      cards: [
        { label: 'Audio', title: 'Prism Nova X', sub: '$349 · Active Noise Cancelling' },
        { label: 'Computing', title: 'SlateBook Pro 14', sub: '$1,299 · M3 · 18hr battery' },
        { label: 'Wearables', title: 'PulseWatch Ultra', sub: '$249 · Health + GPS' },
      ],
      testimonial: { quote: 'The Nova X headphones are the best I\'ve ever owned. Worth every penny.', author: 'Jordan Kim', role: 'Music Producer' },
      footerTagline: 'Premium technology for discerning minds.',
    },
  },

  // ── BLOG ───────────────────────────────────
  {
    id: 'prose',
    name: 'Prose Blog',
    category: 'blog',
    desc: 'A clean, readable blog template focused on long-form writing. Wide margins, comfortable line lengths, and minimal distraction.',
    tags: ['Minimal', 'Writing', 'Light'],
    palette: {
      primary:    { name: 'Ink',       hex: '#1A1A1A' },
      secondary:  { name: 'Accent',    hex: '#2563EB' },
      background: { name: 'Paper',     hex: '#FAFAF9' },
      text:       { name: 'Dark Gray', hex: '#374151' },
      accent:     { name: 'Highlight', hex: '#FCD34D' },
    },
    fonts: { display: 'Playfair Display', body: 'DM Sans', use: 'A classic editorial serif pairing that maximises reading comfort for long-form content.' },
    gradient: 'linear-gradient(135deg, #1A1A1A 0%, #2563EB 60%, #374151 100%)',
    textOnCard: '#374151',
    components: ['Simple header', 'Featured post', 'Post grid', 'Category sidebar', 'Newsletter', 'Author bio'],
    content: {
      brand: 'Prose',
      tagline: 'Ideas worth reading.',
      sub: 'Essays on design, technology, and culture — written for curious minds who want more than headlines.',
      cta: 'Start Reading',
      cta2: 'Subscribe Free',
      features: [
        { icon: '—', title: 'Design', desc: 'Thinking about the systems and aesthetics that shape how we experience the world.' },
        { icon: '—', title: 'Technology', desc: 'Honest analysis of where software, AI, and the internet are actually heading.' },
        { icon: '—', title: 'Culture', desc: 'Essays on creativity, work, and the ideas making the future interesting.' },
      ],
      cards: [
        { label: 'Design · 8 min read', title: 'The Death of Skeuomorphism', sub: 'Why flat design won and what we lost in the process.' },
        { label: 'Tech · 12 min read', title: 'What AI Won\'t Replace', sub: 'The human capabilities that matter more than ever in 2024.' },
        { label: 'Culture · 6 min read', title: 'In Defence of Slow Work', sub: 'Why the best creators ignore the feed.' },
      ],
      testimonial: { quote: 'Prose is the only newsletter I read the moment it lands in my inbox.', author: 'Tom Nakamura', role: 'Product Designer, Notion' },
      footerTagline: 'Essays on design, technology & culture.',
    },
  },
  {
    id: 'inkdrop',
    name: 'Inkdrop Magazine',
    category: 'blog',
    desc: 'A bold editorial magazine-style blog. Full-bleed images, oversized typography, and a dynamic layout.',
    tags: ['Editorial', 'Magazine', 'Bold'],
    palette: {
      primary:    { name: 'Midnight',  hex: '#0F0F0F' },
      secondary:  { name: 'Crimson',   hex: '#DC2626' },
      background: { name: 'Off White', hex: '#FFFFF0' },
      text:       { name: 'Charcoal',  hex: '#1C1C1C' },
      accent:     { name: 'Red',       hex: '#EF4444' },
    },
    fonts: { display: 'Playfair Display', body: 'DM Sans', use: 'Bold serif creates unmistakable editorial voice; DM Sans brings journalistic clarity.' },
    gradient: 'linear-gradient(135deg, #0F0F0F 0%, #1C0000 50%, #DC2626 100%)',
    textOnCard: '#1C1C1C',
    components: ['Sticky header', 'Hero story', 'Story grid', 'Breaking ticker', 'Opinion section', 'Subscribe'],
    content: {
      brand: 'INKDROP',
      tagline: 'The magazine for restless minds.',
      sub: 'Investigative journalism, sharp opinion, and cultural criticism from writers who refuse to be boring.',
      cta: 'Read Today\'s Issue',
      cta2: 'Subscribe',
      features: [
        { icon: '■', title: 'Investigative', desc: 'Long-form journalism that takes the time to get the story right.' },
        { icon: '■', title: 'Opinion', desc: 'Provocative, well-argued takes on politics, business, and culture.' },
        { icon: '■', title: 'Reviews', desc: 'Books, film, and music criticism from our panel of contributors.' },
      ],
      cards: [
        { label: 'Cover Story', title: 'The Silicon Exodus', sub: 'Why tech founders are leaving the Bay — permanently.' },
        { label: 'Opinion', title: 'We Are All Burned Out', sub: 'A generation renegotiating its relationship with work.' },
        { label: 'Culture', title: 'The Vinyl Revival', sub: 'Why analogue music thrives in the streaming era.' },
      ],
      testimonial: { quote: 'Inkdrop is the best magazine I\'ve read in a decade. Genuinely unmissable.', author: 'Rachel Stein', role: 'Literary Editor' },
      footerTagline: 'Journalism for restless, curious minds.',
    },
  },
  {
    id: 'verdant',
    name: 'Verdant Journal',
    category: 'blog',
    desc: 'A lifestyle and wellness blog template. Earthy tones, large photography, and a warm reading experience.',
    tags: ['Lifestyle', 'Warm', 'Earthy'],
    palette: {
      primary:    { name: 'Forest',  hex: '#1B4332' },
      secondary:  { name: 'Olive',   hex: '#6B7F3A' },
      background: { name: 'Cream',   hex: '#FFFEF5' },
      text:       { name: 'Soil',    hex: '#2D2416' },
      accent:     { name: 'Pumpkin', hex: '#D2691E' },
    },
    fonts: { display: 'Playfair Display', body: 'DM Sans', use: 'Elegant serif headings create warmth; DM Sans makes the body feel approachable and friendly.' },
    gradient: 'linear-gradient(135deg, #1B4332 0%, #6B7F3A 50%, #D2691E 100%)',
    textOnCard: '#2D2416',
    components: ['Logo nav', 'Seasonal hero', 'Recipe cards', 'Categories', 'Featured reading', 'Instagram'],
    content: {
      brand: 'Verdant',
      tagline: 'Live closer to the earth.',
      sub: 'A journal about slow living, seasonal food, natural wellness, and the joy of a simpler, more intentional life.',
      cta: 'Explore the Journal',
      cta2: 'Latest Recipes',
      features: [
        { icon: '❧', title: 'Recipes', desc: 'Seasonal, plant-forward cooking with ingredients you can actually find.' },
        { icon: '❧', title: 'Wellness', desc: 'Honest, evidence-based guides to moving, resting, and feeling well.' },
        { icon: '❧', title: 'Home & Garden', desc: 'Making your space feel like a sanctuary with natural materials.' },
      ],
      cards: [
        { label: 'Recipe · 25 min', title: 'Roasted Squash Soup', sub: 'Warming, earthy, and deeply satisfying.' },
        { label: 'Wellness', title: 'The Art of Forest Bathing', sub: 'How an afternoon among trees can reset your nervous system.' },
        { label: 'Home', title: 'A Natural Linen Wardrobe', sub: 'Building a wardrobe that lasts a lifetime.' },
      ],
      testimonial: { quote: 'Verdant changed how I shop, cook, and think about wellness. Invaluable.', author: 'Nina Larsson', role: 'Reader since 2021' },
      footerTagline: 'A journal for intentional, slow living.',
    },
  },

  // ── SAAS ───────────────────────────────────
  {
    id: 'tempo',
    name: 'Tempo SaaS',
    category: 'saas',
    desc: 'A modern SaaS product landing page with feature highlights, pricing tiers, and social proof sections.',
    tags: ['Product', 'Pricing', 'Modern'],
    palette: {
      primary:    { name: 'Indigo',  hex: '#4F46E5' },
      secondary:  { name: 'Violet',  hex: '#7C3AED' },
      background: { name: 'Light',   hex: '#FAFAFA' },
      text:       { name: 'Dark',    hex: '#111827' },
      accent:     { name: 'Green',   hex: '#10B981' },
    },
    fonts: { display: 'Playfair Display', body: 'DM Sans', use: 'Serif display brings personality to headings; DM Sans is the gold standard for UI body text.' },
    gradient: 'linear-gradient(135deg, #4F46E5 0%, #7C3AED 50%, #2D1B69 100%)',
    textOnCard: '#111827',
    components: ['Product nav', 'App hero', 'Feature tabs', 'Pricing cards', 'Testimonials', 'Integration logos'],
    content: {
      brand: 'Tempo',
      tagline: 'Ship on schedule. Always.',
      sub: 'The project management tool built for engineering teams that take deadlines seriously.',
      cta: 'Get Started Free',
      cta2: 'Book a Demo',
      features: [
        { icon: '▲', title: 'Sprint Planning', desc: 'Automated sprint generation based on team velocity and story points.' },
        { icon: '▲', title: 'Dependency Mapping', desc: 'Visual roadmap with blocking issue detection before they derail sprints.' },
        { icon: '▲', title: 'Live Burndowns', desc: 'Real-time progress charts that update as your team closes issues.' },
      ],
      cards: [
        { label: 'Starter · Free', title: 'Up to 5 users', sub: '3 active sprints · Community support' },
        { label: 'Growth · $39/mo', title: 'Up to 25 users', sub: 'Unlimited sprints · Integrations · Analytics' },
        { label: 'Enterprise', title: 'Unlimited users', sub: 'SSO · Custom SLA · Dedicated CSM' },
      ],
      testimonial: { quote: 'We\'ve shipped every major feature on time since we switched to Tempo. Game changer.', author: 'Chris Osei', role: 'VP Engineering, Stackline' },
      footerTagline: 'Project management for engineering teams.',
    },
  },
  {
    id: 'gridlock',
    name: 'Gridlock Dashboard',
    category: 'saas',
    desc: 'A data analytics SaaS template with dashboard preview, charts, and a metrics-forward hero section.',
    tags: ['Analytics', 'Dashboard', 'Data'],
    palette: {
      primary:    { name: 'Slate',    hex: '#0F172A' },
      secondary:  { name: 'Blue',     hex: '#3B82F6' },
      background: { name: 'Gray 50',  hex: '#F8FAFC' },
      text:       { name: 'Slate 900', hex: '#0F172A' },
      accent:     { name: 'Cyan',     hex: '#06B6D4' },
    },
    fonts: { display: 'Playfair Display', body: 'DM Sans', use: 'Serif display conveys analytical precision; DM Sans is standard for data-dense interfaces.' },
    gradient: 'linear-gradient(135deg, #0F172A 0%, #1E3A5F 50%, #3B82F6 100%)',
    textOnCard: '#0F172A',
    components: ['Top nav', 'Dashboard mockup hero', 'Metrics grid', 'Feature list', 'Pricing', 'Enterprise CTA'],
    content: {
      brand: 'Gridlock',
      tagline: 'Every metric. One place.',
      sub: 'Business intelligence for teams that make decisions based on data, not gut feel.',
      cta: 'Try Gridlock Free',
      cta2: 'See a Live Demo',
      features: [
        { icon: '◉', title: 'Unified Data', desc: 'Connect 120+ data sources and query everything in one SQL editor.' },
        { icon: '◉', title: 'Auto Dashboards', desc: 'AI-generated dashboards from plain-English questions about your data.' },
        { icon: '◉', title: 'Team Sharing', desc: 'Share live dashboards, schedule reports, and set data alerts for your whole org.' },
      ],
      cards: [
        { label: 'Revenue MRR', title: '$284,400', sub: '+18.4% vs last month' },
        { label: 'Active Users', title: '14,820', sub: '+6.2% vs last month' },
        { label: 'Churn Rate', title: '1.8%', sub: '−0.4pp vs last month' },
      ],
      testimonial: { quote: 'Gridlock replaced four different tools for us. Our team now makes better decisions, faster.', author: 'Sofia Almeida', role: 'Head of Analytics, Lumio' },
      footerTagline: 'Business intelligence for data-driven teams.',
    },
  },
  {
    id: 'koda',
    name: 'Koda DevTools',
    category: 'saas',
    desc: 'A developer tools SaaS with code snippet showcases, API documentation previews, and technical feature breakdowns.',
    tags: ['Developer', 'API', 'Code'],
    palette: {
      primary:    { name: 'Carbon',     hex: '#161B22' },
      secondary:  { name: 'Lime',       hex: '#3FB950' },
      background: { name: 'GitHub Dark', hex: '#0D1117' },
      text:       { name: 'White',      hex: '#C9D1D9' },
      accent:     { name: 'Orange',     hex: '#F78166' },
    },
    fonts: { display: 'DM Mono', body: 'DM Sans', use: 'Monospace headers signal developer credibility; DM Sans keeps prose sections clean and readable.' },
    gradient: 'linear-gradient(135deg, #161B22 0%, #0D1117 40%, #0A1628 100%)',
    textOnCard: '#C9D1D9',
    components: ['Code nav', 'Terminal hero', 'API showcase', 'SDK cards', 'Changelog', 'Docs CTA'],
    content: {
      brand: 'koda',
      tagline: 'APIs developers actually enjoy.',
      sub: 'The developer experience platform — beautiful documentation, instant SDKs, and real-time API testing in your browser.',
      cta: 'Read the Docs',
      cta2: 'Get API Key',
      features: [
        { icon: '$', title: 'REST + GraphQL', desc: 'Both paradigms supported out of the box with automatic schema generation.' },
        { icon: '$', title: 'Auto SDK Gen', desc: 'Type-safe SDKs for TypeScript, Python, Go, and Ruby generated from your spec.' },
        { icon: '$', title: 'Live Playground', desc: 'Test any endpoint in your browser with auth, params, and real response data.' },
      ],
      cards: [
        { label: 'Endpoint', title: 'GET /users/{id}', sub: 'Returns a user object by ID' },
        { label: 'Endpoint', title: 'POST /events', sub: 'Creates a new tracking event' },
        { label: 'Webhook', title: 'user.created', sub: 'Fires when a new user signs up' },
      ],
      testimonial: { quote: 'Our API integration time dropped from days to hours. Koda\'s DX is unmatched.', author: 'Daniel Weiss', role: 'Senior Engineer, Payflow' },
      footerTagline: 'Developer experience tools for modern APIs.',
    },
  },

  // ── RESTAURANT ─────────────────────────────
  {
    id: 'ember',
    name: 'Ember Kitchen',
    category: 'restaurant',
    desc: 'A rustic fine-dining restaurant template. Dark wood tones, rich photography, and a warm ambient palette.',
    tags: ['Fine Dining', 'Dark', 'Rustic'],
    palette: {
      primary:    { name: 'Ember',   hex: '#8B1A1A' },
      secondary:  { name: 'Walnut',  hex: '#5C3317' },
      background: { name: 'Coal',    hex: '#1A1208' },
      text:       { name: 'Cream',   hex: '#F5E6C8' },
      accent:     { name: 'Gold',    hex: '#C9952A' },
    },
    fonts: { display: 'Playfair Display', body: 'DM Sans', use: 'Elegant serif display and body pairing — classic, warm, and completely at home in fine dining.' },
    gradient: 'linear-gradient(135deg, #1A1208 0%, #3D1A00 50%, #8B1A1A 100%)',
    textOnCard: '#F5E6C8',
    components: ['Transparent nav', 'Full-bleed hero', 'Menu sections', 'Reservations form', 'Chef story', 'Opening hours'],
    content: {
      brand: 'Ember Kitchen',
      tagline: 'Fire, time, and intention.',
      sub: 'A wood-fired dining experience in the heart of the city. Seasonal menus, sourced locally, prepared with care.',
      cta: 'Reserve a Table',
      cta2: 'View the Menu',
      features: [
        { icon: '✦', title: 'The Menu', desc: 'Four-course seasonal menus that change weekly with the best local produce.' },
        { icon: '✦', title: 'Wine Programme', desc: 'A curated cellar of 200 labels from small biodynamic producers.' },
        { icon: '✦', title: 'Private Dining', desc: 'Our private room seats 18 for corporate dinners and celebrations.' },
      ],
      cards: [
        { label: 'Starter', title: 'Wood-Roasted Bone Marrow', sub: 'Sourdough crostini · Herb salsa verde · £16' },
        { label: 'Main', title: 'Short Rib, 48hr', sub: 'Celeriac purée · Blackberry jus · £38' },
        { label: 'Dessert', title: 'Burnt Honey Tart', sub: 'Crème fraîche · Candied walnut · £12' },
      ],
      testimonial: { quote: 'The best meal I\'ve had in London in five years. Ember is extraordinary.', author: 'Hugo Leblanc', role: 'The Evening Standard' },
      footerTagline: 'Wood-fired dining · Open Tue–Sun',
    },
  },
  {
    id: 'zest',
    name: 'Zest Café',
    category: 'restaurant',
    desc: 'A bright, cheerful café template. Fresh colours, a daily specials board, and a community feel.',
    tags: ['Café', 'Bright', 'Casual'],
    palette: {
      primary:    { name: 'Citrus',   hex: '#F97316' },
      secondary:  { name: 'Lime',     hex: '#84CC16' },
      background: { name: 'Sunlight', hex: '#FFFBEB' },
      text:       { name: 'Coffee',   hex: '#1C0A00' },
      accent:     { name: 'Lemon',    hex: '#FBBF24' },
    },
    fonts: { display: 'Playfair Display', body: 'DM Sans', use: 'Warm serif signals approachability; DM Sans keeps a cheerful, informal tone throughout.' },
    gradient: 'linear-gradient(135deg, #F97316 0%, #FBBF24 50%, #84CC16 100%)',
    textOnCard: '#1C0A00',
    components: ['Friendly nav', 'Seasonal hero', 'Daily menu', 'Order online', 'Events board', 'Social feed'],
    content: {
      brand: 'Zest Café',
      tagline: 'Your morning made better.',
      sub: 'Specialty coffee, fresh-baked pastries, and a warm place to work, meet, or simply exist.',
      cta: 'Order Online',
      cta2: 'Today\'s Specials',
      features: [
        { icon: '☕', title: 'Specialty Coffee', desc: 'Single-origin beans, roasted weekly by our friends in East London.' },
        { icon: '☕', title: 'Fresh Bakes', desc: 'Pastries and breads baked in-house every morning from 7am.' },
        { icon: '☕', title: 'Weekend Brunch', desc: 'Full brunch menu every Saturday and Sunday, 9am–2pm.' },
      ],
      cards: [
        { label: 'Coffee', title: 'Oat Flat White', sub: 'Double shot · Oat milk · £4.20' },
        { label: 'Bake', title: 'Almond Croissant', sub: 'Freshly baked · Frangipane · £3.80' },
        { label: 'Brunch', title: 'Avo & Poached Eggs', sub: 'Sourdough · Chilli flakes · £11' },
      ],
      testimonial: { quote: 'Zest is where I write, think, and feel human again. Best café in the neighbourhood.', author: 'Maya Singh', role: 'Regular Customer' },
      footerTagline: 'Open daily 7am – 6pm · Order online',
    },
  },
  {
    id: 'nakama',
    name: 'Nakama Ramen',
    category: 'restaurant',
    desc: 'An Asian fusion restaurant template inspired by Japanese izakaya aesthetics. Minimal, high-contrast, and bold.',
    tags: ['Asian', 'Minimal', 'Bold'],
    palette: {
      primary:    { name: 'Ink',   hex: '#1A1A1A' },
      secondary:  { name: 'Red',   hex: '#C0392B' },
      background: { name: 'Washi', hex: '#F8F4EC' },
      text:       { name: 'Sumi',  hex: '#1A1A1A' },
      accent:     { name: 'Gold',  hex: '#D4A017' },
    },
    fonts: { display: 'Playfair Display', body: 'DM Sans', use: 'Refined serif display with a clean sans body creates a refined east-meets-west feel.' },
    gradient: 'linear-gradient(135deg, #1A1A1A 0%, #3A0000 50%, #C0392B 100%)',
    textOnCard: '#1A1A1A',
    components: ['Sticky nav', 'Story hero', 'Menu tabs', 'Location map', 'Reservations', 'Gift cards'],
    content: {
      brand: '仲間 Nakama',
      tagline: 'Ramen, reimagined.',
      sub: 'Modern Japanese ramen and small plates in a stripped-back setting. Come as you are. Stay for hours.',
      cta: 'Book a Table',
      cta2: 'See the Menu',
      features: [
        { icon: '一', title: 'Signature Broths', desc: 'Twenty-four hour tonkotsu, shio, and miso broths made fresh daily.' },
        { icon: '一', title: 'Small Plates', desc: 'Seasonal izakaya snacks to share — gyoza, karaage, and edamame.' },
        { icon: '一', title: 'Natural Wines', desc: 'A short, considered list of low-intervention Japanese and European wines.' },
      ],
      cards: [
        { label: 'Signature', title: 'Nakama Tonkotsu', sub: 'Chashu · Soft egg · Bamboo · £16' },
        { label: 'Vegan', title: 'Shiro Miso', sub: 'Tofu · Seasonal greens · Nori · £14' },
        { label: 'Small Plate', title: 'Crispy Gyoza (6)', sub: 'Pork & cabbage · Ponzu · £9' },
      ],
      testimonial: { quote: 'Nakama is the most soulful bowl of ramen outside Tokyo. Absolutely unmissable.', author: 'Kenji Watanabe', role: 'Food Critic, Timeout London' },
      footerTagline: 'Modern ramen · Open from 12pm daily',
    },
  },

  // ── REAL ESTATE ────────────────────────────
  {
    id: 'haven',
    name: 'Haven Realty',
    category: 'realestate',
    desc: 'A professional real estate agency template. Property search, featured listings, and agent profiles.',
    tags: ['Professional', 'Listings', 'Clean'],
    palette: {
      primary:    { name: 'Navy',  hex: '#1E3A5F' },
      secondary:  { name: 'Sky',   hex: '#0EA5E9' },
      background: { name: 'White', hex: '#FFFFFF' },
      text:       { name: 'Slate', hex: '#1E293B' },
      accent:     { name: 'Teal',  hex: '#14B8A6' },
    },
    fonts: { display: 'Playfair Display', body: 'DM Sans', use: 'Trusted Baskerville conveys property authority; DM Sans keeps listings clear and scannable.' },
    gradient: 'linear-gradient(135deg, #1E3A5F 0%, #0EA5E9 60%, #14B8A6 100%)',
    textOnCard: '#1E293B',
    components: ['Search nav', 'Hero with search', 'Property cards', 'Map view', 'Agent profiles', 'Market stats'],
    content: {
      brand: 'Haven Realty',
      tagline: 'Find where you belong.',
      sub: 'Premium residential property across London and the Home Counties. Trusted by buyers, sellers, and landlords since 2003.',
      cta: 'Search Properties',
      cta2: 'Book a Valuation',
      features: [
        { icon: '◎', title: '1,200+ Listings', desc: 'The widest selection of residential property across 24 London boroughs.' },
        { icon: '◎', title: 'Expert Agents', desc: 'Forty experienced agents with an average of 11 years in the market.' },
        { icon: '◎', title: 'Market Insights', desc: 'Weekly data reports on price movements, demand trends, and forecasts.' },
      ],
      cards: [
        { label: 'For Sale · Notting Hill', title: '4-Bed Victorian Terrace', sub: '£2,850,000 · 2,100 sq ft · Garden' },
        { label: 'To Let · Shoreditch', title: 'Modern 2-Bed Apartment', sub: '£3,200 pcm · 850 sq ft · Gym' },
        { label: 'For Sale · Richmond', title: 'Detached Family Home', sub: '£1,650,000 · 1,800 sq ft · 5 beds' },
      ],
      testimonial: { quote: 'Haven sold our house above asking in three weeks. Their market knowledge is exceptional.', author: 'Claire & Ben Whitfield', role: 'Sellers, Richmond' },
      footerTagline: 'Premium residential property in London.',
    },
  },
  {
    id: 'luxe',
    name: 'Luxe Estates',
    category: 'realestate',
    desc: 'A luxury property showcase. Cinematic full-screen photography, minimal overlays, and prestige typography.',
    tags: ['Luxury', 'Dark', 'Premium'],
    palette: {
      primary:    { name: 'Obsidian',  hex: '#0A0A0A' },
      secondary:  { name: 'Champagne', hex: '#C9A84C' },
      background: { name: 'Void',      hex: '#0F0F0F' },
      text:       { name: 'Ivory',     hex: '#F5F0E8' },
      accent:     { name: 'Bronze',    hex: '#A07840' },
    },
    fonts: { display: 'Playfair Display', body: 'DM Sans', use: 'Playfair Display brings European luxury heritage; DM Sans adds refined elegance in body copy.' },
    gradient: 'linear-gradient(135deg, #0A0A0A 0%, #1A1000 50%, #C9A84C 100%)',
    textOnCard: '#F5F0E8',
    components: ['Minimal nav', 'Cinematic hero', 'Property showcase', 'Virtual tour CTA', 'Press logos', 'Contact'],
    content: {
      brand: 'LUXE',
      tagline: 'The world\'s finest homes.',
      sub: 'Ultra-prime residential property exclusively in the world\'s most desirable locations.',
      cta: 'View Current Offerings',
      cta2: 'Private Consultation',
      features: [
        { icon: '◆', title: 'Global Portfolio', desc: 'Extraordinary residences in London, New York, Monaco, Dubai, and beyond.' },
        { icon: '◆', title: 'Absolute Discretion', desc: 'Private off-market transactions handled with complete confidentiality.' },
        { icon: '◆', title: 'White Glove Service', desc: 'Concierge relocation, legal, and interior design services included.' },
      ],
      cards: [
        { label: 'London · For Sale', title: 'Penthouse, One Hyde Park', sub: '£45,000,000 · 7,200 sq ft · 360° views' },
        { label: 'Monaco · For Sale', title: 'Villa Les Cèdres', sub: '€120,000,000 · 14 bedrooms · Historic estate' },
        { label: 'Dubai · For Sale', title: 'Palm Signature Villa', sub: '$28,000,000 · Private beach · Smart home' },
      ],
      testimonial: { quote: 'Luxe handled our acquisition with a level of discretion and expertise we have never encountered elsewhere.', author: 'Anonymous Client', role: 'Family Office, Geneva' },
      footerTagline: 'Ultra-prime residential property worldwide.',
    },
  },
  {
    id: 'verde',
    name: 'Verde Living',
    category: 'realestate',
    desc: 'A sustainable and eco-friendly housing development template. Green branding, community focus, and lifestyle imagery.',
    tags: ['Eco', 'Green', 'Community'],
    palette: {
      primary:    { name: 'Deep Green', hex: '#14532D' },
      secondary:  { name: 'Leaf',       hex: '#4ADE80' },
      background: { name: 'Sage White', hex: '#F0FDF4' },
      text:       { name: 'Forest',     hex: '#14532D' },
      accent:     { name: 'Earth',      hex: '#78350F' },
    },
    fonts: { display: 'Playfair Display', body: 'DM Sans', use: 'DM family pairing delivers consistency and warmth, perfect for community-focused branding.' },
    gradient: 'linear-gradient(135deg, #14532D 0%, #4ADE80 60%, #F0FDF4 100%)',
    textOnCard: '#14532D',
    components: ['Green nav', 'Community hero', 'Floorplans', 'Sustainability stats', 'Amenities', 'Register interest'],
    content: {
      brand: 'Verde Living',
      tagline: 'Homes that care about tomorrow.',
      sub: 'A new community of 120 net-zero homes set within 40 acres of managed green space. Register your interest today.',
      cta: 'Register Interest',
      cta2: 'See Floorplans',
      features: [
        { icon: '◎', title: 'Net Zero Certified', desc: 'All homes achieve net-zero carbon in operation through solar, ASHP, and insulation.' },
        { icon: '◎', title: '40 Acres of Green', desc: 'Wildflower meadows, allotments, woodland walks, and a communal orchard.' },
        { icon: '◎', title: 'EV Ready', desc: 'Every home includes a dedicated EV charging point and battery storage.' },
      ],
      cards: [
        { label: '2-Bed · From £320,000', title: 'The Birch', sub: '720 sq ft · Garden · EV + Solar' },
        { label: '3-Bed · From £440,000', title: 'The Elm', sub: '1,050 sq ft · Private terrace · Air source heat pump' },
        { label: '4-Bed · From £580,000', title: 'The Oak', sub: '1,380 sq ft · Detached · Smart home + EV' },
      ],
      testimonial: { quote: 'Verde is exactly what we were looking for — a beautiful home that aligns with our values.', author: 'Sam & Jo Pearce', role: 'Verde Homeowners' },
      footerTagline: 'Net-zero homes · Register interest now',
    },
  },

  // ── FITNESS ────────────────────────────────
  {
    id: 'iron',
    name: 'Iron Gym',
    category: 'fitness',
    desc: 'A high-energy gym and fitness centre template. Bold typography, dark backgrounds, and motivational layout.',
    tags: ['Gym', 'Dark', 'Bold'],
    palette: {
      primary:    { name: 'Void',   hex: '#0A0A0A' },
      secondary:  { name: 'Red',    hex: '#DC2626' },
      background: { name: 'Carbon', hex: '#111111' },
      text:       { name: 'White',  hex: '#F9FAFB' },
      accent:     { name: 'Orange', hex: '#F97316' },
    },
    fonts: { display: 'Playfair Display', body: 'DM Sans', use: 'Playfair Display in bold is powerful and striking. DM Sans keeps it grounded and readable.' },
    gradient: 'linear-gradient(135deg, #0A0A0A 0%, #1A0000 50%, #DC2626 100%)',
    textOnCard: '#F9FAFB',
    components: ['Dark nav', 'Full-screen hero', 'Classes grid', 'Trainer profiles', 'Membership plans', 'Transform CTA'],
    content: {
      brand: 'IRON',
      tagline: 'Forge the strongest version of yourself.',
      sub: 'State-of-the-art training facility with expert coaches, 70+ weekly classes, and a community built on results.',
      cta: 'Start Free Week',
      cta2: 'View Classes',
      features: [
        { icon: '▶', title: 'Strength Training', desc: '15,000 sq ft of free weights, platforms, and specialist machines.' },
        { icon: '▶', title: 'Group Classes', desc: 'HIIT, Cycle, Boxing, and Mobility — 70+ sessions per week.' },
        { icon: '▶', title: 'Personal Training', desc: '1-on-1 sessions with certified coaches who build programmes for your goals.' },
      ],
      cards: [
        { label: 'Class · Monday 6am', title: 'Power HIIT', sub: '45 min · All levels · Coach Marcus' },
        { label: 'Class · Tuesday 7pm', title: 'Iron Boxing', sub: '60 min · Intermediate · Coach Zara' },
        { label: 'Class · Wednesday 12pm', title: 'Mobility & Recovery', sub: '30 min · All levels · Coach Liam' },
      ],
      testimonial: { quote: 'I\'ve trained at gyms all over the world. Iron is the best. The community alone is worth it.', author: 'James Okafor', role: 'Member since 2022' },
      footerTagline: 'Open 5am – 11pm daily · 3 London locations',
    },
  },
  {
    id: 'bloom',
    name: 'Bloom Wellness',
    category: 'fitness',
    desc: 'A yoga, pilates, and wellness studio template. Soft, serene design with a focus on calm and mindful movement.',
    tags: ['Yoga', 'Calm', 'Wellness'],
    palette: {
      primary:    { name: 'Lavender', hex: '#7C3AED' },
      secondary:  { name: 'Blush',    hex: '#F9A8D4' },
      background: { name: 'Pearl',    hex: '#FDFBFF' },
      text:       { name: 'Plum',     hex: '#3B1F5E' },
      accent:     { name: 'Sage',     hex: '#86EFAC' },
    },
    fonts: { display: 'Playfair Display', body: 'DM Sans', use: 'Playfair Display brings a serene, literary quality to headings; DM Sans feels warm and inviting.' },
    gradient: 'linear-gradient(135deg, #7C3AED 0%, #F9A8D4 50%, #86EFAC 100%)',
    textOnCard: '#3B1F5E',
    components: ['Soft nav', 'Meditation hero', 'Class schedule', 'Studio team', 'Membership tiers', 'Retreat signup'],
    content: {
      brand: 'Bloom',
      tagline: 'Move gently. Live fully.',
      sub: 'A sanctuary for yoga, pilates, and mindful movement. Join thousands who\'ve found their practice with Bloom.',
      cta: 'Book Your First Class',
      cta2: 'Explore the Studio',
      features: [
        { icon: '✦', title: 'Yoga', desc: 'Hatha, Vinyasa, Yin, and Restorative — classes for every body and experience level.' },
        { icon: '✦', title: 'Pilates', desc: 'Reformer and mat Pilates to build deep strength, mobility, and body awareness.' },
        { icon: '✦', title: 'Meditation', desc: 'Guided breathwork and mindfulness sessions to reduce stress and improve focus.' },
      ],
      cards: [
        { label: 'Morning Flow · 7am', title: 'Vinyasa Yoga', sub: '60 min · All levels · Teacher: Maya' },
        { label: 'Lunch · 12:30pm', title: 'Reformer Pilates', sub: '50 min · Intermediate · Teacher: Zoe' },
        { label: 'Evening · 7pm', title: 'Yin & Restore', sub: '75 min · Beginners welcome · Teacher: Suki' },
      ],
      testimonial: { quote: 'Bloom gave me a practice I carry everywhere. It changed my relationship with my body completely.', author: 'Amara Osei', role: 'Member for 2 years' },
      footerTagline: 'Yoga, pilates & mindful movement.',
    },
  },

];

// ── CATEGORIES ─────────────────────────────
const CATEGORIES = [
  { id: 'all',        label: 'All' },
  { id: 'portfolio',  label: 'Portfolio' },
  { id: 'landing',    label: 'Landing Page' },
  { id: 'ecommerce',  label: 'E-commerce' },
  { id: 'blog',       label: 'Blog' },
  { id: 'saas',       label: 'SaaS' },
  { id: 'restaurant', label: 'Restaurant' },
  { id: 'realestate', label: 'Real Estate' },
  { id: 'fitness',    label: 'Fitness' },
];

let currentFilter = 'all';
let currentPage   = 'home';
let previousPage  = 'home';

// ── FILTER BARS ────────────────────────────
function buildFilterBars() {
  ['homeFilterBar', 'allFilterBar'].forEach(barId => {
    const bar = document.getElementById(barId);
    if (!bar) return;
    bar.innerHTML = CATEGORIES.map(c =>
      `<button class="filter-btn${c.id==='all'?' active':''}" data-filter="${c.id}" onclick="filterCards('${c.id}')">${c.label}</button>`
    ).join('');
  });
}

function filterCards(filter) {
  currentFilter = filter;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.toggle('active', b.dataset.filter === filter));
  renderCards('cardsGrid');
  renderCards('allCardsGrid');
}

// ── CARD PREVIEW (small mockup on card) ───
function buildCardMockup(t) {
  const p = t.palette;
  const c = t.content;
  const isDark = isColorDark(p.background.hex);
  const textCol = isDark ? p.text.hex : p.text.hex;
  const subCol  = isDark ? 'rgba(255,255,255,0.55)' : 'rgba(0,0,0,0.45)';
  const cardBg  = isDark ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.05)';
  const lineBg  = isDark ? 'rgba(255,255,255,0.25)' : 'rgba(0,0,0,0.18)';
  const lineSubBg = isDark ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.09)';
  const btnBg   = p.secondary.hex;

  return `
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:11px;">
      <span style="font-weight:800;font-size:12px;color:${textCol};letter-spacing:-0.3px;">${c.brand}</span>
      <div style="display:flex;gap:5px;align-items:center;">
        ${['','',''].map(()=>`<div style="width:28px;height:7px;background:${lineSubBg};border-radius:3px;"></div>`).join('')}
        <div style="width:44px;height:20px;background:${btnBg};border-radius:4px;"></div>
      </div>
    </div>
    <div style="margin-bottom:10px;">
      <div style="font-size:13px;font-weight:700;color:${textCol};line-height:1.2;margin-bottom:4px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${c.tagline}</div>
      <div style="width:75%;height:6px;background:${lineSubBg};border-radius:3px;margin-bottom:8px;"></div>
      <div style="display:inline-block;padding:5px 12px;background:${btnBg};border-radius:4px;font-size:9px;font-weight:700;color:#fff;">${c.cta}</div>
    </div>
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:5px;">
      ${c.features.slice(0,3).map(f=>`
        <div style="background:${cardBg};border-radius:5px;padding:6px;">
          <div style="font-size:9px;font-weight:700;color:${textCol};margin-bottom:2px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${f.title}</div>
          <div style="width:80%;height:4px;background:${lineSubBg};border-radius:2px;"></div>
        </div>`).join('')}
    </div>`;
}

function isColorDark(hex) {
  const r = parseInt(hex.slice(1,3),16);
  const g = parseInt(hex.slice(3,5),16);
  const b = parseInt(hex.slice(5,7),16);
  return (r*0.299 + g*0.587 + b*0.114) < 140;
}

// ── RENDER CARDS ──────────────────────────
function renderCards(containerId) {
  const el = document.getElementById(containerId);
  if (!el) return;
  const list = currentFilter === 'all' ? templates : templates.filter(t => t.category === currentFilter);
  if (!list.length) { el.innerHTML = '<p style="color:var(--ink-faint)">No templates yet.</p>'; return; }
  const catLabel = id => CATEGORIES.find(c=>c.id===id)?.label || id;
  el.innerHTML = list.map(t => `
    <div class="template-card" onclick="openTemplate('${t.id}')">
      <div class="card-preview">
        <div class="card-preview-inner" style="background:${t.palette.background.hex};">
          ${buildCardMockup(t)}
        </div>
      </div>
      <div class="card-meta">
        <div class="card-category">${catLabel(t.category)}</div>
        <div class="card-name">${t.name}</div>
        <div class="card-desc">${t.desc}</div>
        <div class="card-footer">
          <div class="card-tags">${t.tags.map(tag=>`<span class="tag">${tag}</span>`).join('')}</div>
          <button class="card-btn" onclick="event.stopPropagation();openTemplate('${t.id}')">Preview →</button>
        </div>
      </div>
    </div>`).join('');
}

// ── FULL PAGE PREVIEW HTML ─────────────────
function buildFullPreviewHTML(t) {
  const p = t.palette;
  const c = t.content;
  const isDark = isColorDark(p.background.hex);
  const gfUrl = `https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=DM+Sans:wght@300;400;500;600&family=DM+Mono:wght@400;500&display=swap`;

  // nav text colour — invert against nav bg
  const navBg     = p.primary.hex;
  const navIsDark = isColorDark(navBg);
  const navText   = navIsDark ? p.text.hex : p.primary.hex;
  const navBgActual = navIsDark ? p.primary.hex : p.background.hex;
  const navBorder = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)';

  const heroBg    = isDark ? `background:${p.background.hex};` : `background:${p.background.hex};`;
  const heroText  = p.text.hex;
  const heroSub   = isDark ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.5)';
  const btnBg     = p.secondary.hex;
  const btnText   = isColorDark(btnBg) ? '#ffffff' : '#111111';
  const accentCol = p.accent.hex;
  const sectionBg = isDark
    ? `background:${lightenDarken(p.background.hex, 8)};`
    : `background:${lightenDarken(p.background.hex, -4)};`;
  const cardBg    = isDark ? 'rgba(255,255,255,0.05)' : '#ffffff';
  const cardBorder= isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.07)';
  const muted     = isDark ? 'rgba(255,255,255,0.55)' : 'rgba(0,0,0,0.5)';
  const faint     = isDark ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.3)';
  const divider   = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)';
  const useMonoFont = ['circuit','koda'].includes(t.id);
  const displayFont = useMonoFont ? '"DM Mono", monospace' : '"Playfair Display", serif';

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1"/>
<title>${c.brand}</title>
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link href="${gfUrl}" rel="stylesheet"/>
<style>
  *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
  html{scroll-behavior:smooth;}
  body{
    font-family:"DM Sans",sans-serif;
    background:${p.background.hex};
    color:${heroText};
    line-height:1.6;
    overflow-x:hidden;
    font-size:15px;
  }
  a{color:inherit;text-decoration:none;}
  ul{list-style:none;}
  /* NAV */
  .nav{
    position:sticky;top:0;z-index:50;
    background:${navBgActual};
    border-bottom:1px solid ${navBorder};
    backdrop-filter:blur(12px);
    -webkit-backdrop-filter:blur(12px);
  }
  .nav-inner{
    max-width:1100px;margin:0 auto;
    padding:0 28px;height:62px;
    display:flex;align-items:center;justify-content:space-between;
  }
  .nav-brand{
    font-family:${displayFont};
    font-weight:900;font-size:1.25rem;
    color:${navIsDark ? p.text.hex : p.primary.hex};
    letter-spacing:-0.02em;
  }
  .nav-links{display:flex;gap:6px;}
  .nav-link{
    padding:7px 14px;border-radius:6px;
    font-size:0.85rem;font-weight:500;
    color:${navIsDark ? 'rgba(255,255,255,0.65)' : 'rgba(0,0,0,0.5)'};
    transition:all .2s;
  }
  .nav-link:hover{
    background:${isDark?'rgba(255,255,255,0.08)':'rgba(0,0,0,0.06)'};
    color:${heroText};
  }
  .nav-cta{
    padding:9px 20px;border-radius:7px;
    background:${btnBg};color:${btnText};
    font-size:0.85rem;font-weight:600;
    transition:all .2s;border:none;cursor:pointer;
  }
  .nav-cta:hover{opacity:.88;transform:translateY(-1px);}
  /* HERO */
  .hero{
    max-width:1100px;margin:0 auto;
    padding:80px 28px 72px;
    display:grid;grid-template-columns:1fr 1fr;
    gap:56px;align-items:center;
  }
  .hero-eyebrow{
    display:inline-block;
    padding:5px 14px;
    background:${isDark?'rgba(255,255,255,0.08)':'rgba(0,0,0,0.06)'};
    border-radius:100px;
    font-size:0.75rem;font-weight:600;
    letter-spacing:.06em;text-transform:uppercase;
    color:${accentCol};
    margin-bottom:20px;
  }
  .hero-title{
    font-family:${displayFont};
    font-size:clamp(2.2rem,4.5vw,3.4rem);
    font-weight:900;line-height:1.08;
    letter-spacing:-0.03em;
    margin-bottom:18px;
    color:${heroText};
  }
  .hero-sub{
    font-size:1rem;line-height:1.72;
    color:${heroSub};
    margin-bottom:32px;
    max-width:460px;
  }
  .hero-btns{display:flex;gap:12px;flex-wrap:wrap;}
  .btn-primary{
    padding:13px 26px;border-radius:8px;
    background:${btnBg};color:${btnText};
    font-size:0.9rem;font-weight:600;border:none;cursor:pointer;
    transition:all .2s;display:inline-block;
  }
  .btn-primary:hover{opacity:.88;transform:translateY(-1px);}
  .btn-ghost{
    padding:12px 26px;border-radius:8px;
    background:transparent;
    border:1.5px solid ${isDark?'rgba(255,255,255,0.2)':'rgba(0,0,0,0.15)'};
    color:${heroText};
    font-size:0.9rem;font-weight:600;cursor:pointer;
    transition:all .2s;display:inline-block;
  }
  .btn-ghost:hover{border-color:${heroText};}
  /* HERO VISUAL */
  .hero-visual{
    background:${isDark?'rgba(255,255,255,0.04)':'rgba(0,0,0,0.04)'};
    border:1px solid ${isDark?'rgba(255,255,255,0.08)':'rgba(0,0,0,0.08)'};
    border-radius:16px;overflow:hidden;
    padding:24px;
  }
  .visual-topbar{
    display:flex;align-items:center;gap:8px;
    margin-bottom:18px;padding-bottom:14px;
    border-bottom:1px solid ${divider};
  }
  .vdot{width:10px;height:10px;border-radius:50%;}
  .visual-content{}
  .vis-line{
    height:10px;border-radius:6px;
    margin-bottom:8px;
  }
  .vis-cards{
    display:grid;grid-template-columns:repeat(3,1fr);
    gap:8px;margin-top:14px;
  }
  .vis-card{
    background:${isDark?'rgba(255,255,255,0.06)':'rgba(0,0,0,0.05)'};
    border-radius:8px;padding:10px;
  }
  .vis-card-img{
    height:36px;border-radius:5px;
    background:${p.secondary.hex};
    opacity:.5;margin-bottom:7px;
  }
  /* FEATURES SECTION */
  .section{
    padding:72px 28px;
    ${sectionBg}
    border-top:1px solid ${divider};
    border-bottom:1px solid ${divider};
  }
  .section-inner{max-width:1100px;margin:0 auto;}
  .section-label{
    font-size:0.72rem;font-weight:700;
    letter-spacing:.12em;text-transform:uppercase;
    color:${accentCol};margin-bottom:10px;
  }
  .section-title{
    font-family:${displayFont};
    font-size:clamp(1.6rem,3vw,2.4rem);
    font-weight:800;letter-spacing:-0.03em;
    margin-bottom:40px;color:${heroText};
    line-height:1.1;
  }
  .features-grid{
    display:grid;grid-template-columns:repeat(3,1fr);gap:20px;
  }
  .feature-item{
    padding:24px;border-radius:12px;
    background:${cardBg};
    border:1px solid ${cardBorder};
  }
  .feature-icon{
    font-size:1.4rem;margin-bottom:14px;
    color:${accentCol};
  }
  .feature-title{
    font-family:${displayFont};
    font-size:1rem;font-weight:700;
    margin-bottom:8px;color:${heroText};
  }
  .feature-desc{
    font-size:0.85rem;color:${muted};line-height:1.65;
  }
  /* CARDS SECTION */
  .section-plain{
    padding:72px 28px;
    background:${p.background.hex};
  }
  .section-plain .section-inner{max-width:1100px;margin:0 auto;}
  .cards-row{
    display:grid;grid-template-columns:repeat(3,1fr);gap:20px;
  }
  .content-card{
    border-radius:14px;overflow:hidden;
    background:${cardBg};
    border:1px solid ${cardBorder};
    transition:transform .2s,box-shadow .2s;
  }
  .content-card:hover{transform:translateY(-4px);box-shadow:0 12px 32px rgba(0,0,0,.12);}
  .card-img{
    height:140px;
    background:linear-gradient(135deg,${p.secondary.hex},${p.accent.hex});
    opacity:.85;
  }
  .card-body{padding:18px 20px 22px;}
  .card-label{
    font-size:0.7rem;font-weight:700;
    letter-spacing:.08em;text-transform:uppercase;
    color:${accentCol};margin-bottom:6px;
  }
  .card-title{
    font-family:${displayFont};
    font-size:1.05rem;font-weight:700;
    color:${heroText};margin-bottom:5px;
    line-height:1.3;
  }
  .card-sub{font-size:0.82rem;color:${muted};}
  /* TESTIMONIAL */
  .testimonial-section{
    padding:72px 28px;
    background:${btnBg};
    text-align:center;
  }
  .testi-inner{max-width:680px;margin:0 auto;}
  .testi-quote{
    font-family:${displayFont};
    font-size:clamp(1.2rem,2.5vw,1.65rem);
    font-weight:700;letter-spacing:-0.02em;
    color:${btnText};line-height:1.4;
    margin-bottom:24px;
    font-style:italic;
  }
  .testi-author{
    font-size:0.85rem;font-weight:600;
    color:${isColorDark(btnBg)?'rgba(255,255,255,0.7)':'rgba(0,0,0,0.55)'};
    letter-spacing:.04em;
  }
  .testi-role{
    font-size:0.78rem;
    color:${isColorDark(btnBg)?'rgba(255,255,255,0.45)':'rgba(0,0,0,0.35)'};
    margin-top:2px;
  }
  /* CTA BAND */
  .cta-band{
    padding:80px 28px;
    background:${p.background.hex};
    text-align:center;
    border-top:1px solid ${divider};
  }
  .cta-title{
    font-family:${displayFont};
    font-size:clamp(1.8rem,3.5vw,2.8rem);
    font-weight:900;letter-spacing:-0.03em;
    color:${heroText};margin-bottom:16px;
  }
  .cta-sub{font-size:1rem;color:${muted};margin-bottom:32px;}
  /* FOOTER */
  .footer{
    border-top:1px solid ${divider};
    padding:32px 28px;
    background:${p.background.hex};
  }
  .footer-inner{
    max-width:1100px;margin:0 auto;
    display:flex;align-items:center;
    justify-content:space-between;flex-wrap:wrap;gap:16px;
  }
  .footer-brand{
    font-family:${displayFont};
    font-weight:800;font-size:1rem;color:${heroText};
  }
  .footer-copy{font-size:0.8rem;color:${faint};}
  .footer-links{display:flex;gap:18px;}
  .footer-link{font-size:0.8rem;color:${faint};transition:color .2s;}
  .footer-link:hover{color:${heroText};}
  /* RESPONSIVE */
  @media(max-width:700px){
    .hero{grid-template-columns:1fr;gap:32px;padding:48px 20px 56px;}
    .features-grid{grid-template-columns:1fr;}
    .cards-row{grid-template-columns:1fr;}
    .hero-visual{display:none;}
    .nav-links{display:none;}
  }
</style>
</head>
<body>
  <!-- NAV -->
  <nav class="nav">
    <div class="nav-inner">
      <div class="nav-brand">${c.brand}</div>
      <div class="nav-links">
        <a class="nav-link" href="#">Home</a>
        <a class="nav-link" href="#">Work</a>
        <a class="nav-link" href="#">About</a>
        <a class="nav-link" href="#">Contact</a>
      </div>
      <button class="nav-cta">${c.cta}</button>
    </div>
  </nav>

  <!-- HERO -->
  <section style="background:${p.background.hex};">
    <div class="hero">
      <div class="hero-content">
        <div class="hero-eyebrow">${CATEGORIES.find(cat=>cat.id===t.category)?.label||t.category}</div>
        <h1 class="hero-title">${c.tagline}</h1>
        <p class="hero-sub">${c.sub}</p>
        <div class="hero-btns">
          <button class="btn-primary">${c.cta}</button>
          <button class="btn-ghost">${c.cta2}</button>
        </div>
      </div>
      <div class="hero-visual">
        <div class="visual-topbar">
          <div class="vdot" style="background:#FF5F57;"></div>
          <div class="vdot" style="background:#FEBC2E;"></div>
          <div class="vdot" style="background:#28C840;"></div>
          <div style="flex:1;height:7px;background:${isDark?'rgba(255,255,255,0.08)':'rgba(0,0,0,0.07)'};border-radius:4px;margin-left:8px;"></div>
        </div>
        <div class="visual-content">
          <div class="vis-line" style="width:80%;background:${isDark?'rgba(255,255,255,0.55)':'rgba(0,0,0,0.25)'}"></div>
          <div class="vis-line" style="width:55%;background:${isDark?'rgba(255,255,255,0.2)':'rgba(0,0,0,0.1)'}"></div>
          <div class="vis-line" style="width:65%;background:${isDark?'rgba(255,255,255,0.15)':'rgba(0,0,0,0.07)'}"></div>
          <div class="vis-cards">
            ${[0,1,2].map(i=>`
              <div class="vis-card">
                <div class="vis-card-img" style="background:${i===1?p.accent.hex:p.secondary.hex};"></div>
                <div class="vis-line" style="width:90%;height:7px;background:${isDark?'rgba(255,255,255,0.25)':'rgba(0,0,0,0.12)'}"></div>
                <div class="vis-line" style="width:60%;height:6px;background:${isDark?'rgba(255,255,255,0.1)':'rgba(0,0,0,0.07)'}"></div>
              </div>`).join('')}
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- FEATURES -->
  <section class="section">
    <div class="section-inner">
      <div class="section-label">What we offer</div>
      <h2 class="section-title">Built for what matters.</h2>
      <div class="features-grid">
        ${c.features.map(f=>`
          <div class="feature-item">
            <div class="feature-icon">${f.icon}</div>
            <div class="feature-title">${f.title}</div>
            <p class="feature-desc">${f.desc}</p>
          </div>`).join('')}
      </div>
    </div>
  </section>

  <!-- CARDS -->
  <section class="section-plain">
    <div class="section-inner">
      <div class="section-label">Featured</div>
      <h2 class="section-title" style="color:${heroText}">${t.category === 'ecommerce' ? 'Our best sellers.' : t.category === 'blog' ? 'Recent articles.' : t.category === 'restaurant' ? 'From the menu.' : t.category === 'saas' ? 'Choose your plan.' : 'Selected work.'}</h2>
      <div class="cards-row">
        ${c.cards.map(card=>`
          <div class="content-card">
            <div class="card-img"></div>
            <div class="card-body">
              <div class="card-label">${card.label}</div>
              <div class="card-title">${card.title}</div>
              <div class="card-sub">${card.sub}</div>
            </div>
          </div>`).join('')}
      </div>
    </div>
  </section>

  <!-- TESTIMONIAL -->
  <section class="testimonial-section">
    <div class="testi-inner">
      <p class="testi-quote">"${c.testimonial.quote}"</p>
      <div class="testi-author">${c.testimonial.author}</div>
      <div class="testi-role">${c.testimonial.role}</div>
    </div>
  </section>

  <!-- CTA -->
  <section class="cta-band">
    <div class="cta-title">Ready to get started?</div>
    <p class="cta-sub">Join thousands who trust ${c.brand}. No commitment required.</p>
    <button class="btn-primary" style="font-size:1rem;padding:14px 32px;">${c.cta}</button>
  </section>

  <!-- FOOTER -->
  <footer class="footer">
    <div class="footer-inner">
      <div class="footer-brand">${c.brand}</div>
      <div class="footer-copy">${c.footerTagline}</div>
      <div class="footer-links">
        <a class="footer-link" href="#">Home</a>
        <a class="footer-link" href="#">About</a>
        <a class="footer-link" href="#">Contact</a>
      </div>
    </div>
  </footer>
</body>
</html>`;
}

function lightenDarken(hex, amount) {
  let r = parseInt(hex.slice(1,3),16);
  let g = parseInt(hex.slice(3,5),16);
  let b = parseInt(hex.slice(5,7),16);
  r = Math.min(255,Math.max(0,r+amount));
  g = Math.min(255,Math.max(0,g+amount));
  b = Math.min(255,Math.max(0,b+amount));
  return `#${r.toString(16).padStart(2,'0')}${g.toString(16).padStart(2,'0')}${b.toString(16).padStart(2,'0')}`;
}

// ── OPEN TEMPLATE ─────────────────────────
function openTemplate(id) {
  const t = templates.find(t=>t.id===id);
  if (!t) return;
  previousPage = currentPage;
  document.getElementById('detailContent').innerHTML = buildDetailHTML(t);
  showPage('detail');
  // inject iframe after DOM renders
  requestAnimationFrame(() => {
    const iframe = document.getElementById(`preview-iframe-${id}`);
    if (iframe) {
      const doc = iframe.contentDocument || iframe.contentWindow.document;
      doc.open(); doc.write(buildFullPreviewHTML(t)); doc.close();
    }
  });
}

function buildDetailHTML(t) {
  const catLabel = CATEGORIES.find(c=>c.id===t.category)?.label||t.category;
  const p = t.palette;

  return `
    <!-- LIVE PREVIEW IFRAME -->
    <div class="preview-wrapper">
      <div class="preview-header">
        <div class="preview-dots">
          <span class="pdot r"></span><span class="pdot y"></span><span class="pdot g"></span>
        </div>
        <span class="preview-url">${t.content.brand.toLowerCase().replace(/[^a-z0-9]/g,'')}.io</span>
        <span class="preview-badge">Live Preview</span>
      </div>
      <iframe
        id="preview-iframe-${t.id}"
        class="preview-iframe"
        title="${t.name} preview"
        scrolling="yes"
      ></iframe>
    </div>

    <!-- DESIGN SYSTEM -->
    <div class="ds-content" style="margin-top:48px;">
      <div class="ds-section">
        <h2 class="ds-heading">About this template</h2>
        <div style="display:flex;gap:16px;flex-wrap:wrap;align-items:center;margin-bottom:20px;">
          <span style="background:var(--accent-light);color:var(--accent);padding:4px 14px;border-radius:100px;font-size:0.8rem;font-weight:600;">${catLabel}</span>
          ${t.tags.map(tag=>`<span class="tag">${tag}</span>`).join('')}
        </div>
        <p style="color:var(--ink-muted);margin-bottom:24px;line-height:1.75;">${t.desc}</p>
        <button class="btn-copy-css" id="copyCssBtn-${t.id}" onclick="copyTemplateCSS('${t.id}')">
          <span class="copy-icon">⧉</span> Copy CSS Variables
        </button>
      </div>

      <div class="ds-section">
        <h2 class="ds-heading">Color Palette</h2>
        <div class="ds-colors">
          ${Object.entries(p).map(([role,c])=>`
            <div class="color-swatch" style="--c:${c.hex}">
              <span class="swatch-name">${c.name}</span>
              <span class="swatch-val">${role} · ${c.hex}</span>
            </div>`).join('')}
        </div>
      </div>

      <div class="ds-section">
        <h2 class="ds-heading">Typography</h2>
        <div class="ds-type">
          <div class="type-example h1-ex">${t.fonts.display} — Display</div>
          <div class="type-example h2-ex">Section Heading — Semibold</div>
          <div class="type-example body-ex">Body — ${t.fonts.body} 15px/1.7. ${t.fonts.use}</div>
          <div class="type-example mono-ex">Pairing note: ${t.fonts.use}</div>
        </div>
      </div>

      <div class="ds-section">
        <h2 class="ds-heading">Components Included</h2>
        <div class="ds-components">
          <div class="comp-group full">
            <h3>Sections</h3>
            <div class="comp-row">${t.components.map(c=>`<span class="tag" style="padding:6px 14px;font-size:0.82rem;">${c}</span>`).join('')}</div>
          </div>
          <div class="comp-group full">
            <h3>Sample Buttons (using template palette)</h3>
            <div class="comp-row">
              <button class="btn" style="background:${p.secondary.hex};color:${isColorDark(p.secondary.hex)?'#fff':'#111'};border-radius:7px;">Primary CTA</button>
              <button class="btn btn-ghost">Ghost</button>
              <button class="btn btn-secondary">Secondary</button>
            </div>
          </div>
          <div class="comp-group full">
            <h3>Navbar (using template colours)</h3>
            <div class="ds-navbar-demo" style="background:${p.primary.hex};border-color:transparent;">
              <span class="demo-logo" style="color:${isColorDark(p.primary.hex)?p.text.hex:p.primary.hex};">${t.content.brand}</span>
              <div class="demo-nav-links">
                ${['Home','Work','About'].map(l=>`<span class="demo-link" style="color:${isColorDark(p.primary.hex)?'rgba(255,255,255,0.6)':'rgba(0,0,0,0.5)'};">${l}</span>`).join('')}
              </div>
              <button class="btn" style="font-size:0.8rem;padding:8px 20px;background:${p.secondary.hex};color:${isColorDark(p.secondary.hex)?'#fff':'#111'};border-radius:6px;">${t.content.cta}</button>
            </div>
          </div>
        </div>
      </div>

      <div class="ds-section">
        <h2 class="ds-heading">Spacing Tokens (8px base)</h2>
        <div class="ds-spacing">
          ${[['4px','xs'],['8px','sm'],['16px','md'],['24px','lg'],['48px','xl'],['80px','2xl']].map(([sz,lbl])=>`
            <div class="sp-row">
              <div class="sp-box" style="width:${sz};height:${sz};background:${p.secondary.hex};max-width:96px;max-height:48px;"></div>
              <span>${sz} — ${lbl}</span>
            </div>`).join('')}
        </div>
      </div>
    </div>`;
}

// ── CSS TOKENS ────────────────────────────
function generateCSSTokens(t) {
  const p = t.palette;
  return `:root {
  /* === ${t.name} — Design Tokens === */
  --color-primary:    ${p.primary.hex};
  --color-secondary:  ${p.secondary.hex};
  --color-background: ${p.background.hex};
  --color-text:       ${p.text.hex};
  --color-accent:     ${p.accent.hex};
  --gradient-hero:    ${t.gradient};
  --font-display: 'Playfair Display', serif;
  --font-body:    'DM Sans', sans-serif;
  --space-xs:  4px;  --space-sm: 8px;  --space-md: 16px;
  --space-lg: 24px;  --space-xl: 48px; --space-2xl: 80px;
  --radius-sm: 6px;  --radius-md: 12px; --radius-lg: 20px;
  --shadow-sm: 0 1px 3px rgba(0,0,0,0.06);
  --shadow-md: 0 4px 16px rgba(0,0,0,0.08);
  --shadow-lg: 0 12px 40px rgba(0,0,0,0.12);
  --transition: 0.22s cubic-bezier(0.4,0,0.2,1);
}`;
}

function copyTemplateCSS(id) {
  const t = templates.find(t=>t.id===id);
  if (!t) return;
  const btn = document.getElementById(`copyCssBtn-${id}`);
  const css = generateCSSTokens(t);
  navigator.clipboard.writeText(css).catch(()=>{
    const ta = document.createElement('textarea');
    ta.value = css; ta.style.cssText='position:fixed;opacity:0;';
    document.body.appendChild(ta); ta.select(); document.execCommand('copy'); document.body.removeChild(ta);
  }).finally(()=>{}).then(()=>{});
  btn.classList.add('copied');
  btn.innerHTML='<span class="copy-icon">✓</span> Copied!';
  setTimeout(()=>{btn.classList.remove('copied');btn.innerHTML='<span class="copy-icon">⧉</span> Copy CSS Variables';},2000);
}

// ── NAVIGATION ────────────────────────────
function showPage(name) {
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  const target = document.getElementById(`page-${name}`);
  if (target) { target.classList.add('active'); window.scrollTo({top:0,behavior:'smooth'}); }
  document.querySelectorAll('.nav-link').forEach(l=>l.classList.toggle('active',l.dataset.page===name));
  document.getElementById('navLinks').classList.remove('open');
  document.getElementById('hamburger').classList.remove('open');
  currentPage = name;
}

function goBack() { showPage(previousPage||'templates'); }

// ── THEME ─────────────────────────────────
function setupTheme() {
  const toggle = document.getElementById('themeToggle');
  const html   = document.documentElement;
  html.setAttribute('data-theme', localStorage.getItem('dv-theme')||'light');
  toggle.addEventListener('click', ()=>{
    const next = html.getAttribute('data-theme')==='dark'?'light':'dark';
    html.setAttribute('data-theme',next);
    localStorage.setItem('dv-theme',next);
  });
}

function setupHamburger() {
  document.getElementById('hamburger').addEventListener('click', ()=>{
    document.getElementById('navLinks').classList.toggle('open');
    document.getElementById('hamburger').classList.toggle('open');
  });
}

window.addEventListener('scroll', ()=>{
  const nav = document.getElementById('navbar');
  if (nav) nav.style.boxShadow = window.scrollY>20?'var(--shadow-md)':'none';
});

document.addEventListener('DOMContentLoaded', ()=>{
  setupTheme(); setupHamburger();
  buildFilterBars();
  renderCards('cardsGrid');
  renderCards('allCardsGrid');
});
