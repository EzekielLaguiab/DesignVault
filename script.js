/* =============================================
   DESIGNVAULT — script.js
   ============================================= */

// ─── TEMPLATE DATA ───────────────────────────
const templates = [
  {
    id: 'nova',
    name: 'Nova Portfolio',
    category: 'portfolio',
    desc: 'A bold, editorial portfolio for designers and creative directors. Dark base with expressive typography.',
    tags: ['Dark', 'Editorial', 'Creative'],
    palette: {
      primary: { name: 'Obsidian', hex: '#0A0A0F' },
      secondary: { name: 'Electric Violet', hex: '#7C3AED' },
      background: { name: 'Deep Night', hex: '#13131A' },
      text: { name: 'Soft White', hex: '#F0F0F5' },
      accent: { name: 'Neon Mint', hex: '#00E5A0' }
    },
    fonts: {
      display: 'Clash Display',
      body: 'General Sans',
      use: "Bold geometric display paired with a neutral humanist body creates tension and elegance."
    },
    gradient: 'linear-gradient(135deg, #0A0A0F 0%, #13131A 40%, #1E0A3C 100%)',
    textOnCard: '#F0F0F5',
    components: ['Minimal nav', 'Full-screen hero', 'Project grid', 'Case study layout', 'Contact form'],
  },
  {
    id: 'aura',
    name: 'Aura Landing',
    category: 'landing',
    desc: 'A conversion-optimized SaaS landing page with glassmorphism cards and gradient accents.',
    tags: ['SaaS', 'Gradient', 'Modern'],
    palette: {
      primary: { name: 'Indigo', hex: '#4F46E5' },
      secondary: { name: 'Violet', hex: '#7C3AED' },
      background: { name: 'Snow', hex: '#FAFAFA' },
      text: { name: 'Ink', hex: '#0F0F0F' },
      accent: { name: 'Coral', hex: '#FF6B6B' }
    },
    fonts: {
      display: 'Syne',
      body: 'Inter',
      use: "Syne's geometric boldness anchors the hero while Inter ensures optimal reading comfort throughout."
    },
    gradient: 'linear-gradient(135deg, #4F46E5 0%, #7C3AED 50%, #EC4899 100%)',
    textOnCard: '#ffffff',
    components: ['Sticky nav', 'CTA hero', 'Feature bento', 'Pricing table', 'FAQ accordion', 'Footer'],
  },
  {
    id: 'market',
    name: 'Market Store',
    category: 'ecommerce',
    desc: 'A clean e-commerce storefront with editorial product photography layout and minimal UI.',
    tags: ['Shop', 'Clean', 'Editorial'],
    palette: {
      primary: { name: 'Ceramic', hex: '#F5F0E8' },
      secondary: { name: 'Espresso', hex: '#2C1810' },
      background: { name: 'Parchment', hex: '#FAF8F3' },
      text: { name: 'Dark Brown', hex: '#1A0F0A' },
      accent: { name: 'Terracotta', hex: '#D4633A' }
    },
    fonts: {
      display: 'DM Serif Display',
      body: 'Nunito Sans',
      use: "Serif display brings warmth and trust, while Nunito Sans ensures legibility at small product-detail sizes."
    },
    gradient: 'linear-gradient(135deg, #F5F0E8 0%, #E8DDD0 50%, #D4C5B0 100%)',
    textOnCard: '#2C1810',
    components: ['Product grid', 'Filter sidebar', 'Product detail', 'Cart drawer', 'Checkout flow'],
  },
  {
    id: 'zenith',
    name: 'Zenith Agency',
    category: 'landing',
    desc: 'A sophisticated agency landing page with asymmetric layouts and bold accent typography.',
    tags: ['Agency', 'Bold', 'Luxury'],
    palette: {
      primary: { name: 'Jet', hex: '#1C1C1E' },
      secondary: { name: 'Gold', hex: '#D4AF37' },
      background: { name: 'Off-White', hex: '#F8F8F6' },
      text: { name: 'Charcoal', hex: '#2D2D2D' },
      accent: { name: 'Gold Shimmer', hex: '#F0D060' }
    },
    fonts: {
      display: 'Cormorant Garamond',
      body: 'Neue Haas Grotesk',
      use: "A high-contrast pairing: Garamond's elegance versus grotesque's utility signals premium craft."
    },
    gradient: 'linear-gradient(135deg, #1C1C1E 0%, #2D2D2D 60%, #3D3020 100%)',
    textOnCard: '#F8F8F6',
    components: ['Nav with logo', 'Split hero', 'Services grid', 'Team section', 'Process timeline', 'Contact'],
  },
  {
    id: 'sage',
    name: 'Sage Blog',
    category: 'portfolio',
    desc: 'An editorial blog template with magazine-style layout, pull quotes, and reading progress.',
    tags: ['Blog', 'Editorial', 'Typography'],
    palette: {
      primary: { name: 'Forest', hex: '#2D4A3E' },
      secondary: { name: 'Sage', hex: '#7DB5A0' },
      background: { name: 'Cream', hex: '#FDF9F3' },
      text: { name: 'Ink', hex: '#1A2420' },
      accent: { name: 'Rust', hex: '#C84B31' }
    },
    fonts: {
      display: 'Libre Baskerville',
      body: 'Source Sans Pro',
      use: "Baskerville's editorial warmth pairs beautifully with Source Sans for comfortable long-form reading."
    },
    gradient: 'linear-gradient(135deg, #2D4A3E 0%, #3A5C4F 50%, #4A7A68 100%)',
    textOnCard: '#FDF9F3',
    components: ['Reading progress bar', 'Article grid', 'Tag filter', 'Pull quote', 'Author bio', 'Newsletter'],
  },
  {
    id: 'fusion',
    name: 'Fusion Startup',
    category: 'landing',
    desc: 'A Y Combinator-style startup page with metric highlights and investor-friendly layout.',
    tags: ['Startup', 'Metrics', 'Clean'],
    palette: {
      primary: { name: 'Electric Blue', hex: '#0EA5E9' },
      secondary: { name: 'Navy', hex: '#0C4A6E' },
      background: { name: 'White', hex: '#FFFFFF' },
      text: { name: 'Dark Navy', hex: '#0C1929' },
      accent: { name: 'Lime', hex: '#84CC16' }
    },
    fonts: {
      display: 'Plus Jakarta Sans',
      body: 'Geist',
      use: "Both fonts share a modern tech DNA—Jakarta for personality, Geist for developer-friendly legibility."
    },
    gradient: 'linear-gradient(135deg, #0EA5E9 0%, #0C4A6E 60%, #0C1929 100%)',
    textOnCard: '#FFFFFF',
    components: ['Product nav', 'Hero with video', 'Metrics bar', 'Feature table', 'Testimonials', 'Waitlist form'],
  },
  {
    id: 'petal',
    name: 'Petal Boutique',
    category: 'ecommerce',
    desc: 'A soft, feminine boutique template with pastel tones and delicate micro-interactions.',
    tags: ['Boutique', 'Soft', 'Elegant'],
    palette: {
      primary: { name: 'Rose Quartz', hex: '#F4C2C2' },
      secondary: { name: 'Dusty Mauve', hex: '#B5838D' },
      background: { name: 'Blush', hex: '#FFF0F0' },
      text: { name: 'Plum', hex: '#3D1A24' },
      accent: { name: 'Berry', hex: '#8B2252' }
    },
    fonts: {
      display: 'Gilda Display',
      body: 'Jost',
      use: "Gilda's tall, delicate letterforms evoke haute couture; Jost provides accessible modern body text."
    },
    gradient: 'linear-gradient(135deg, #F4C2C2 0%, #E8A0A8 40%, #B5838D 100%)',
    textOnCard: '#3D1A24',
    components: ['Category nav', 'Lookbook grid', 'Quick-add to cart', 'Size guide modal', 'Wishlist', 'Reviews'],
  },
  {
    id: 'circuit',
    name: 'Circuit Developer',
    category: 'portfolio',
    desc: 'A terminal-inspired developer portfolio with monospace aesthetics and code snippets.',
    tags: ['Dev', 'Dark', 'Code'],
    palette: {
      primary: { name: 'Terminal Green', hex: '#00FF41' },
      secondary: { name: 'Cyan', hex: '#00BFFF' },
      background: { name: 'Void', hex: '#0D1117' },
      text: { name: 'Ghost White', hex: '#E6EDF3' },
      accent: { name: 'Warning', hex: '#F0A500' }
    },
    fonts: {
      display: 'JetBrains Mono',
      body: 'Fira Code',
      use: "Full monospace stack creates total immersion in the terminal aesthetic—every letter is a signal."
    },
    gradient: 'linear-gradient(135deg, #0D1117 0%, #0D2137 50%, #001A0D 100%)',
    textOnCard: '#E6EDF3',
    components: ['ASCII art header', 'CLI-style nav', 'Project cards', 'Skills graph', 'Github activity', 'Contact terminal'],
  },
  {
    id: 'atlas',
    name: 'Atlas Travel',
    category: 'landing',
    desc: 'An immersive travel agency template with full-screen imagery and destination cards.',
    tags: ['Travel', 'Immersive', 'Visual'],
    palette: {
      primary: { name: 'Sky', hex: '#0369A1' },
      secondary: { name: 'Lagoon', hex: '#0891B2' },
      background: { name: 'Cloud', hex: '#F0F9FF' },
      text: { name: 'Ocean', hex: '#082F49' },
      accent: { name: 'Sunset', hex: '#F97316' }
    },
    fonts: {
      display: 'Fraunces',
      body: 'Outfit',
      use: "Fraunces' optical variable design adapts beautifully across hero sizes; Outfit stays friendly and open."
    },
    gradient: 'linear-gradient(135deg, #0369A1 0%, #0891B2 40%, #06B6D4 100%)',
    textOnCard: '#FFFFFF',
    components: ['Map hero', 'Destination cards', 'Filter tabs', 'Trip planner', 'Gallery masonry', 'Booking form'],
  },
  {
    id: 'tempo',
    name: 'Tempo Music',
    category: 'landing',
    desc: 'A music streaming platform template with dark vibes, waveform visuals, and playlist UI.',
    tags: ['Music', 'Dark', 'Dynamic'],
    palette: {
      primary: { name: 'Bass Black', hex: '#080808' },
      secondary: { name: 'Electric Purple', hex: '#8B5CF6' },
      background: { name: 'Carbon', hex: '#111111' },
      text: { name: 'Platinum', hex: '#E5E5E5' },
      accent: { name: 'Hot Pink', hex: '#EC4899' }
    },
    fonts: {
      display: 'Bebas Neue',
      body: 'Urbanist',
      use: "Bebas Neue's condensed impact brings energy and drama; Urbanist keeps the rhythm smooth in text."
    },
    gradient: 'linear-gradient(135deg, #080808 0%, #1A0A2E 50%, #2D0A1E 100%)',
    textOnCard: '#E5E5E5',
    components: ['Player bar', 'Featured hero', 'Playlist grid', 'Artist card', 'Waveform visualizer', 'Genre filter'],
  },
  {
    id: 'verdant',
    name: 'Verdant Wellness',
    category: 'landing',
    desc: 'A calming wellness brand template with organic shapes, earth tones, and mindful spacing.',
    tags: ['Wellness', 'Organic', 'Calm'],
    palette: {
      primary: { name: 'Moss', hex: '#4A7C59' },
      secondary: { name: 'Clay', hex: '#C4956A' },
      background: { name: 'Linen', hex: '#F7F3EE' },
      text: { name: 'Earth', hex: '#2A2118' },
      accent: { name: 'Sage', hex: '#87A878' }
    },
    fonts: {
      display: 'Lora',
      body: 'Karla',
      use: "Lora's warm serifs evoke natural, timeless qualities while Karla provides clear, grounded body text."
    },
    gradient: 'linear-gradient(135deg, #4A7C59 0%, #5A9468 40%, #87A878 100%)',
    textOnCard: '#FFFFFF',
    components: ['Organic hero', 'Service cards', 'Testimonial carousel', 'Blog preview', 'Newsletter', 'Footer map'],
  },
  {
    id: 'prism',
    name: 'Prism App',
    category: 'ecommerce',
    desc: 'A mobile app product page with 3D device mockups, feature screens, and app store CTAs.',
    tags: ['App', 'Product', '3D'],
    palette: {
      primary: { name: 'Ultra Blue', hex: '#2563EB' },
      secondary: { name: 'Cobalt', hex: '#1D4ED8' },
      background: { name: 'Ice', hex: '#EFF6FF' },
      text: { name: 'Dark Blue', hex: '#1E3A5F' },
      accent: { name: 'Electric', hex: '#38BDF8' }
    },
    fonts: {
      display: 'Bricolage Grotesque',
      body: 'Albert Sans',
      use: "Bricolage's variable optical sizes enable expressive headlines; Albert Sans is clean and app-native."
    },
    gradient: 'linear-gradient(135deg, #2563EB 0%, #1D4ED8 50%, #1E40AF 100%)',
    textOnCard: '#FFFFFF',
    components: ['App hero with mockup', 'Feature carousel', 'Comparison table', 'Screenshot gallery', 'Download CTAs'],
  }
];

