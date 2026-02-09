<template>
  <section
    id="education"
    v-motion
    :initial="{ opacity: 0, y: 16 }"
    :enter="{ opacity: 1, y: 0, transition: { duration: 0.5 } }"
    class="scroll-mt-24"
  >
    <SectionTitle title="Education" />
    <div
      class="relative overflow-hidden rounded-2xl border border-slate-200/60 bg-white/70 dark:border-white/10 dark:bg-white/5"
    >
      <div class="absolute inset-0">
        <img
          src="/universidad_tecnologica_nacional_cover.jpg"
          alt="University campus"
          class="h-full w-full object-cover"
          loading="lazy"
        />
        <div class="absolute inset-0 bg-white/75 dark:bg-slate-950/70"></div>
      </div>
      <div class="relative p-6">
        <div>
          <p class="font-medium text-slate-900 dark:text-white">
            Universidad Tecnológica Nacional (UTN) — Argentina
          </p>
          <p class="text-sm text-slate-600 dark:text-slate-300">2010 – 2015</p>
          <p class="mt-2 text-slate-700 dark:text-slate-200">
            University Technician in Programming
          </p>
        </div>
        <div class="mt-4">
          <p class="font-medium text-slate-900 dark:text-white">
            Bachelor Degree in Computer Science
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionTitle from '~/components/ui/SectionTitle.vue'
</script>

