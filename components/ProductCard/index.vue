<template>
  <div class="ah-productcard-container">
    <NuxtLink :to="getProductAsUrl(props.productInfo.url,props.productInfo.productId)">
      <div class="ah-productcard-card">
        <div>
          <BaseImage
            :src="props.productInfo.productImage"
            :alt="props.productInfo.productName"
            :data-src="props.productInfo.productImage"
          />
          <div class="ah-productcard-rating">
            <BaseIcon :icon-data="starIcon" custom-class="text-amber-500 me-1" />
            <strong>{{ calculateProductRating(props.productInfo.reviews) }}</strong>
          </div>
          <div v-if="props.productInfo.salePrice" class="ah-productcard-salebadge">
            <strong>Sale</strong>
          </div>
        </div>
        <div>
          <span class="ah-productcard-name">{{ props.productInfo.productName }}</span>
          <span class="ah-productcard-brand">{{ props.productInfo.brand }}</span>
          <div class="ah-productcard-price" :class="{'ah-productcard-price-withsale': props.productInfo.salePrice}">
            <span v-if="props.productInfo.salePrice" class="ah-productcard-price-sale">${{ props.productInfo.salePrice }}</span>
            <span class="ah-productcard-price-base">${{ props.productInfo.productPrice }}</span>
          </div>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>
<script setup>
  import { getProductAsUrl } from '~/helpers/url.helpers';
  import { calculateProductRating } from '~/helpers/product.helpers';
  import starIcon from '~/assets/svg/star.svg';
  const props = defineProps({
    productInfo: {
      type: Object,
      default: () => {},
    },
  });
</script>
