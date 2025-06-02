<template>
  <div class="container mt-3">
    <div class="row">
      <div v-for="item in productStore.saleList" :key="item.productId" class="col-12 col-md-4">
        <SaleSectionSaleItem :sale-item="item" />
      </div>
    </div>
  </div>
</template>
<script setup>
  const productStore = useProductStore();
  useAsyncDataWrapper('sales.call', productStore.getSaleList);
</script>
