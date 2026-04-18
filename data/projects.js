export const projects = [
  {
    slug: 'lumiere',
    title: 'Lumière',
    titleSub: 'Skincare',
    subtitle: 'Skincare Brand Identity & Digital Experience',
    year: '2025',
    tags: ['UI/UX', 'Branding'],
    color: '#c9a96e',
    meta: {
      type: 'UI/UX · Branding',
      year: '2025',
      platform: 'Website',
      tools: 'Figma · HTML/CSS',
      role: 'UI/UX Designer\nBrand Designer',
      duration: '4 Weeks\nSolo Project',
      deliverables: 'Brand Identity\nLanding Page · Design System',
      status: 'Completed\nPortfolio Work',
    },
    description: 'An end-to-end brand identity and landing page design case study for a fictional premium skincare UMKM — crafted to build trust and drive conversions.',
    sections: [
      {
        num: '01 — Overview',
        heading: 'The Problem & The Brief',
        body: `The local skincare market is oversaturated with brands that look identical — amateurish websites, unclear product information, and no compelling reason to trust. Lumière was created to explore a different direction: a premium skincare landing page for a fictional UMKM that feels warm, credible, and conversion-focused without sacrificing sophistication.

This is a self-initiated case study. The brief I set for myself: design a complete brand identity and landing page for a fictional local skincare brand targeting Indonesian women aged 22–35 — helping the brand communicate quality and earn trust from the very first scroll.`,
        quote: '"How might we design a local skincare brand\'s landing page that feels premium and trustworthy — one that converts visitors into buyers before they leave the page?"',
      },
      {
        num: '02 — Research & User Persona',
        heading: 'Understanding the User',
        body: 'I conducted secondary research by analyzing local skincare brand websites and reading marketplace reviews to identify pain points. Key findings: potential buyers distrust brands with unprofessional-looking websites, lose confidence when product information is vague, and make purchase decisions heavily influenced by visual credibility and social proof.',
        personas: [
          {
            name: 'Ayu, 27',
            role: 'Marketing Staff · Jakarta',
            quote: '"Kalau websitenya jelek, saya langsung skip. Takut produknya juga nggak serius."',
            tags: ['Ingredient-conscious', 'Busy schedule', 'Instagram user'],
          },
          {
            name: 'Rara, 24',
            role: 'Freelancer · Bandung',
            quote: '"Saya mau beli lewat WA, tapi perlu lihat dulu reviewnya — beneran works nggak?"',
            tags: ['Budget-aware', 'Prefers WhatsApp order', 'Review-driven'],
          },
        ],
        insight: 'Both personas share a core need: visual trust and clear information. They decide whether to buy based on how credible the brand looks — before they even read a single product description.',
      },
      {
        num: '03 — Design Process',
        heading: 'From Research to High-Fidelity',
        body: 'I followed a structured UX process — starting from information architecture and working toward a fully polished, interactive landing page. Each step informed the next, ensuring every design decision was grounded in user needs.',
        steps: [
          { num: '01', label: 'Define', desc: 'HMW statement, sitemap, user flow' },
          { num: '02', label: 'Research', desc: 'Competitive audit, user personas, pain points' },
          { num: '03', label: 'Design', desc: 'Visual direction, lo-fi wireframe, design system' },
          { num: '04', label: 'Build', desc: 'Hi-fi mockup, HTML/CSS implementation' },
        ],
        visual: 'The visual direction was defined early: "Warm Editorial Luxury" — inspired by Aesop and Tatcha. A dark espresso palette with warm gold accents, paired with Cormorant Garamond for display type and DM Sans for body copy.',
        image: { src: '/images/lumiere/wireframe.webp', caption: 'Lumière Lo-Fi Wireframe' },
      },
      {
        num: '04 — Final Design',
        heading: 'The Final Landing Page',
        body: 'The final design is a single-page website with 6 conversion-focused sections: Hero, About, Products, Key Ingredients, Testimonials, and CTA. Each section was designed with a specific role in the customer journey — from building awareness to triggering action.',
        images: [
          { src: '/images/lumiere/homescreen.webp', caption: 'Lumière Landing Page — Hero & About Section' },
          { src: '/images/lumiere/product.webp', caption: 'Lumière Product Section' },
          { src: '/images/lumiere/story.webp', caption: 'Lumière Testimonials & CTA Section' },
        ],
        typography: 'Typography plays a central role: Cormorant Garamond for editorial display headings creates emotional warmth and luxury, while DM Sans keeps body text and UI elements clean and legible.',
      },
      {
        num: '05 — Results & Reflection',
        heading: 'What I Learned',
        stats: [
          { value: '6', label: 'Page Sections' },
          { value: '1', label: 'Complete Design System' },
          { value: '4wk', label: 'End-to-End Process' },
        ],
        body: 'This project pushed me to think beyond aesthetics. The biggest challenge was making every design decision intentional — from why the hero uses a dark background (to differentiate from competitors) to why the CTA is WhatsApp instead of a form (to reduce conversion friction for UMKM buyers).',
        learnings: [
          { num: '1', title: 'Conversion is a design problem', desc: 'Every section has one job. Understanding the customer journey — from trust-building to purchase — shaped the entire page structure.' },
          { num: '2', title: 'Brand identity drives UI decisions', desc: 'Defining the visual direction and design tokens first made every subsequent decision faster and more consistent.' },
          { num: '3', title: 'Trust is designed, not assumed', desc: 'Small details — rating numbers prominently placed, ingredient transparency, WhatsApp CTA — build more trust than polished visuals alone.' },
        ],
      },
    ],
    next: { slug: 'safara', title: 'Safara', subtitle: 'Umroh Travel Brand & Website' },
  },
  {
    slug: 'safara',
    title: 'Safara',
    titleSub: null,
    subtitle: 'Umroh Travel Brand & Website',
    year: '2024',
    tags: ['Branding', 'Web Dev', 'Next.js'],
    color: '#8aad8a',
    description: 'Safara adalah brand travel umroh yang dibangun dari strategi, visual identity, social media, hingga website Next.js.',
    sections: [],
    next: { slug: 'peau-ui', title: 'Peau UI', subtitle: 'Skincare-Themed Figma UI Kit' },
  },
  {
    slug: 'peau-ui',
    title: 'Peau UI',
    titleSub: null,
    subtitle: 'Skincare-Themed Figma UI Kit',
    year: '2024',
    tags: ['UI Design', 'Figma', 'Design System'],
    color: '#c4a882',
    description: 'Figma UI kit bertema skincare dengan estetika Soft Luxury, ditargetkan untuk dijual di Gumroad dan UI8.',
    sections: [],
    next: { slug: 'lumiere', title: 'Lumière', subtitle: 'Skincare Brand Identity & Digital Experience' },
  },
]

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug) || null
}
