<template>
  <div class="space-y-16">
    <section
      class="rounded-2xl border border-slate-200/60 bg-white/80 p-8 shadow-sm dark:border-white/10 dark:bg-white/5"
    >
      <h1 class="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
        Portfolio
      </h1>
      <p class="mt-3 max-w-2xl text-slate-700 dark:text-slate-300">
        I build clean, fast web apps. This template has a single-page layout with section anchors,
        plus project detail pages.
      </p>
      <div class="mt-6 flex flex-wrap gap-3">
        <NuxtLink :to="{ path: '/', hash: '#projects' }" class="btn-primary">
          View projects
        </NuxtLink>
        <NuxtLink :to="{ path: '/', hash: '#contact' }" class="btn-secondary">
          Contact me
        </NuxtLink>
      </div>
    </section>

    <AboutMeSection />
    <EmploymentHistorySection />
    <EducationSection />
    <ProjectsSection />

    <section id="contact" class="scroll-mt-24">
      <SectionTitle title="Contact Me" />
      <div
        class="rounded-2xl border border-slate-200/60 bg-white/80 p-6 dark:border-white/10 dark:bg-white/5"
      >
        <p class="text-slate-700 dark:text-slate-300">
          Add your preferred contact method here (email, form, Calendly, etc).
        </p>
        <div class="mt-4 flex flex-wrap gap-3">
          <a class="btn-primary" href="mailto:you@example.com">Email me</a>
          <a
            class="btn-secondary"
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
          >
            Message on LinkedIn
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import SectionTitle from '~/components/ui/SectionTitle.vue'
import AboutMeSection from '~/components/sections/AboutMeSection.vue'
import EmploymentHistorySection from '~/components/sections/EmploymentHistorySection.vue'
import EducationSection from '~/components/sections/EducationSection.vue'
import ProjectsSection from '~/components/sections/ProjectsSection.vue'
</script>

