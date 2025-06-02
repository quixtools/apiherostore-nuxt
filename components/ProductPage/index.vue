<template>
  <div class="container my-4">
    <div class="row">
      <div class="col-12">
        <div class="ah-breadcrumb-container">
          <NuxtLink to="/">Home</NuxtLink> >
          <NuxtLink :to="getCategoryAsUrl(productStore.productDetail.categoryName, productStore.productDetail.categoryId)">{{ productStore.productDetail.categoryName }}</NuxtLink> >
          <NuxtLink :to="getSubCategoryAsUrl(productStore.productDetail.subCategoryName, productStore.productDetail.subCategoryId)">{{ productStore.productDetail.subCategoryName }}</NuxtLink> >
          {{ productStore.productDetail.productName }}
        </div>
        <main class="mt-4">
          <div class="row">
            <div class="col-12 col-md-6 mb-5 ah-productdetail-img">
              <img :src="productStore.productDetail.productImage" :alt="productStore.productDetail.productName" />
              <div v-if="productStore.productDetail.salePrice" class="ah-productdetail-salebadge">
                <strong>Sale</strong>
              </div>
            </div>
            <div class="col-12 col-md-6">
              <h1 class="mb-3">{{ productStore.productDetail.productName }}</h1>
              <p class="mb-0 text-silver-500">{{ productStore.productDetail.brand }}</p>
              <BaseSeperator class="my-2" color-class="bg-silver-100" />
              <p class="text-right">
                <BaseIcon :icon-data="starIcon" custom-class="text-amber-500 me-1" />
                <strong>{{ calculateProductRating(productStore.productDetail.reviews) }}</strong>
              </p>
              <p class="mt-4 mb-5">{{ productStore.productDetail.productDescription }}</p>
              <p v-if="productStore.productDetail.salePrice" class="text-2xl text-right">
                <strong>${{ productStore.productDetail.salePrice }}</strong>
                <span class="text-base text-silver-500 text-through ms-3">${{ productStore.productDetail.productPrice }}</span>
              </p>
              <p v-else class="text-2xl text-right">
                <strong>${{ productStore.productDetail.productPrice }}</strong>
              </p>
              <div class="text-right">
                <BaseButton
                  label="Add to Cart"
                />
              </div>
            </div>
          </div>
          <ProductPageReviewBox :reviews="productStore.productDetail.reviews" />
        </main>
      </div>
    </div>
  </div>
</template>
<script setup>
  import { getCategoryAsUrl, getSubCategoryAsUrl } from '~/helpers/url.helpers';
  import { calculateProductRating } from '~/helpers/product.helpers';
  import starIcon from '~/assets/svg/star.svg';
  const productStore = useProductStore();

  const props = defineProps({
    productId: {
      type: String,
      default: '',
    },
  });

  await useAsyncDataWrapper(`product.productdetail.${props.productId}`, productStore.getProductDetail, props.productId);
  
  useHead({
    title: `${useRuntimeConfig().public.titleBaseText}${productStore.productDetail.productName}`,
  });
</script>
