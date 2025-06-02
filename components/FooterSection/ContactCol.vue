<template>
  <div class="col-12 col-sm-6 col-lg-3 mb-4">
    <h6 class="mb-2">24/7 ONLINE SUPPORT</h6>
    <NuxtLink to="/">Help / FAQ</NuxtLink>
    <BaseSeperator
      color-class="bg-silver-700"
      label-color-class="bg-silver-800"
      label="or"
      gap="2rem"
    />
    <p class="text-xs mb-2">Call Us</p>
    <NuxtLink to="/">+001234567890</NuxtLink><br />
    <NuxtLink to="/" class="text-xl"><BaseIcon :icon-data="whatsappIcon" /></NuxtLink>
  </div>
</template>
<script setup>
  import whatsappIcon from '~/assets/svg/whatsapp.svg';
</script>
