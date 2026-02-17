<template>
  <div v-if="visible" class="announcement-bar">
    <a
      href="https://meet.jit.si/ai-teachathon-2026"
      target="_blank"
      rel="noopener"
      class="announcement-link"
    >
      <span class="announcement-dot" />
      <span class="announcement-text">
        Join the AI-Teachathon live session via Jitsi
      </span>
      <span class="announcement-arrow">
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M7 17L17 7" />
          <path d="M7 7h10v10" />
        </svg>
      </span>
    </a>
    <button
      class="announcement-close"
      aria-label="Dismiss announcement"
      @click.stop="dismiss"
    >
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M18 6L6 18" />
        <path d="M6 6l12 12" />
      </svg>
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'

const STORAGE_KEY = 'ai-teachathon-jitsi-dismissed'
const BANNER_HEIGHT = '36px'
const visible = ref(false)

function updateLayoutHeight(show: boolean) {
  if (typeof document !== 'undefined') {
    document.documentElement.style.setProperty(
      '--vp-layout-top-height',
      show ? BANNER_HEIGHT : '0px'
    )
  }
}

onMounted(() => {
  visible.value = !localStorage.getItem(STORAGE_KEY)
  updateLayoutHeight(visible.value)
})

watch(visible, (val) => {
  updateLayoutHeight(val)
})

function dismiss() {
  visible.value = false
  localStorage.setItem(STORAGE_KEY, '1')
}
</script>

<style scoped>
.announcement-bar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 31;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background: var(--vp-c-bg-alt);
  border-bottom: 1px solid var(--vp-c-divider);
  padding: 0 2.5rem;
  font-size: 0.85rem;
}

.announcement-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--vp-c-text-2);
  text-decoration: none;
  transition: color 0.2s;
}

.announcement-link:hover {
  color: var(--vp-c-brand-1);
}

.announcement-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #22c55e;
  flex-shrink: 0;
  animation: pulse-dot 2s ease-in-out infinite;
}

@keyframes pulse-dot {
  0%,
  100% {
    opacity: 1;
    box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.4);
  }
  50% {
    opacity: 0.8;
    box-shadow: 0 0 0 4px rgba(34, 197, 94, 0);
  }
}

.announcement-text {
  font-weight: 500;
}

.announcement-arrow {
  display: flex;
  align-items: center;
  opacity: 0.5;
  transition:
    opacity 0.2s,
    transform 0.2s;
}

.announcement-link:hover .announcement-arrow {
  opacity: 1;
  transform: translate(2px, -2px);
}

.announcement-close {
  position: absolute;
  right: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  color: var(--vp-c-text-3);
  cursor: pointer;
  padding: 0.25rem;
  border-radius: 4px;
  transition:
    color 0.2s,
    background-color 0.2s;
}

.announcement-close:hover {
  color: var(--vp-c-text-1);
  background: var(--vp-c-bg-soft);
}
</style>
