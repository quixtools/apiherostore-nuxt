<template>
  <BaseModal ref="ahModalFilter" :is-drawer="true">
    <template #body>
      <div class="row">
        <div class="col">
          <BrandSelection class="mb-3" />
        </div>
      </div>
      <div class="row">
        <div class="col">
          <BaseInput
            v-model="selectedMaxPrice"
            type="number"
            label="Max Price"
            min="0"
            max="1000"
            step="0.1"
          />
        </div>
      </div>
      <div class="row">
        <div class="col">
          <BaseInput
            v-model="selectedMinPrice"
            type="number"
            label="Min Price"
            min="0"
            max="1000"
            step="0.1"
          />
        </div>
      </div>
    </template>
    <template #footer>
      <BaseButton
        label="Filter"
        block
        @click="handleFilterClick"
      />
    </template>
  </BaseModal>
</template>
<script setup>
  const productStore = useProductStore();

  const selectedMaxPrice = ref(0);
  const selectedMinPrice = ref(0);
  const ahModalFilter = ref(null);

  const handleFilterClick = () => {
    if (productStore.selectedBrands && productStore.selectedBrands.length > 0) {
      productStore.productListRequest.brand = productStore.selectedBrands;
    } else {
      delete productStore.productListRequest.brand;
    }
    if (selectedMaxPrice.value) {
      productStore.productListRequest.productPriceEnd = parseFloat(selectedMaxPrice.value);
    } else {
      delete productStore.productListRequest.productPriceEnd;
    }
    if (selectedMinPrice.value) {
      productStore.productListRequest.productPriceStart = parseFloat(selectedMinPrice.value);
    } else {
      delete productStore.productListRequest.productPriceStart;
    }
    productStore.getProductList();
    ahModalFilter.value.hide();
  };
</script>
