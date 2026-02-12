<template>
  <section
    id="overview"
    v-motion
    :initial="{ opacity: 0, y: 12 }"
    :enter="{ opacity: 1, y: 0, transition: { duration: 0.5 } }"
    class="relative overflow-hidden rounded-2xl border border-slate-200/60 bg-gradient-to-br from-slate-50 to-white p-8 shadow-sm dark:border-white/10 dark:from-slate-900/50 dark:to-slate-950/80"
  >
    <div class="absolute right-0 top-0 h-64 w-64 translate-x-16 -translate-y-16 rounded-full bg-slate-200/40 dark:bg-white/5" />
    <div class="relative overflow-visible">
      <h1 class="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
        {{ t('overview.title') }}
      </h1>
      <p class="mt-4 max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-300">
        {{ t('overview.subtitle') }}
      </p>
      <div class="mt-8 flex flex-wrap items-center gap-3 overflow-visible">
        <UButton
          :to="`${localePath('/')}#projects`"
          color="neutral"
          variant="solid"
          size="lg"
          class="shrink-0 rounded-full"
        >
          {{ t('overview.cta.projects') }}
        </UButton>
        <UButton
          :to="`${localePath('/')}#contact`"
          color="neutral"
          variant="outline"
          size="lg"
          class="shrink-0 rounded-full"
        >
          {{ t('overview.cta.contact') }}
        </UButton>
        <UButton
          color="neutral"
          variant="outline"
          size="lg"
          class="cursor-pointer shrink-0 rounded-full"
          @click="useResumeModal().value = true"
        >
          <template #leading>
            <Icon name="mdi:file-document-outline" class="size-5 shrink-0" />
          </template>
          {{ t('overview.cta.resume') }}
        </UButton>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()
</script>
