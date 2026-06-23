export interface Project {
  name: string;
  slug: string;
  category: string;
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
    images: Array.from({ length: 4 }, (_, i) => `/images/portfolio/obrien-real-estate-bentleigh/photo-${i + 1}.webp`),
  },
  {
    name: "VMCH ST. CATHERINE'S AGED CARE RESIDENCE",
    category: "Aged Care",
    images: Array.from({ length: 8 }, (_, i) => `/images/portfolio/vmch-st-catherines-aged-care-residence/photo-${i + 1}.webp`),
  },
  {
    name: "MOORABBIN AIRPORT",
    category: "Commercial",
    images: Array.from({ length: 4 }, (_, i) => `/images/portfolio/moorabbin-airport/photo-${i + 1}.webp`),
  },
  {
    name: "D.S. AITKEN RESERVE",
    category: "Public Space",
    images: Array.from({ length: 19 }, (_, i) => `/images/portfolio/ds-aitken-reserve/photo-${i + 1}.webp`),
  },
  {
    name: "PREMIUM RESIDENCES",
    category: "Residential",
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
