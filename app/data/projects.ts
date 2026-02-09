export type Project = {
  slug: string
  title: string
  description: string
  githubUrl?: string
  liveDemoUrl?: string
  stack: string[]
  photoUrl?: string
}

export const projects: Project[] = [
  {
    slug: 'portfolio-nuxt',
    title: 'Portfolio Website',
    description:
      'A fast personal portfolio with anchor navigation, project detail pages, and a clean dark UI.',
    githubUrl: 'https://github.com/',
    liveDemoUrl: 'https://vercel.com/',
    stack: ['Nuxt 4.3', 'Vue 3', 'Tailwind CSS'],
    photoUrl:
      'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80',
  },
  {
    slug: 'supabase-app',
    title: 'Supabase App',
    description: 'Example CRUD app using Supabase as the backend.',
    githubUrl: 'https://github.com/',
    stack: ['Nuxt 4.3', 'Supabase'],
    photoUrl:
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80',
  },
]
