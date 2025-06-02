<template>
  <div class="col-12 col-sm-6 col-lg-3 mb-4">
    <h5 class="mb-2"><span class="text-primary">ah</span>Store</h5>
    <p class="text-sm">This is a sample project for <a href="https://apihero.quixtools.com" target="_blank" class="text-primary">&lt;apihero&gt;</a>.</p>
    <p><a href="https://apihero.quixtools.com" target="_blank" class="text-primary">&lt;apihero&gt;</a> is a ree dummy REST APIs designed for developers to practice coding, enhance skills, test app ideas, or add that extra sparkle to portfolio projects with ease.</p>
    <BaseSeperator color-class="bg-silver-700" />
    <a class="text-xl" href="https://www.linkedin.com/in/mftaskin/" target="_blank"><BaseIcon :icon-data="linkedinIcon" /></a>
    <a class="text-xl ms-2" href="https://github.com/quixtools" target="_blank"><BaseIcon :icon-data="githubIcon" /></a>
  </div>
</template>
<script setup>
  import linkedinIcon from '~/assets/svg/linkedin.svg';
  import githubIcon from '~/assets/svg/github.svg';
</script>
