<template>
  <DefaultTheme.Layout>
    <template #layout-top>
      <AnnouncementBanner />
    </template>
    <template #doc-after>
      <GiscusComments />
    </template>
  </DefaultTheme.Layout>
</template>

<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import AnnouncementBanner from './components/AnnouncementBanner.vue'
import GiscusComments from './components/GiscusComments.vue'
</script>
