<template>
  <div ref="wrapper" class="relative">
    <button
      type="button"
      class="inline-flex items-center gap-1 rounded-full border border-slate-200/70 bg-white/70 px-3 py-1 text-xs font-medium text-slate-800 shadow-sm backdrop-blur dark:border-white/15 dark:bg-slate-900/70 dark:text-slate-100"
      @click="open = !open"
    >
      <span v-if="preference === 'light'">Light</span>
      <span v-else-if="preference === 'dark'">Dark</span>
      <span v-else>System</span>
    </button>

    <div
      v-if="open"
      class="absolute right-0 z-20 mt-2 w-32 rounded-lg border border-slate-200/70 bg-white/90 p-1 text-xs shadow-lg dark:border-white/10 dark:bg-slate-900/95"
    >
      <button class="theme-option" @click="change('light')">Light</button>
      <button class="theme-option" @click="change('dark')">Dark</button>
      <button class="theme-option" @click="change('system')">System</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTheme } from '~/composables/useTheme'

const { preference, setTheme } = useTheme()
const open = ref(false)

function change(next: 'light' | 'dark' | 'system') {
  setTheme(next)
  open.value = false
}

const wrapper = ref<HTMLElement | null>(null)

function handleClickOutside(e: MouseEvent) {
  if (wrapper.value && !wrapper.value.contains(e.target as Node)) {
    open.value = false
  }
}

onMounted(() => document.addEventListener('click', handleClickOutside))
onUnmounted(() => document.removeEventListener('click', handleClickOutside))
</script>

<style scoped>
.theme-option {
  @apply block w-full rounded-md px-2 py-1 text-left text-slate-800 hover:bg-slate-100 dark:text-slate-100 dark:hover:bg-slate-800;
}
</style>

