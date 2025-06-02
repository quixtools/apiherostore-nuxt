<template>
  <section id="ah-mainmenu" class="shadow-sm">
    <div class="container">
      <div class="row">
        <div id="ah-mainmenu-content" class="col">
          <nav>
            <ul>
              <li v-for="item in mainmenuStore.mainmenuList" :key="item.categoryId">
                <NuxtLink :to="getCategoryAsUrl(item.categoryName, item.categoryId)">{{ item.categoryName }}</NuxtLink>
                <MainMenuSubMenu
                  v-if="item.subcategories && item.subcategories.length > 0"
                  :category-id="item.categoryId"
                  :sub-menu-list="item.subcategories"
                />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
  import { getCategoryAsUrl } from '~/helpers/url.helpers';
  const mainmenuStore = useMainMenuStore();
  useAsyncDataWrapper('mainmenu.call', mainmenuStore.getMainMenuList);
</script>
