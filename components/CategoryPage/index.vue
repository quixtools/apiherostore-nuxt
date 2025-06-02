<template>
  <div class="container my-4">
    <div class="row">
      <div class="ah-productlisting-page col-12">
        <div class="ah-breadcrumb-container"><NuxtLink to="/">Home</NuxtLink> > {{ mainmenuStore.getCategoryName(props.categoryId) }}</div>
        <main>
          <ListSort />
          <p v-if="!handleCallState.is('store.getProducts').sending && productStore.productList.length < 1">No Product Found...</p>
          <p v-if="handleCallState.is('store.getProducts').sending" class="text-center">
            <BaseIcon :icon-data="loadingIcon" class="ah-rotate360" />
          </p>
          <div class="ah-productlisting-grid">
            <template  v-if="!handleCallState.is('store.getProducts').sending">
              <ProductCard
                v-for="(item, index) in productStore.productList"
                :key="item.id || index"
                :product-info="item"
              />
            </template>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>
<script setup>
  import loadingIcon from '~/assets/svg/loading.svg';
  import { handleCallState } from '@/utils/handleCallState';

  const mainmenuStore = useMainMenuStore();
  const productStore = useProductStore();

  const props = defineProps({
    categoryId: {
      type: String,
      default: '',
    },
  });

  useHead({
    title: `${useRuntimeConfig().public.titleBaseText}${mainmenuStore.getCategoryName(props.categoryId)}`,
  });

  productStore.resetPorductListRequest();
  productStore.productListRequest.categoryId = props.categoryId;

  useAsyncDataWrapper(`product.listbycategory.${props.categoryId}`, productStore.getProductList);
</script>
