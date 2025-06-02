<template>
  <footer id="ah-footer">
    <div class="container">
      <div class="row ah-footer-menu">
        <FooterSectionAboutCol />
        <FooterSectionContactCol />
        <FooterSectionStoreLinks />
        <FooterSectionCategoryLinks />
      </div>
      <BaseSeperator color-class="bg-silver-700" />
      <div class="row">
        <div class="col text-gray-500">
          <span>powered by <a href="https://apihero.quixtools.com" target="_blank" class="text-indigo-500">apihero</a> and <a href="https://www.quixtools.com" target="_blank" class="text-indigo-500">quixtools</a></span>
        </div>
        <div class="col text-gray-500 text-3xl text-right">
          <BaseIcon :icon-data="mastercardIcon" class="me-2" />
          <BaseIcon :icon-data="visaIcon" class="me-2" />
          <BaseIcon :icon-data="americanexpressIcon" />
        </div>
      </div>
    </div>
  </footer>
</template>
<script setup>
import mastercardIcon from '~/assets/svg/mastercard.svg';
import visaIcon from '~/assets/svg/visa.svg';
import americanexpressIcon from '~/assets/svg/americanexpress.svg';
</script>
