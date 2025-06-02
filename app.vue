<template>
  <NuxtLoadingIndicator />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <ClientOnly>
    <BaseToastItemContainer />
  </ClientOnly>
</template>
<script setup>

  const { status } = useAuth();
  const appStore = useAppStore();
  const userStore = useUserStore();

  useHead({
    meta: [
      { name: 'description', content: 'Sample project to demonstrate the free dummy api tool apihero.' },
      { name: 'keyword', content: 'free REST API, mock API, frontend testing, API playground, developer tools, json data' },
    ],
  });

  watch(status, () => {
    if (status.value === 'authenticated') userStore.getUserData();
  },
  { immediate: true });
  
  onMounted(() => {
    appStore.checkIsMobile();
  });
</script>
