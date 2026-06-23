export interface Project {
  name: string;
  slug: string;
  category: string;
  description: string;
  images: string[];
}

function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/\./g, '')
    .replace(/'/g, '')
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

const rawProjects: Omit<Project, 'slug'>[] = [
  {
    name: "O'BRIEN REAL ESTATE BENTLEIGH",
    category: "Education",
    description: "A complete commercial tile installation for a modern education and retail space in Bentleigh. Large format porcelain floors throughout the ground floor with careful attention to detail in the entry and common areas.",
    images: Array.from({ length: 4 }, (_, i) => `/images/portfolio/obrien-real-estate-bentleigh/photo-${i + 1}.webp`),
  },
  {
    name: "VMCH ST. CATHERINE'S AGED CARE RESIDENCE",
    category: "Aged Care",
    description: "Warm and welcoming aged care residence with quality wall and floor tiling throughout the common areas and private rooms. Non slip floor tiles were selected for safety without compromising on the clean modern look.",
    images: Array.from({ length: 8 }, (_, i) => `/images/portfolio/vmch-st-catherines-aged-care-residence/photo-${i + 1}.webp`),
  },
  {
    name: "MOORABBIN AIRPORT",
    category: "Commercial",
    description: "Durable commercial tiling for the Moorabbin Airport terminal and hangar facilities. High traffic rated porcelain tiles installed across the main concourse with precision cuts around columns and entry points.",
    images: Array.from({ length: 4 }, (_, i) => `/images/portfolio/moorabbin-airport/photo-${i + 1}.webp`),
  },
  {
    name: "D.S. AITKEN RESERVE",
    category: "Public Space",
    description: "Public pavilion and amenities block at D.S. Aitken Reserve in Bentleigh. A mix of interior wall and floor tiling with feature tile accents that bring warmth to the community space.",
    images: Array.from({ length: 19 }, (_, i) => `/images/portfolio/ds-aitken-reserve/photo-${i + 1}.webp`).filter((_, i) => i !== 15),
  },
  {
    name: "PREMIUM RESIDENCES",
    category: "Residential",
    description: "Luxury residential project featuring large format floor tiles through open plan living areas and custom bathroom wall tiling. Herringbone patterns and feature niches add a tailored finish to each space.",
    images: Array.from({ length: 13 }, (_, i) => `/images/portfolio/premium-residences/photo-${i + 1}.webp`),
  },
];

export const projects: Project[] = rawProjects.map((p) => ({
  ...p,
  slug: slugify(p.name),
}));

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
