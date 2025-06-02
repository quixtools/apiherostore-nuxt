<template>
  <div id="ah-user-buttons">
    <BaseButton
      variant="secondary"
      type="text"
      size="sm"
      @click="isSearchModalVisible = true"
    >
      <BaseIcon :icon-data="searchIcon" class="text-2xl text-white" />
    </BaseButton>
    <BaseButton
      variant="secondary"
      type="text"
      size="sm"
      @click="isUserMenuModalVisible = true"
    >
      <BaseIcon :icon-data="userIcon" class="text-2xl text-white" />
    </BaseButton>
    <BaseButton
      variant="secondary"
      type="text"
      size="sm"
    >
      <BaseIcon :icon-data="cartIcon" class="text-2xl text-white" />
    </BaseButton>
    <BaseButton
      v-if="appStore.isMobile"
      variant="secondary"
      type="text"
      size="sm"
      @click="isMainMenuModalVisible = true"
    >
      <BaseIcon :icon-data="menuIcon" class="text-2xl text-white" />
    </BaseButton>
    <SearchModal v-model:visible="isSearchModalVisible" />
    <UserMenuModal v-model:visible="isUserMenuModalVisible" />
    <MainMenuModal v-if="appStore.isMobile" v-model:visible="isMainMenuModalVisible" />
  </div>
</template>
<script setup>
  import userIcon from '~/assets/svg/user.svg';
  import menuIcon from '~/assets/svg/menu.svg';
  import cartIcon from '~/assets/svg/cart.svg';
  import searchIcon from '~/assets/svg/search.svg';

  const appStore = useAppStore();
  const isSearchModalVisible = ref(false);
  const isUserMenuModalVisible = ref(false);
  const isMainMenuModalVisible = ref(false);
</script>
