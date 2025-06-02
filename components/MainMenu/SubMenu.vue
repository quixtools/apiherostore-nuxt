<template>
  <ul class="shadow-lg">
    <li v-for="item in props.subMenuList" :key="item.subCategoryId">
      <NuxtLink :to="getSubCategoryAsUrl(item.subCategoryName, item.subCategoryId)">{{ item.subCategoryName }}</NuxtLink>
    </li>
  </ul>
</template>
<script setup>
  import { getSubCategoryAsUrl } from '~/helpers/url.helpers';
  const props = defineProps({
    categoryId: {
      type: String,
      default: '',
    },
    subMenuList: {
      type: Array,
      default: () => [],
    },
  });
</script>
