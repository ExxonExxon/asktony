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
    name: "ST. PETER'S COLLEGE",
    category: "Education",
    images: [],
  },
  {
    name: "VMCH ST. CATHERINE'S AGED CARE RESIDENCE",
    category: "Aged Care",
    images: [],
  },
  {
    name: "MOORABBIN AIRPORT",
    category: "Commercial",
    images: [],
  },
  {
    name: "D.S. AITKEN RESERVE",
    category: "Public Space",
    images: Array.from({ length: 19 }, (_, i) => `/images/portfolio/ds-aitken-reserve/photo-${i + 1}.webp`),
  },
  {
    name: "FREDDY'S PIZZA",
    category: "Hospitality",
    images: [],
  },
];

export const projects: Project[] = rawProjects.map((p) => ({
  ...p,
  slug: slugify(p.name),
}));

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