// ─── STATE ────────────────────────────────────
let currentFilter = 'all';
let previousPage = 'home';

// ─── INIT ─────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderCards('cardsGrid');
  renderCards('allCardsGrid');
  setupFilters();
  setupTheme();
  setupHamburger();
  setupNavLinks();
});

// ─── RENDER CARDS ─────────────────────────────
function renderCards(gridId) {
  const grid = document.getElementById(gridId);
  if (!grid) return;

  const filtered = currentFilter === 'all'
    ? templates
    : templates.filter(t => t.category === currentFilter);

  grid.innerHTML = '';

  filtered.forEach((t, i) => {
    const card = document.createElement('div');
    card.className = 'template-card';
    card.style.animationDelay = `${i * 0.05}s`;
    card.style.animation = 'fadeUp 0.4s ease both';
    card.innerHTML = `
      <div class="card-preview" style="background:${t.gradient}">
        <div class="card-preview-inner">
          ${buildCardPreviewMockup(t)}
        </div>
      </div>
      <div class="card-meta">
        <div class="card-category">${t.category}</div>
        <h3 class="card-name">${t.name}</h3>
        <p class="card-desc">${t.desc}</p>
        <div class="card-footer">
          <div class="card-tags">
            ${t.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
          </div>
          <button class="card-btn" onclick="openTemplate('${t.id}')">View →</button>
        </div>
      </div>
    `;
    card.addEventListener('click', (e) => {
      if (!e.target.classList.contains('card-btn')) {
        openTemplate(t.id);
      }
    });
    grid.appendChild(card);
  });
}

