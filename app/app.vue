<template>
  <n-config-provider :theme="theme">
    <n-notification-provider>
      <nuxt-page />
    </n-notification-provider>
  </n-config-provider>
</template>
<script setup lang="ts">
const mainStore = useMainStore()
const theme = computed<GlobalTheme | null>(() =>
  mainStore.darkTheme ? darkTheme : null
)
</script>
<style>
.filler {
  min-height: 60vh;
  display: block;
}
</style>
