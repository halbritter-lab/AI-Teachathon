<template>
  <DefaultTheme.Layout>
    <template #doc-after>
      <GiscusComments />
    </template>
  </DefaultTheme.Layout>
</template>

<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import GiscusComments from './components/GiscusComments.vue'
</script>
