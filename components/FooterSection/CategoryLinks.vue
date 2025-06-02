<template>
  <div class="col-12 col-sm-6 col-lg-3 mb-4">
    <ul>
      <li v-for="(item, index) in linkList" :key="index">
        <NuxtLink :to="item.link">{{ item.label }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>
<script setup>
  import { getCategoryAsUrl } from '~/helpers/url.helpers';
  const mainmenuStore = useMainMenuStore();

  useAsyncDataWrapper('mainmenu.call', mainmenuStore.getMainMenuList);

  const linkList = computed(() => {
    return mainmenuStore.mainmenuList.map(item => ({
      label: item.categoryName,
      link: getCategoryAsUrl(item.categoryName, item.categoryId),
    }));
  });
</script>
