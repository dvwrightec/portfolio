export type SkillItem = {
  name: string
  icon: string
  color: string
}

export type SkillCategory = {
  labelKey: string
  items: SkillItem[]
}

export const skillCategories: SkillCategory[] = [
  {
    labelKey: 'frontend',
    items: [
      { name: 'React', icon: 'simple-icons:react', color: '#61DAFB' },
      { name: 'Next.js', icon: 'simple-icons:nextdotjs', color: '#000000' },
      { name: 'TypeScript', icon: 'simple-icons:typescript', color: '#3178C6' },
      { name: 'JavaScript (ES6+)', icon: 'simple-icons:javascript', color: '#F7DF1E' },
      { name: 'Tailwind CSS', icon: 'simple-icons:tailwindcss', color: '#06B6D4' },
      { name: 'HTML5', icon: 'simple-icons:html5', color: '#E34F26' },
      { name: 'CSS3', icon: 'simple-icons:css3', color: '#1572B6' },
    ],
  },
  {
    labelKey: 'backend',
    items: [
      { name: 'Node.js', icon: 'simple-icons:nodedotjs', color: '#339933' },
      { name: 'Python', icon: 'simple-icons:python', color: '#3776AB' },
      { name: 'REST APIs', icon: 'mdi:api', color: '#6366F1' },
      { name: 'GraphQL', icon: 'simple-icons:graphql', color: '#E10098' },
      { name: 'Microservices', icon: 'mdi:server-network', color: '#0EA5E9' },
    ],
  },
  {
    labelKey: 'databases',
    items: [
      { name: 'PostgreSQL', icon: 'simple-icons:postgresql', color: '#4169E1' },
      { name: 'MongoDB', icon: 'simple-icons:mongodb', color: '#47A248' },
      { name: 'Redis', icon: 'simple-icons:redis', color: '#DC382D' },
      { name: 'MySQL', icon: 'simple-icons:mysql', color: '#4479A1' },
    ],
  },
  {
    labelKey: 'devops',
    items: [
      { name: 'AWS', icon: 'simple-icons:amazonaws', color: '#FF9900' },
      { name: 'Docker', icon: 'simple-icons:docker', color: '#2496ED' },
      { name: 'Kubernetes', icon: 'simple-icons:kubernetes', color: '#326CE5' },
      { name: 'CI/CD', icon: 'mdi:source-branch', color: '#10B981' },
    ],
  },
  {
    labelKey: 'architecture',
    items: [
      { name: 'Distributed Systems', icon: 'mdi:server-multiple', color: '#8B5CF6' },
      { name: 'Event-Driven Design', icon: 'mdi:lightning-bolt', color: '#F59E0B' },
      { name: 'Real-Time Processing', icon: 'mdi:clock-fast', color: '#06B6D4' },
    ],
  },
  {
    labelKey: 'tools',
    items: [
      { name: 'Jest', icon: 'simple-icons:jest', color: '#C21325' },
      { name: 'Cypress', icon: 'simple-icons:cypress', color: '#17202C' },
      { name: 'Git', icon: 'simple-icons:git', color: '#F05032' },
      { name: 'Webpack', icon: 'simple-icons:webpack', color: '#8DD6F9' },
      { name: 'Vite', icon: 'simple-icons:vite', color: '#646CFF' },
    ],
  },
]
