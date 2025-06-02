<template>
    <div class="container my-4">
      <div class="row">
        <div class="ah-productlisting-page col-12">
          <div class="ah-breadcrumb-container">
            <NuxtLink to="/">Home</NuxtLink> >
            <NuxtLink :to="getCategoryAsUrl(mainmenuStore.getCategoryName(splitedCategoryId), splitedCategoryId)">{{ mainmenuStore.getCategoryName(splitedCategoryId) }}</NuxtLink> >
            {{ mainmenuStore.getSubCategoryName(splitedCategoryId, props.subCategoryId) }}
          </div>
          <main>
            <ListSort />
            <p v-if="!handleCallState.is('store.getProducts').sending && productStore.productList.length < 1" class="text-center">No Product Found...</p>
            <p v-if="handleCallState.is('store.getProducts').sending" class="text-center">
              <BaseIcon :icon-data="loadingIcon" class="ah-rotate360" />
            </p>
            <div class="ah-productlisting-grid">
              <template v-if="!handleCallState.is('store.getProducts').sending">
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
  import { getCategoryAsUrl } from '~/helpers/url.helpers';
  const mainmenuStore = useMainMenuStore();
  const productStore = useProductStore();

  const props = defineProps({
    subCategoryId: {
      type: String,
      default: '',
    },
  });
  
  useHead({
    title: `${useRuntimeConfig().public.titleBaseText}${mainmenuStore.getSubCategoryName(props.subCategoryId.split('-')[0], props.subCategoryId)}`,
  });

  const splitedCategoryId = computed(() => {
    return props.subCategoryId.split('-')[0] || '';
  });

  productStore.resetPorductListRequest();
  productStore.productListRequest.subCategoryId = props.subCategoryId;

  useAsyncDataWrapper('mainmenu.call', mainmenuStore.getMainMenuList);
  useAsyncDataWrapper(`product.listbysubcategory.${props.subCategoryId}`, productStore.getProductList);
</script>
