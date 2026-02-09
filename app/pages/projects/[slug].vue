<template>
  <div class="space-y-8">
    <NuxtLink to="/" class="text-sm text-slate-300 underline-offset-4 hover:underline">
      ← Back to home
    </NuxtLink>

    <div v-if="project" class="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
      <div class="aspect-[16/9] w-full bg-white/5">
        <img
          v-if="project.photoUrl"
          :src="project.photoUrl"
          :alt="project.title"
          class="h-full w-full object-cover"
        />
      </div>

      <div class="space-y-5 p-6 sm:p-8">
        <div>
          <h1 class="text-3xl font-semibold tracking-tight text-white">
            {{ project.title }}
          </h1>
          <p class="mt-3 text-slate-300">
            {{ project.description }}
          </p>
        </div>

        <div class="flex flex-wrap gap-2">
          <span
            v-for="tag in project.stack"
            :key="tag"
            class="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200"
          >
            {{ tag }}
          </span>
        </div>

        <div class="flex flex-wrap gap-3">
          <a
            v-if="project.githubUrl"
            :href="project.githubUrl"
            target="_blank"
            rel="noreferrer"
            class="btn-secondary"
          >
            GitHub
          </a>
          <a
            v-if="project.liveDemoUrl"
            :href="project.liveDemoUrl"
            target="_blank"
            rel="noreferrer"
            class="btn-primary"
          >
            Live Demo
          </a>
        </div>
      </div>
    </div>

    <div v-else class="rounded-2xl border border-white/10 bg-white/5 p-6">
      <p class="text-slate-200">Project not found.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { projects } from '~/data/projects'

const route = useRoute()
const slug = computed(() => String(route.params.slug ?? ''))
const project = computed(() => projects.find((p) => p.slug === slug.value))

useSeoMeta(() => ({
  title: project.value ? `${project.value.title} — Portfolio` : 'Project — Portfolio',
  description: project.value?.description,
}))
</script>

<style scoped>
.btn-primary {
  @apply inline-flex items-center justify-center rounded-lg bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-slate-200;
}
.btn-secondary {
  @apply inline-flex items-center justify-center rounded-lg border border-white/15 bg-transparent px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/5;
}
</style>

