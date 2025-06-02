<template>
  <CategoryPage v-if="appStore.pageTypeByURL.type === 'c'" :category-id="appStore.pageTypeByURL.id" />
  <SubCategoryPage v-else-if="appStore.pageTypeByURL.type === 'sc'" :sub-category-id="appStore.pageTypeByURL.id" />
  <ProductPage v-else-if="appStore.pageTypeByURL.type === 'p'" :product-id="appStore.pageTypeByURL.id" />
</template>
<script setup>
  import { getProductPageDataType } from '~/helpers/url.helpers';

  const appStore = useAppStore();
  const route = useRoute();

  appStore.pageTypeByURL = ref(getProductPageDataType(route.params.id));
</script>
