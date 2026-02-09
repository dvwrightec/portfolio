<template>
  <div class="space-y-16">
    <section class="rounded-2xl border border-white/10 bg-white/5 p-8">
      <h1 class="text-3xl font-semibold tracking-tight sm:text-4xl">
        Portfolio
      </h1>
      <p class="mt-3 max-w-2xl text-slate-300">
        I build clean, fast web apps. This template has a single-page layout with
        section anchors, plus project detail pages.
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

    <section id="about" class="scroll-mt-24">
      <SectionTitle title="About Me" />
      <div class="card">
        <p class="text-slate-300">
          Write a short bio here: what you do, what you love building, and what
          you’re looking for.
        </p>
      </div>
    </section>

    <section id="employment" class="scroll-mt-24">
      <SectionTitle title="Employment History" />
      <div class="card space-y-4">
        <div>
          <p class="font-medium text-white">Company — Role</p>
          <p class="text-sm text-slate-400">2024 – Present</p>
          <p class="mt-2 text-slate-300">
            Impact-focused bullet points: what you shipped, improved, and owned.
          </p>
        </div>
      </div>
    </section>

    <section id="education" class="scroll-mt-24">
      <SectionTitle title="Education" />
      <div class="card space-y-2">
        <p class="font-medium text-white">School — Degree</p>
        <p class="text-sm text-slate-400">Year</p>
      </div>
    </section>

    <section id="projects" class="scroll-mt-24">
      <SectionTitle title="Projects" />
      <div class="grid gap-6 sm:grid-cols-2">
        <NuxtLink
          v-for="p in projects"
          :key="p.slug"
          :to="`/projects/${p.slug}`"
          class="group block"
        >
          <div class="card h-full overflow-hidden p-0">
            <div class="aspect-[16/9] w-full overflow-hidden bg-white/5">
              <img
                v-if="p.photoUrl"
                :src="p.photoUrl"
                :alt="p.title"
                class="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                loading="lazy"
              />
            </div>
            <div class="p-6">
              <p class="text-lg font-semibold text-white">{{ p.title }}</p>
              <p class="mt-2 line-clamp-2 text-sm text-slate-300">
                {{ p.description }}
              </p>
              <div class="mt-4 flex flex-wrap gap-2">
                <span
                  v-for="tag in p.stack"
                  :key="tag"
                  class="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200"
                >
                  {{ tag }}
                </span>
              </div>
            </div>
          </div>
        </NuxtLink>
      </div>
    </section>

    <section id="contact" class="scroll-mt-24">
      <SectionTitle title="Contact Me" />
      <div class="card">
        <p class="text-slate-300">
          Add your preferred contact method here (email, form, Calendly, etc).
        </p>
        <div class="mt-4 flex flex-wrap gap-3">
          <a class="btn-primary" href="mailto:you@example.com">Email me</a>
          <a class="btn-secondary" href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
            Message on LinkedIn
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { projects } from '~/data/projects'

const SectionTitle = defineComponent({
  props: { title: { type: String, required: true } },
  setup(props) {
    return () => (
      <div class="mb-4">
        <h2 class="text-xl font-semibold tracking-tight text-white">
          {props.title}
        </h2>
        <div class="mt-2 h-px w-full bg-white/10" />
      </div>
    )
  },
})
</script>

<style scoped>
.card {
  @apply rounded-2xl border border-white/10 bg-white/5 p-6;
}
.btn-primary {
  @apply inline-flex items-center justify-center rounded-lg bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-slate-200;
}
.btn-secondary {
  @apply inline-flex items-center justify-center rounded-lg border border-white/15 bg-transparent px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/5;
}
</style>

