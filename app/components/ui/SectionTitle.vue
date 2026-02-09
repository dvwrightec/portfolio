<template>
  <div class="mb-4">
    <h2 class="text-xl font-semibold tracking-tight text-white">
      {{ title }}
    </h2>
    <div class="mt-2 h-px w-full bg-white/10" />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

