<template>
  <SaleSection />
  <WhySection />
  <BestSellers />
</template>
<script setup>
  useHead({
    title: `${useRuntimeConfig().public.titleBaseText}nuxt store sample`,
  });
</script>
