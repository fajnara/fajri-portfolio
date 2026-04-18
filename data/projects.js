export const projects = [
  {
    slug: 'lumiere',
    title: 'Lumière',
    subtitle: 'Skincare Brand Identity & Digital Experience',
    year: '2024',
    tags: ['Branding', 'UI/UX', 'Copywriting'],
    coverImage: '/images/lumiere/cover.jpg',
    color: '#c9a96e',
    description:
      'Lumière adalah brand skincare lokal yang dibangun dari nol — mulai dari strategi brand, visual identity, landing page, hingga prompting AI untuk editorial photography.',
    sections: [
      {
        type: 'overview',
        heading: 'Overview',
        body: 'Brand ini dirancang dengan estetika warm luxury — menggabungkan elemen volcanic stone, soft light, dan kemasan minimalis untuk positioning di segmen premium lokal.',
      },
      {
        type: 'image',
        src: '/images/lumiere/moodboard.jpg',
        caption: 'Moodboard & color palette',
      },
      {
        type: 'text',
        heading: 'Brand Strategy',
        body: 'Target audience: perempuan 22–35 tahun, urban, skin-conscious. Positioning: effective yet sensorial — bukan sekadar skincare, tapi ritual harian.',
      },
      {
        type: 'image',
        src: '/images/lumiere/mockup.jpg',
        caption: 'Laptop mockup — warm dark volcanic stone environment',
      },
      {
        type: 'text',
        heading: 'Landing Page & Copywriting',
        body: 'Audit dan penulisan ulang copy "Our Story" dengan pendekatan documentary-style — personal, jujur, dan emotionally resonant.',
      },
    ],
  },
  {
    slug: 'safara',
    title: 'Safara',
    subtitle: 'Umroh Travel Brand & Website',
    year: '2024',
    tags: ['Branding', 'Web Dev', 'Next.js'],
    coverImage: '/images/safara/cover.jpg',
    color: '#8aad8a',
    description:
      'Safara adalah brand travel umroh yang dibangun dari strategi, visual identity, social media, hingga website Next.js.',
    sections: [
      {
        type: 'overview',
        heading: 'Overview',
        body: 'Brand dibangun dari nol dengan pendekatan trust-first — visual yang clean dan copy yang tenang untuk audience yang sedang merencanakan perjalanan ibadah.',
      },
    ],
  },
  {
    slug: 'peau-ui',
    title: 'Peau UI',
    subtitle: 'Skincare-Themed Figma UI Kit',
    year: '2024',
    tags: ['UI Design', 'Figma', 'Design System'],
    coverImage: '/images/peau-ui/cover.jpg',
    color: '#c4a882',
    description:
      'Figma UI kit bertema skincare dengan estetika Soft Luxury, ditargetkan untuk dijual di Gumroad dan UI8.',
    sections: [
      {
        type: 'overview',
        heading: 'Overview',
        body: 'Peau UI dirancang sebagai kit yang opinionated — bukan generic UI kit, tapi punya karakter visual kuat yang langsung bisa dipakai untuk brand skincare premium.',
      },
    ],
  },
]

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug) || null
}
