<template>
  <div class="panel ah-brand-selection">
    <div v-for="(item, index) in productStore.brandList" :key="index">
      <input v-model="productStore.selectedBrands" type="checkbox" :value="item.value" /><label>{{ item.value }}</label>
    </div>
  </div>
</template>
<script setup>
  const productStore = useProductStore();

  useAsyncDataWrapper(`product.getbrands`, productStore.getBrandList);
</script>
