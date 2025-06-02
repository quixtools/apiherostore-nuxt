<template>
  <BaseModal ref="ahModalMainMenuMobile" :is-drawer="true">
    <template #body>
      <nav id="ah-mainmenumobile">
        <ul>
          <li v-for="item in mainmenuStore.mainmenuList" :key="item.categoryId">
            <NuxtLink :to="getCategoryAsUrl(item.categoryName, item.categoryId)">{{ item.categoryName }}</NuxtLink>
            <MainMenuModalSubMenu
              v-if="item.subcategories && item.subcategories.length > 0"
              :category-id="item.categoryId"
              :sub-menu-list="item.subcategories"
              @category-clicked="handleCategoryClick"
            />
          </li>
        </ul>
      </nav>
    </template>
  </BaseModal>
</template>
<script setup>
  import { getCategoryAsUrl } from '~/helpers/url.helpers';

  const mainmenuStore = useMainMenuStore();
  const ahModalMainMenuMobile = ref(null);

  useAsyncDataWrapper('mainmenu.call', mainmenuStore.getMainMenuList);

  const handleCategoryClick = () => {
    ahModalMainMenuMobile.value.hide();
  };
</script>
