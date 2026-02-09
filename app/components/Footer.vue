<template>
  <footer class="border-t border-white/10">
    <div class="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
      <div class="flex items-center gap-3">
        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noreferrer"
          class="footer-link"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/"
          target="_blank"
          rel="noreferrer"
          class="footer-link"
        >
          GitHub
        </a>
      </div>

      <p class="text-sm text-slate-400">Copyright © 2026</p>
    </div>
  </footer>
</template>

<style scoped>
.footer-link {
  @apply text-sm text-slate-300 underline-offset-4 hover:underline hover:text-white;
}
</style>
