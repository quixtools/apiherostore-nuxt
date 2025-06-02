<template>
  <BaseModal ref="ahModalUserMenu" :is-drawer="true">
    <template #body>
      <div v-if="status !== 'loading'">
        <div v-if="status === 'authenticated'" id="ah-profilebox" class="text-center">
          <img
            id="ah-profile-img"
            class="shadow-md"
            :src="userStore.userData.image"
            :alt="userStore.userData.name"
          />
          <span class="text-base"><strong>{{ userStore.userData.name }}</strong></span>
          <BaseSeperator color-class="bg-silver-100" />
          <ul id="ah-profile-menu">
            <li><NuxtLink to="/profile" @click="handleMenuClick">Profile</NuxtLink></li>
            <li><NuxtLink to="/">Cart</NuxtLink></li>
            <li><NuxtLink to="/orders" @click="handleMenuClick">Orders</NuxtLink></li>
            <li><NuxtLink to="/support" @click="handleMenuClick">Support</NuxtLink></li>
            <li>
              <BaseButton
                label="Logout"
                type="text"
                variant="error"
                size="sm"
                @click="handleLogout"
              />
            </li>
          </ul>
        </div>
        <div v-else id="ah-profilebox" class="text-center">
          <BaseIcon :icon-data="userIcon" class="text-6xl mb-3" />
          <NuxtLink to="/login">Login</NuxtLink>
        </div>
      </div>
    </template>
  </BaseModal>
</template>
<script setup>
  import userIcon from '~/assets/svg/user.svg';

  const userStore = useUserStore();
  const { status, signOut } = useAuth();

  const ahModalUserMenu = ref(null);

  const handleMenuClick = () => {
    ahModalUserMenu.value.hide();
  };
  const handleLogout = () => {
    signOut();
  };
</script>
