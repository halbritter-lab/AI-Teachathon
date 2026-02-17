<template>
  <ClientOnly>
    <div v-if="showComments" class="giscus-wrapper">
      <component
        :is="'script'"
        :key="`${route.path}-${giscusTheme}`"
        src="https://giscus.app/client.js"
        data-repo="halbritter-lab/AI-Teachathon"
        data-repo-id="R_kgDORSHEMQ"
        data-category="General"
        data-category-id="DIC_kwDORSHEMc4C2nnD"
        data-mapping="pathname"
        :data-theme="giscusTheme"
        data-reactions-enabled="1"
        data-input-position="bottom"
        data-loading="lazy"
        data-lang="en"
        crossorigin="anonymous"
        async
      />
    </div>
  </ClientOnly>
</template>

<script setup lang="ts">
import { computed, watch } from 'vue'
import { useData, useRoute } from 'vitepress'

const { frontmatter, isDark } = useData()
const route = useRoute()

const showComments = computed(() => {
  if (frontmatter.value.comment === false) return false
  if (frontmatter.value.layout === 'home') return false
  return true
})

const giscusTheme = computed(() =>
  isDark.value ? 'transparent_dark' : 'light',
)

watch(isDark, () => {
  const iframe = document.querySelector<HTMLIFrameElement>(
    'iframe.giscus-frame',
  )
  iframe?.contentWindow?.postMessage(
    {
      giscus: {
        setConfig: {
          theme: isDark.value ? 'transparent_dark' : 'light',
        },
      },
    },
    'https://giscus.app',
  )
})
</script>

<style scoped>
.giscus-wrapper {
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid var(--vp-c-divider);
}
</style>
