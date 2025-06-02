<template>
  <TopBar />
  <StickyBar />
  <MainMenu v-if="!appStore.isMobile" />
  <slot />
  <FooterSection />
</template>
<script setup>
  const appStore = useAppStore();
</script>
