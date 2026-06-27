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
    description: "Complete bathroom retiling at VMCH St. Catherine's Aged Care Residence. Wall and floor tiling with non-slip finishes selected for safety and a clean, modern look.",
    images: Array.from({ length: 8 }, (_, i) => `/images/portfolio/vmch-st-catherines-aged-care-residence/photo-${i + 1}.webp`),
  },
  {
    name: "MOORABBIN AIRPORT",
    category: "Commercial",
    description: "Bathroom tiling at Moorabbin Airport. Durable wall and floor tiles installed in the airport bathroom facilities with attention to detail and clean finishes.",
    images: Array.from({ length: 4 }, (_, i) => `/images/portfolio/moorabbin-airport/photo-${i + 1}.webp`),
  },
  {
    name: "D.S. AITKEN RESERVE",
    category: "Public Space",
    description: "Floor and wall tiling for the bathroom amenities at D.S. Aitken Reserve in Victoria. Quality porcelain tiles with clean finishes throughout the public washroom facilities.",
    images: Array.from({ length: 19 }, (_, i) => `/images/portfolio/ds-aitken-reserve/photo-${i + 1}.webp`).filter((_, i) => i !== 15),
  },
  {
    name: "PREMIUM RESIDENCES",
    category: "Residential",
    description: "A collection of residential tiling work across private homes in Melbourne. Bathroom renovations, kitchen splashbacks and feature walls with a focus on clean finishes and quality workmanship.",
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