function buildCardPreviewMockup(t) {
  return `
    <div style="
      width:100%;height:100%;
      display:flex;flex-direction:column;gap:8px;
      padding:8px;
    ">
      <div style="height:20px;background:rgba(255,255,255,0.12);border-radius:4px;"></div>
      <div style="flex:1;display:grid;grid-template-columns:1fr 1fr;grid-template-rows:1fr 1fr;gap:6px;">
        <div style="background:rgba(255,255,255,0.15);border-radius:6px;"></div>
        <div style="background:rgba(255,255,255,0.08);border-radius:6px;"></div>
        <div style="background:rgba(255,255,255,0.08);border-radius:6px;"></div>
        <div style="background:rgba(255,255,255,0.15);border-radius:6px;"></div>
      </div>
      <div style="height:28px;background:rgba(255,255,255,0.25);border-radius:6px;width:60%;"></div>
    </div>
  `;
}

// ─── OPEN TEMPLATE ────────────────────────────
function openTemplate(id) {
  const t = templates.find(t => t.id === id);
  if (!t) return;

  previousPage = document.querySelector('.page.active')?.id?.replace('page-', '') || 'home';

  const content = document.getElementById('detailContent');
  content.innerHTML = buildDetailHTML(t);
  showPage('detail');
}

function buildDetailHTML(t) {
  const paletteEntries = Object.entries(t.palette);
  const isLight = isLightColor(t.palette.background.hex);

  return `
    <div class="detail-hero">
      <div class="detail-preview" style="background:${t.gradient}">
        <div style="width:100%;height:100%;padding:32px;display:flex;flex-direction:column;gap:16px;justify-content:flex-end;">
          <div style="height:32px;background:rgba(255,255,255,0.15);border-radius:8px;width:70%;"></div>
          <div style="height:16px;background:rgba(255,255,255,0.1);border-radius:6px;width:90%;"></div>
          <div style="height:16px;background:rgba(255,255,255,0.1);border-radius:6px;width:60%;"></div>
          <div style="display:flex;gap:12px;margin-top:8px;">
            <div style="height:36px;width:120px;background:rgba(255,255,255,0.3);border-radius:8px;"></div>
            <div style="height:36px;width:100px;border:1px solid rgba(255,255,255,0.3);border-radius:8px;"></div>
          </div>
        </div>
      </div>
      <div class="detail-info">
        <div class="detail-cat">${t.category}</div>
        <h1 class="detail-title">${t.name}</h1>
        <p class="detail-desc">${t.desc}</p>
        <div style="display:flex;gap:8px;flex-wrap:wrap;">
          ${t.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
        </div>
      </div>
    </div>

    <div class="ds-content">

      <!-- COLOR PALETTE -->
      <div class="ds-section">
        <h2 class="ds-heading">Color Palette</h2>
        <div class="ds-colors">
          ${paletteEntries.map(([role, c]) => `
            <div class="color-swatch" style="--c:${c.hex}">
              <span class="swatch-name">${c.name}</span>
              <span class="swatch-val">${c.hex}</span>
              <span style="display:block;padding:0 12px 8px;font-size:0.7rem;color:var(--ink-faint);text-transform:capitalize;">${role}</span>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- TYPOGRAPHY -->
      <div class="ds-section">
        <h2 class="ds-heading">Typography</h2>
        <p style="color:var(--ink-muted);margin-bottom:24px;font-size:0.9rem;">${t.fonts.use}</p>
        <div class="ds-type">
          <div class="type-example">
            <div style="font-size:0.72rem;font-weight:600;text-transform:uppercase;letter-spacing:0.08em;color:var(--ink-faint);margin-bottom:8px;">Display — ${t.fonts.display}</div>
            <div class="h1-ex" style="font-family:var(--font-display)">H1 — The Quick Brown Fox</div>
          </div>
          <div class="type-example">
            <div style="font-size:0.72rem;font-weight:600;text-transform:uppercase;letter-spacing:0.08em;color:var(--ink-faint);margin-bottom:8px;">H2 Heading</div>
            <div class="h2-ex">Section Heading Example</div>
          </div>
          <div class="type-example">
            <div style="font-size:0.72rem;font-weight:600;text-transform:uppercase;letter-spacing:0.08em;color:var(--ink-faint);margin-bottom:8px;">H3 Heading</div>
            <div class="h3-ex">Card or Sub-Section Title</div>
          </div>
          <div class="type-example">
            <div style="font-size:0.72rem;font-weight:600;text-transform:uppercase;letter-spacing:0.08em;color:var(--ink-faint);margin-bottom:8px;">Body — ${t.fonts.body}</div>
            <div class="body-ex">This is the body text style used across the template. At 16px with a 1.7 line-height, it ensures comfortable reading for all users across all screen sizes. It maintains proper rhythm and hierarchy throughout every layout.</div>
          </div>
          <div class="type-example">
            <div style="font-size:0.72rem;font-weight:600;text-transform:uppercase;letter-spacing:0.08em;color:var(--ink-faint);margin-bottom:8px;">Mono — for code and labels</div>
            <div class="mono-ex">font-size: 16px · line-height: 1.7 · letter-spacing: -0.02em</div>
          </div>
        </div>
      </div>

      <!-- SPACING -->
      <div class="ds-section">
        <h2 class="ds-heading">Spacing System</h2>
        <p style="color:var(--ink-muted);margin-bottom:24px;font-size:0.9rem;">Built on an 8px base unit. All spacing values are multiples of 4px, ensuring consistent visual rhythm.</p>
        <div class="ds-spacing">
          ${[
            { size: 4, label: 'xs — micro gaps, icon spacing' },
            { size: 8, label: 'sm — tight internal padding' },
            { size: 16, label: 'md — component padding' },
            { size: 24, label: 'lg — between related elements' },
            { size: 40, label: 'xl — section separation' },
            { size: 64, label: '2xl — major layout gaps' },
            { size: 96, label: '3xl — page section padding' },
          ].map(s => `
            <div class="sp-row">
              <div class="sp-box" style="width:${Math.min(s.size, 96)}px;height:${Math.min(s.size/2, 40)}px;background:${t.palette.primary.hex};border-radius:4px;opacity:0.7;flex-shrink:0;min-width:8px;min-height:8px;"></div>
              <span>${s.size}px — ${s.label}</span>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- COMPONENTS -->
      <div class="ds-section">
        <h2 class="ds-heading">Components</h2>

        <div class="ds-components">
          <div class="comp-group">
            <h3>Buttons</h3>
            <div class="comp-row">
              <button class="btn" style="background:${t.palette.primary.hex};color:${t.textOnCard};">Primary</button>
              <button class="btn btn-secondary">Secondary</button>
              <button class="btn btn-ghost">Ghost</button>
            </div>
          </div>

          <div class="comp-group">
            <h3>Form Inputs</h3>
            <div class="comp-col">
              <input class="ds-input" type="text" placeholder="Text input" style="--accent:${t.palette.primary.hex}" />
              <input class="ds-input" type="email" placeholder="Email input" style="--accent:${t.palette.primary.hex}" />
              <select class="ds-input" style="--accent:${t.palette.primary.hex}">
                <option>Select an option</option>
                <option>Option A</option>
                <option>Option B</option>
              </select>
            </div>
          </div>

          <div class="comp-group">
            <h3>Card</h3>
            <div class="ds-card-demo">
              <div class="demo-card">
                <div class="demo-card-img" style="background:${t.gradient};opacity:1;"></div>
                <div class="demo-card-body">
                  <h4>${t.name}</h4>
                  <p>${t.desc.substring(0, 80)}...</p>
                  <button class="btn" style="background:${t.palette.primary.hex};color:${t.textOnCard};font-size:0.8rem;padding:8px 16px;">Explore</button>
                </div>
              </div>
            </div>
          </div>

          <div class="comp-group full">
            <h3>Navbar</h3>
            <div class="ds-navbar-demo" style="background:${t.palette.background.hex};border-color:${hexWithAlpha(t.palette.text.hex, 0.12)};">
              <span class="demo-logo" style="color:${t.palette.text.hex}">${t.name.split(' ')[0]}</span>
              <div class="demo-nav-links">
                <span class="demo-link active" style="color:${t.palette.text.hex}">Home</span>
                <span class="demo-link" style="color:${hexWithAlpha(t.palette.text.hex, 0.5)}">Work</span>
                <span class="demo-link" style="color:${hexWithAlpha(t.palette.text.hex, 0.5)}">About</span>
              </div>
              <button class="btn" style="background:${t.palette.primary.hex};color:${t.textOnCard};font-size:0.8rem;padding:8px 20px;">Contact</button>
            </div>
          </div>

          <div class="comp-group full">
            <h3>Included Components</h3>
            <div style="display:flex;gap:10px;flex-wrap:wrap;">
              ${t.components.map(c => `
                <div style="padding:8px 16px;background:var(--surface-2);border:1px solid var(--border);border-radius:100px;font-size:0.82rem;color:var(--ink-muted);">
                  ✓ ${c}
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </div>

    </div>
  `;
}

// ─── FILTER ───────────────────────────────────
function setupFilters() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      currentFilter = btn.dataset.filter;
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll(`[data-filter="${currentFilter}"]`).forEach(b => b.classList.add('active'));
      renderCards('cardsGrid');
      renderCards('allCardsGrid');
    });
  });
}

// ─── NAVIGATION ───────────────────────────────
function showPage(name) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const target = document.getElementById(`page-${name}`);
  if (target) {
    target.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  document.querySelectorAll('.nav-link').forEach(l => {
    l.classList.toggle('active', l.dataset.page === name);
  });

  // Close mobile menu
  document.getElementById('navLinks').classList.remove('open');
  document.getElementById('hamburger').classList.remove('open');
  return false;
}

function goBack() {
  showPage(previousPage || 'templates');
}

function setupNavLinks() {
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const page = link.dataset.page;
      if (page) showPage(page);
    });
  });
}

// ─── THEME ────────────────────────────────────
function setupTheme() {
  const toggle = document.getElementById('themeToggle');
  const html = document.documentElement;
  const saved = localStorage.getItem('dv-theme') || 'light';
  html.setAttribute('data-theme', saved);

  toggle.addEventListener('click', () => {
    const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    localStorage.setItem('dv-theme', next);
  });
}

// ─── HAMBURGER ────────────────────────────────
function setupHamburger() {
  const btn = document.getElementById('hamburger');
  const nav = document.getElementById('navLinks');
  btn.addEventListener('click', () => {
    nav.classList.toggle('open');
    btn.classList.toggle('open');
  });
}

// ─── SCROLL NAV ───────────────────────────────
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  nav.style.boxShadow = window.scrollY > 20
    ? 'var(--shadow-md)'
    : 'none';
});

// ─── HELPERS ─────────────────────────────────
function isLightColor(hex) {
  const r = parseInt(hex.slice(1,3), 16);
  const g = parseInt(hex.slice(3,5), 16);
  const b = parseInt(hex.slice(5,7), 16);
  return (r * 299 + g * 587 + b * 114) / 1000 > 128;
}

function hexWithAlpha(hex, alpha) {
  const r = parseInt(hex.slice(1,3), 16);
  const g = parseInt(hex.slice(3,5), 16);
  const b = parseInt(hex.slice(5,7), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}
