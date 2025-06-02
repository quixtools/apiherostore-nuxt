<template>
  <ul>
    <li v-for="item in props.subMenuList" :key="item.subCategoryId">
      <NuxtLink :to="getSubCategoryAsUrl(item.subCategoryName, item.subCategoryId)" @click="handleCategoryClick">{{ item.subCategoryName }}</NuxtLink>
    </li>
  </ul>
</template>
<script setup>
  import { getSubCategoryAsUrl } from '~/helpers/url.helpers';
  const emits = defineEmits(['category-clicked']);
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
  const handleCategoryClick = () => {
    emits('category-clicked');
  };
</script>
