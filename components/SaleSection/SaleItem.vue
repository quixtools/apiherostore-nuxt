<template>
  <NuxtLink :to="getProductAsUrl(props.saleItem.url, props.saleItem.productId)">
    <div class="ah-saleitem">
      <BaseImage
        :src="props.saleItem.productImage"
        :alt="props.saleItem.productName"
      />
      <div>
        <h4>SALE!</h4>
        <h3>{{ props.saleItem.productName }}</h3>
        <span><span><small>$</small>{{ props.saleItem.productPrice }}</span><span><small>$</small>{{ props.saleItem.salePrice }}</span></span>
      </div>
    </div>
  </NuxtLink>
</template>
<script setup>
  import { getProductAsUrl } from '~/helpers/url.helpers';
  const props = defineProps({
    saleItem: {
      type: Object,
      default: () => {},
    },
  });
</script>
