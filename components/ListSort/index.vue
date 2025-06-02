<template>
  <div class="ah-productlisting-sorting text-right px-2">
    <BaseCombobox
      v-model="selectedSort"
      :option-list="optionList"
      @change="handleChange"
    />
    <BaseButton
      variant="secondary"
      type="text"
      size="sm"
      class="mb-3"
      @click="isFilterModalVisible = true"
    >
      <BaseIcon :icon-data="filterIcon" class="text-lg text-silver-700" />
    </BaseButton>
    <ListFilter v-model:visible="isFilterModalVisible" />
  </div>
</template>
<script setup>
  import filterIcon from '~/assets/svg/filter.svg';

  const productStore = useProductStore();

  const isFilterModalVisible = ref(false);
  const selectedSort = ref(0);
  const optionList = ref([
    { id: 0, name: 'Featured'},
    { id: 1, name: 'Best Sellers'},
    { id: 2, name: 'Price: Low to High'},
    { id: 3, name: 'Price: High to Low'},
    { id: 4, name: 'Newest'},
  ]);

  const handleChange = () => {
    switch(selectedSort.value) {
      case 0:
        delete productStore.productListRequest.sortBy;
        delete productStore.productListRequest.order;
        break;
      case 1:
        productStore.productListRequest.sortBy = 'sold';
        delete productStore.productListRequest.order;
        break;
      case 2:
        productStore.productListRequest.sortBy = 'productPrice';
        productStore.productListRequest.order = 'asc';
        break;
      case 3:
        productStore.productListRequest.sortBy = 'productPrice';
        productStore.productListRequest.order = 'desc';
        break;
      case 4:
        productStore.productListRequest.sortBy = 'createDate';
        delete productStore.productListRequest.order;
        break;
      default:
        delete productStore.productListRequest.sortBy;
        delete productStore.productListRequest.order;
    }
    productStore.getProductList();
  };
</script>
