<template>
  <div class="row mt-5">
    <div class="col-12">
      <div v-for="(item, index) in props.reviews" :key="index" class="ah-reviewbox">
        <p class="mb-0"><strong>{{ item.customerName }}</strong></p>
        <BaseSeperator class="my-2" color-class="bg-silver-100" />
        <p class="mb-4 text-right"><BaseIcon :icon-data="starIcon" custom-class="text-amber-500 me-1" /> {{ item.rating }}</p>
        <p>{{ item.comment }}</p>
      </div>
    </div>
  </div>
</template>
<script setup>
  import starIcon from '~/assets/svg/star.svg';

  const props = defineProps({
    reviews: {
      type: Array,
      default: () => [],
    },
  });
</script>
