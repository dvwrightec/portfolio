<template>
  <section
    id="employment"
    v-motion
    :initial="{ opacity: 0, y: 16 }"
    :enter="{ opacity: 1, y: 0, transition: { duration: 0.5 } }"
    class="scroll-mt-24"
  >
    <SectionTitle title="Employment History" />

    <div class="relative mt-8">
      <div
        class="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-slate-200/70 dark:bg-white/10 md:block">
      </div>

      <div class="space-y-10">
        <div v-for="(item, index) in experiences" :key="item.role" class="relative">
          <div class="md:grid md:grid-cols-2 md:items-start md:gap-8">
            <div v-motion :initial="{ opacity: 0, y: 18 }"
              :enter="{ opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.08 } }" :class="[
                'rounded-2xl border border-slate-200/60 bg-white/80 p-6 shadow-sm dark:border-white/10 dark:bg-white/5',
                index % 2 === 0 ? 'md:col-start-1 md:pr-10' : 'md:col-start-2 md:pl-10',
              ]">

              <p class="text-sm font-semibold text-slate-900 dark:text-white">
                {{ item.role }}
              </p>
              <ul class="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-700 dark:text-slate-300">
                <li v-for="bullet in item.bullets" :key="bullet">{{ bullet }}</li>
              </ul>
            </div>
          </div>

          <div class="absolute left-1/2 top-2 hidden -translate-x-1/2 md:flex md:flex-col md:items-center">
            <span
              class="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white text-xs font-semibold text-slate-700 shadow-sm dark:border-white/15 dark:bg-slate-950 dark:text-slate-200">
              {{ item.badge }}
            </span>
            <span class="mt-2 text-xs font-medium text-slate-500 dark:text-slate-400">
              {{ item.dates }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionTitle from '~/components/ui/SectionTitle.vue'

const experiences = [
  {
    role: 'Senior Full-Stack Developer',
    company: 'FIA Tech — Remote / International Projects',
    dates: 'May 2022 – Dec 2025',
    badge: 'SF',
    bullets: [
      'Owned full-stack platform design using Next.js, Node.js, and PostgreSQL.',
      'Built scalable REST APIs with auth, validation, and performance focus.',
      'Led complex API integrations with ERP/CMS platforms and third-party services.',
      'Implemented Supabase for auth, storage, and real-time features.',
      'Delivered AI/LLM features, including RAG-based architectures.',
    ],
  },
  {
    role: 'Full-Stack Developer',
    company: 'Henry — Web Platforms & Business Applications',
    dates: 'Mar 2020 – Apr 2022',
    badge: 'FS',
    bullets: [
      'Delivered end-to-end web apps across frontend, backend, and database layers.',
      'Built backend services with Node.js and PostgreSQL.',
      'Implemented modular Angular frontends.',
      'Integrated third-party APIs and internal services.',
    ],
  },
  {
    role: 'Backend / Software Developer',
    company: 'Sabio LA — APIs & Data-Oriented Systems',
    dates: 'Oct 2018 – Jan 2020',
    badge: 'BE',
    bullets: [
      'Built REST APIs with Django and Django REST Framework.',
      'Modeled relational databases and optimized queries.',
      'Implemented auth, authorization, and validation logic.',
      'Integrated backend services with frontend apps and external APIs.',
    ],
  },
  {
    role: 'Junior Software Developer',
    company: 'Globant — Web Applications',
    dates: 'Aug 2016 – Jun 2018',
    badge: 'JR',
    bullets: [
      'Delivered small-to-medium features under senior guidance.',
      'Implemented frontend components and backend endpoints.',
      'Fixed bugs, refactored code, and supported existing apps.',
    ],
  },
  {
    role: 'Programming Intern / Trainee',
    company: 'Telefonica — Entry-Level & Academic Projects',
    dates: 'Apr 2015 – Jul 2016',
    badge: 'IN',
    bullets: [
      'Assisted in developing simple web apps and internal tools.',
      'Supported testing, debugging, and documentation tasks.',
      'Applied programming fundamentals in practical scenarios.',
    ],
  },
]
</script>
