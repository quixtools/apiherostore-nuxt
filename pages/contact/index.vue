<template>
  <div class="container my-4">
    <div class="col">
      <div class="ah-breadcrumb-container">
        <NuxtLink to="/">Home</NuxtLink> > Contact
      </div>
      <main class="text-center mt-4">
        <BaseIcon :icon-data="envelopeIcon" class="text-5xl mt-5" />
        <h1 class="my-5">Got a Question?</h1>
        <p>You can use <a href="https://apihero.quixtools.com" target="_blank" class="text-primary">&lt;apihero&gt;</a> web page for support or documentation</p>
        <p>or</p>
        <p class="mb-5">just to say <strong>"Hi!"</strong>.</p>
      </main>
    </div>
  </div>
</template>
<script setup>
  import envelopeIcon from '~/assets/svg/envelope.svg';
  useHead({
    title: `${useRuntimeConfig().public.titleBaseText}nuxt store sample`,
  });
</script>
