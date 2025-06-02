<template>
  <TopBar />
  <StickyBar />
  <MainMenu v-if="!appStore.isMobile" />
  <slot />
  <FooterSection />
</template>
<script setup>
  const appStore = useAppStore();

  const { status } = useAuth();
  if (status?.value === 'unauthenticated') {
    navigateTo('/login');
  }
</script>
