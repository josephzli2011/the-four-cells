/**
 * Single source of truth for all site content.
 * Values marked SOURCE were extracted verbatim from the live Google Sites build
 * of thefourcells.com. Anything marked PENDING still needs the original copy.
 */

export const brand = {
  name: 'thefourcells',
  // SOURCE: footer h3
  mission:
    'thefourcells is an educational platform led by students and is dedicated to offering an engaging learning experience. Through academic resources, including articles, quizzes, and magazines, we help students grow in the fields of STEM.',
  tagline: 'Student-led STEM education.',
  copyright: 'Copyright © 2026 thefourcells.',
  url: 'https://www.thefourcells.com',
} as const;

export type Course = {
  slug: string;
  title: string;
  blurb: string;
  group: 'Science' | 'Mathematics' | 'Engineering';
  /** Inline SVG glyph id rendered by <CourseIcon/> */
  icon: string;
  inNav: boolean;
  lessons: Lesson[];
};

export type Lesson = {
  slug: string;
  title: string;
  blurb: string;
  kind: 'Interactive' | 'Article' | 'Quiz' | 'Explainer';
  /** Set when we have a real interactive island for it */
  island?: 'periodic-table' | 'triangle-quiz' | 'mars';
};

// SOURCE: nav links /courses/* — order preserved from the live nav.
export const courses: Course[] = [
  {
    slug: 'biology',
    title: 'Biology',
    blurb: 'Cells, genetics, and the systems that keep living things alive.',
    group: 'Science',
    icon: 'cell',
    inNav: true,
    lessons: [],
  },
  {
    slug: 'chemistry',
    title: 'Chemistry',
    blurb: 'Elements, bonding, and the reactions that rearrange matter.',
    group: 'Science',
    icon: 'flask',
    inNav: true,
    lessons: [
      {
        slug: 'periodic-table',
        title: 'Periodic Table',
        // SOURCE
        blurb:
          'Use this interactive Periodic Table database to explore the elements and their properties.',
        kind: 'Interactive',
        island: 'periodic-table',
      },
    ],
  },
  {
    slug: 'physics',
    title: 'Physics',
    blurb: 'Motion, energy, and the rules that govern how the universe moves.',
    group: 'Science',
    icon: 'atom',
    inNav: true,
    lessons: [],
  },
  {
    slug: 'astronomy',
    title: 'Astronomy',
    blurb: 'Planets, stars, and the space between them.',
    group: 'Science',
    icon: 'planet',
    // Not in the live top nav, but /courses/astronomy/mars exists.
    inNav: false,
    lessons: [
      {
        slug: 'mars',
        title: 'Explore Mars',
        // SOURCE
        blurb:
          'Learn about the red rocky planet, our supposed next destination for space travel.',
        kind: 'Interactive',
        island: 'mars',
      },
    ],
  },
  {
    slug: 'algebra',
    title: 'Algebra',
    blurb: 'Variables, equations, and the structure underneath the numbers.',
    group: 'Mathematics',
    icon: 'variable',
    inNav: true,
    lessons: [],
  },
  {
    slug: 'geometry',
    title: 'Geometry',
    blurb: 'Shape, space, proof, and the relationships between them.',
    group: 'Mathematics',
    icon: 'triangle',
    inNav: true,
    lessons: [
      {
        slug: 'understanding-triangle-angles',
        title: 'Understanding Triangle Angles',
        // SOURCE
        blurb: 'Take this quiz to test your knowledge on the angles of a triangle.',
        kind: 'Quiz',
        island: 'triangle-quiz',
      },
    ],
  },
  {
    slug: 'trigonometry',
    title: 'Trigonometry',
    blurb: 'Angles, ratios, and the waves that come out of circles.',
    group: 'Mathematics',
    icon: 'wave',
    inNav: true,
    lessons: [],
  },
  {
    slug: 'calculus',
    title: 'Calculus',
    blurb: 'Limits, derivatives, integrals — the mathematics of change.',
    group: 'Mathematics',
    icon: 'curve',
    inNav: true,
    lessons: [],
  },
  {
    slug: 'mechatronics',
    title: 'Mechatronics',
    blurb: 'Where mechanical design, electronics, and code meet.',
    group: 'Engineering',
    icon: 'gear',
    inNav: true,
    lessons: [],
  },
];

export type Issue = {
  slug: string;
  title: string;
  subtitle?: string;
  authors: string[];
  date: string;
  dateISO: string;
  kind: 'Research Paper' | 'Pamphlet' | 'Magazine';
  cta: string;
  featured?: boolean;
};

// SOURCE: home page feature blocks + /issues links
export const issues: Issue[] = [
  {
    slug: 'targeted-dsirna-therapy-for-pancreatic-ductal-adenocarcinoma',
    title: 'Targeted DsiRNA Therapy for Pancreatic Ductal Adenocarcinoma',
    subtitle:
      'Computational Investigation of a Certepetide-Enhanced Ionizable Lipid Nanoparticle Platform for Allele-Specific KRAS G12D DsiRNA Delivery',
    authors: ['Rafaan Ahmad', 'Isaiah Lopez', 'Youssef Reyad'],
    date: '18 July 2026',
    dateISO: '2026-07-18',
    kind: 'Research Paper',
    cta: 'Read Research Paper',
    featured: true,
  },
  {
    slug: 'weather-101-hurricanes-and-tornadoes',
    title: 'Weather 101: Hurricanes and Tornadoes',
    subtitle:
      'This pamphlet helps readers identify and classify meteorological disasters while providing essential safety guidelines for encountering them.',
    authors: ['Isaiah Lopez'],
    date: 'Spring 2021',
    dateISO: '2021-04-01',
    kind: 'Pamphlet',
    cta: 'Read Pamphlet',
  },
];

// SOURCE: footer column structure
export const footerNav = [
  {
    heading: 'Involvement',
    links: [
      { label: 'Our Team', href: '/about' },
      { label: 'Submit an Article', href: '/submit' },
      { label: 'Contact', href: '/about#contact' },
    ],
  },
  {
    heading: 'Resources',
    links: [
      { label: 'Issues', href: '/issues' },
      { label: 'CSAD™ Virtual Tutoring', href: '/csad' },
    ],
  },
];

export const navCourses = courses.filter((c) => c.inNav);
