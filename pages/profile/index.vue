<template>
  <div class="container my-4">
    <div class="row">
      <div class="col-12">
        <div class="ah-breadcrumb-container">
          <NuxtLink to="/">Home</NuxtLink> > Profile
        </div>
        <div class="row mt-5">
          <div class="col-2">
            <img
              id="ah-profiledetail-img"
              class="shadow-md"
              :src="userStore.userData.image"
              :alt="userStore.userData.name"
            />
          </div>
          <div class="col-10 py-3">
            <p><strong>Name: </strong> {{ userStore.userData.name }}</p>
            <p><strong>Email: </strong> {{ userStore.userData.email }}</p>
          </div>
          <div class="col-12">
            <BaseSeperator class="my-5" color-class="bg-silver-200" />
          </div>
        </div>
        <div class="row mb-3">
          <div class="col-6">
            <h2>Addresses</h2>
          </div>
          <div class="col-6 text-right">
            <BaseButton
              variant="light"
              type="text"
              size="sm"
            >
              <BaseIcon :icon-data="plusIcon" class="text-xl me-2" /> New Address
            </BaseButton>
          </div>
        </div>
        <div class="row">
          <div v-for="item in userStore.userData.address" :key="item.addressId" class="col-12 col-md-6 mb-4">
            <div class="ah-profiledetail-addressbox">
              <div class="ah-profiledetail-addressedit">
                <BaseButton
                  variant="light"
                  type="text"
                  size="sm"
                >
                  <BaseIcon :icon-data="pencilIcon" class="text-lg" />
                </BaseButton>
                <BaseButton
                  variant="error"
                  type="text"
                  size="sm"
                >
                  <BaseIcon :icon-data="trashIcon" class="text-lg" />
                </BaseButton>
              </div>
              <p class="text-md"><strong>{{ item.addressName }}</strong></p>
              <p><strong>Cantact: </strong> {{ item.name }}</p>
              <p><strong>Cantact Phone: </strong> {{ item.phone }}</p>
              <p><strong>Adress: </strong></p>
              <p class="ms-3 mb-2">{{ item.customerAddress }}</p>
              <p class="ms-3 mb-2">{{ item.customerCountry }}</p>
              <p class="ms-3 mb-2">{{ item.customerZipCode }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
  import plusIcon from '~/assets/svg/plus.svg';
  import pencilIcon from '~/assets/svg/pencil.svg';
  import trashIcon from '~/assets/svg/trash.svg';

  definePageMeta({
    layout: 'user',
  });
  useHead({
    title: `${useRuntimeConfig().public.titleBaseText}Profile`,
  });

  const userStore = useUserStore();
  useAsyncDataWrapper('user.getUserData', userStore.getUserData);
</script>
