<template>
  <div class="timeline-container">
    <ol class="relative border-s-2 border-[var(--vp-c-divider)] ms-4">
      <li
        v-for="(segment, index) in segments"
        :key="index"
        class="mb-10 ms-8 last:mb-0"
      >
        <!-- Timeline dot -->
        <span
          class="absolute -start-[11px] flex h-5 w-5 items-center justify-center rounded-full ring-4 ring-[var(--vp-c-bg)]"
          :class="
            segment.highlight
              ? 'bg-[var(--vp-c-brand-1)]'
              : 'bg-[var(--vp-c-divider)]'
          "
        />

        <!-- Time label -->
        <time
          class="mb-1 block text-sm font-normal leading-none text-[var(--vp-c-text-3)]"
        >
          {{ segment.time }}
        </time>

        <!-- Title -->
        <h3 class="mt-1 text-lg font-semibold text-[var(--vp-c-text-1)]">
          {{ segment.title }}
        </h3>

        <!-- Description -->
        <p class="mt-1 text-base text-[var(--vp-c-text-2)]">
          {{ segment.description }}
        </p>

        <!-- Optional link -->
        <a
          v-if="segment.link"
          :href="withBase(segment.link)"
          class="mt-2 inline-flex items-center text-sm font-medium text-[var(--vp-c-brand-1)] hover:underline"
        >
          {{ segment.linkText || 'Learn more' }} →
        </a>
      </li>
    </ol>
  </div>
</template>

<script setup lang="ts">
import { withBase } from 'vitepress'

interface TimelineSegment {
  time: string
  title: string
  description: string
  link?: string
  linkText?: string
  highlight?: boolean
}

defineProps<{
  segments: TimelineSegment[]
}>()
</script>

<style scoped>
.timeline-container {
  padding: 1rem 0;
  max-width: 640px;
}
</style>
