<template>
  <header class="sticky top-0 z-50 border-b border-slate-200/60 bg-white/70 backdrop-blur dark:border-white/10 dark:bg-slate-950/75">
    <nav class="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
      <NuxtLink
        to="/"
        class="text-sm font-semibold tracking-wide text-slate-900 dark:text-white"
        aria-label="Home"
      >
        Roy Andreson
      </NuxtLink>

      <div class="hidden items-center gap-1 sm:flex">
        <NuxtLink :to="{ path: '/', hash: '#about' }" class="nav-link">About Me</NuxtLink>
        <NuxtLink :to="{ path: '/', hash: '#employment' }" class="nav-link">Employment</NuxtLink>
        <NuxtLink :to="{ path: '/', hash: '#education' }" class="nav-link">Education</NuxtLink>
        <NuxtLink :to="{ path: '/', hash: '#projects' }" class="nav-link">Projects</NuxtLink>
        <NuxtLink :to="{ path: '/', hash: '#contact' }" class="nav-link">Contact</NuxtLink>
      </div>

      <div class="flex items-center gap-2">
        <ThemeToggle class="hidden sm:inline-flex" />
        <a
          href="https://github.com/"
          target="_blank"
          rel="noreferrer"
          class="icon-link"
          aria-label="GitHub"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noreferrer"
          class="icon-link"
          aria-label="LinkedIn"
        >
          LinkedIn
        </a>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import ThemeToggle from '~/components/ui/ThemeToggle.vue'
</script>

<style scoped>
.nav-link {
  @apply rounded-md px-3 py-2 text-sm text-slate-700 transition hover:bg-slate-100 hover:text-slate-950 dark:text-slate-200 dark:hover:bg-white/5 dark:hover:text-white;
}
.icon-link {
  @apply rounded-md px-3 py-2 text-sm text-slate-700 transition hover:bg-slate-100 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-white/5 dark:hover:text-white;
}
</style>
