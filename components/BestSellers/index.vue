<template>
  <div class="container my-5">
    <div class="row">
      <div class="col-12 px-4">
        <h5>Top Sellers</h5>
      </div>
    </div>
    <div class="row">
      <div class="ah-productlisting-grid col-12">
        <ProductCard
          v-for="(item, index) in productStore.bestSellerList"
          :key="item.id || index"
          :product-info="item"
        />
      </div>
    </div>
  </div>
</template>
<script setup>
  const productStore = useProductStore();
  useAsyncDataWrapper('product.bestsellers', productStore.getBestSellers);
</script>
