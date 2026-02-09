<template>
  <section
    id="about"
    v-motion
    :initial="{ opacity: 0, y: 16 }"
    :enter="{ opacity: 1, y: 0, transition: { duration: 0.5 } }"
    class="scroll-mt-24"
  >
    <SectionTitle title="About Me" />
    <div
      class="grid gap-6 overflow-hidden rounded-2xl border border-slate-200/60 bg-white/80 dark:border-white/10 dark:bg-white/5 md:grid-cols-[minmax(0,280px)_1fr]"
    >
      <div class="h-full w-full">
        <img
          src="/selfie.jpg"
          alt="Portrait photo"
          class="h-full w-full object-cover"
          loading="lazy"
        />
      </div>
      <div class="p-6">
        <p class="text-slate-700 dark:text-slate-300">
          I am a full-stack developer with a long-standing passion for software development and
          continuous learning. I build reliable, scalable web platforms with a focus on clean
          architecture, maintainable code, and pragmatic technical decisions aligned with business
          needs.
        </p>
        <p class="mt-4 text-slate-700 dark:text-slate-300">
          My core experience is centered around Next.js, Node.js, and PostgreSQL, complemented by
          Supabase, workflow automation with n8n, and AI/LLM integrations, including RAG-based
          architectures. I also work comfortably in mixed environments with Angular frontends and
          Django/DRF backends.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionTitle from '~/components/ui/SectionTitle.vue'
</script>

