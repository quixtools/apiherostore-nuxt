<template>
  <div id="ah-why">
    <div class="container">
      <div class="row py-4">
        <div
          v-for="(item, index) in whyList"
          :key="index"
          class="col-12 col-md-4 ah-why-item"
        >
          <BaseIcon :icon-data="item.icon" />
          <h3 class="mt-2">{{ item.title }}</h3>
          <span>{{ item.detail }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
  import truckIcon from '~/assets/svg/truck.svg';
  import moneyIcon from '~/assets/svg/money.svg';
  import headsetIcon from '~/assets/svg/headset.svg';
  const whyList = ref([
    {
      icon: truckIcon,
      title: 'FREE SHIPPING & RETURN',
      detail: 'Free Shipping on All Orders Over 59$',
    },
    {
      icon: moneyIcon,
      title: '24/7 ONLINE SUPPORT',
      detail: 'Help with Chat or Call Center',
    },
    {
      icon: headsetIcon,
      title: 'MONEY BACK GUARANTEE',
      detail: '100% Money Back Guarantee',
    },
  ]);
</script>
