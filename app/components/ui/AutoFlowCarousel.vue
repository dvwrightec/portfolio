<template>
  <div class="space-y-4">
    <div class="aspect-[16/9] w-full bg-slate-100 dark:bg-white/5">
      <Transition :name="transitionName" mode="out-in">
        <img
          v-if="activeImage"
          :key="activeImage"
          :src="activeImage"
          :alt="alt"
          class="h-full w-full object-cover"
        />
      </Transition>
    </div>

    <div v-if="hasMultipleImages" class="flex items-center justify-between gap-3">
      <button
        type="button"
        class="rounded-full border border-slate-200/80 bg-white px-3 py-1 text-xs text-slate-700 transition hover:bg-slate-100 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:bg-white/10"
        aria-label="Previous photo"
        @click="prevImage"
      >
        Prev
      </button>
      <span class="text-xs text-slate-500 dark:text-slate-400">
        {{ activeIndex + 1 }} / {{ images.length }}
      </span>
      <button
        type="button"
        class="rounded-full border border-slate-200/80 bg-white px-3 py-1 text-xs text-slate-700 transition hover:bg-slate-100 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:bg-white/10"
        aria-label="Next photo"
        @click="nextImage"
      >
        Next
      </button>
    </div>

    <div v-if="hasMultipleImages" class="flex gap-2 overflow-x-auto pb-2">
      <button
        v-for="(image, index) in images"
        :key="image"
        type="button"
        class="relative h-16 w-24 overflow-hidden rounded-lg border border-transparent transition"
        :class="index === activeIndex ? 'border-slate-900/70 dark:border-white/80' : 'border-slate-200/60 dark:border-white/10'"
        :aria-label="`View image ${index + 1}`"
        @click="setImage(index)"
      >
        <img :src="image" :alt="alt" class="h-full w-full object-cover" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    images: string[]
    alt?: string
    interval?: number
  }>(),
  {
    alt: 'Gallery image',
    interval: 4500,
  },
)

const activeIndex = ref(0)
const direction = ref<'next' | 'prev'>('next')
const transitionName = computed(() =>
  direction.value === 'next' ? 'gallery-slide-next' : 'gallery-slide-prev',
)
const activeImage = computed(() => props.images[activeIndex.value])
const hasMultipleImages = computed(() => props.images.length > 1)
let intervalId: ReturnType<typeof setInterval> | null = null

const startAutoFlow = () => {
  if (intervalId) {
    clearInterval(intervalId)
    intervalId = null
  }
  if (props.images.length < 2) return
  intervalId = setInterval(() => {
    direction.value = 'next'
    activeIndex.value = (activeIndex.value + 1) % props.images.length
  }, props.interval)
}

watch(
  () => props.images,
  (nextImages) => {
    activeIndex.value = nextImages.length ? 0 : 0
    direction.value = 'next'
    startAutoFlow()
  },
  { immediate: true },
)

onMounted(() => {
  startAutoFlow()
})

onBeforeUnmount(() => {
  if (intervalId) clearInterval(intervalId)
})

const prevImage = () => {
  if (!props.images.length) return
  direction.value = 'prev'
  activeIndex.value = (activeIndex.value - 1 + props.images.length) % props.images.length
  startAutoFlow()
}

const nextImage = () => {
  if (!props.images.length) return
  direction.value = 'next'
  activeIndex.value = (activeIndex.value + 1) % props.images.length
  startAutoFlow()
}

const setImage = (index: number) => {
  if (!props.images.length) return
  direction.value = index >= activeIndex.value ? 'next' : 'prev'
  activeIndex.value = index
  startAutoFlow()
}
</script>

<style scoped>
.gallery-slide-next-enter-active,
.gallery-slide-next-leave-active,
.gallery-slide-prev-enter-active,
.gallery-slide-prev-leave-active {
  transition: opacity 240ms ease, transform 240ms ease;
}
.gallery-slide-next-enter-from {
  opacity: 0;
  transform: translateX(16px);
}
.gallery-slide-next-leave-to {
  opacity: 0;
  transform: translateX(-16px);
}
.gallery-slide-prev-enter-from {
  opacity: 0;
  transform: translateX(-16px);
}
.gallery-slide-prev-leave-to {
  opacity: 0;
  transform: translateX(16px);
}
</style>
