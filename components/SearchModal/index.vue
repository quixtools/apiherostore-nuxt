<template>
  <BaseModal ref="ahmodalSearch" @hide="handleHide">
    <template #header><h5>all you need is here...</h5></template>
    <template #body>
      <BaseInput
        v-model="selectedSearchText"
        :right-icon="searchIcon"
        :custom-class="'ah-search-input'"
        @input="triggerSearch"
      />
      <div id="ah-search-results">
        <ul>
          <li v-for="item in productStore.searchResult?.productResult" :key="item.productId">
            <NuxtLink :to="getProductAsUrl(item.productName, item.productId)" @click="handleProductClick">{{ item.productName }}</NuxtLink>
          </li>
        </ul>
      </div>
    </template>
  </BaseModal>
</template>
<script setup>
  import { getProductAsUrl } from '~/helpers/url.helpers';
  import searchIcon from '~/assets/svg/search.svg';

  const productStore = useProductStore();
  const selectedSearchText = ref('');

  const ahmodalSearch = ref(null);

  const triggerSearch = useDebounceFn( () => {
    if (!selectedSearchText.value || selectedSearchText.value.length < 3) {
      productStore.resetSearchData();
      return;
    }
    productStore.searchData({ searchText: selectedSearchText.value });
  }, 500);
  const handleHide = () => {
    selectedSearchText.value = '';
    productStore.resetSearchData();
  };
  const handleProductClick = () => {
    ahmodalSearch.value.hide();
  };
</script>
