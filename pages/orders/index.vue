<template>
  <div class="container my-4">
    <div class="row">
      <div class="col-12">
        <div class="ah-breadcrumb-container">
          <NuxtLink to="/">Home</NuxtLink> > Orders
        </div>
        <div class="row mt-5">
          <div class="col-12">
            <h6>Orders</h6>
            <p></p>
            <div v-for="item in userStore.userOrders" :key="item.orderId" class="ah-orderbox">
              <div class="row mb-4">
                <div class="col-6"><span>Order: <strong class="text-base">{{ item.orderId }}</strong></span><span class="text-silver-500 ms-3">({{ convertDate(item.orderDate) }})</span></div>
                <div class="col-6 text-right"><span :class="['ah-order-statebadge', getOrderStateBG(item.orderState)]">{{ item.stateName }}</span></div>
              </div>
              <div class="row">
                <div class="col-6">
                  <table class="ah-order-producttable">
                    <tbody>
                      <tr v-for="(productItem, index) in item.products" :key="index">
                        <td><NuxtLink to="/" class="font-bold">{{ productItem.productName }}</NuxtLink> <span class="text-silver-500">x {{ productItem.count }}</span></td>
                        <td><span class="font-bold">{{ productItem.payment }}</span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="col-6 ah-orderbox-seperator">
                  <p><strong>{{ item.address.addressName }}</strong></p>
                  <p><strong>Cantact: </strong> {{ item.address.name }}</p>
                  <p><strong>Cantact Phone: </strong> {{ item.address.phone }}</p>
                  <p><strong>Adress: </strong></p>
                  <p class="ms-3 mb-2">{{ item.address.customerAddress }}</p>
                  <p class="ms-3 mb-2">{{ item.address.customerCountry }}</p>
                  <p class="ms-3 mb-2">{{ item.address.customerZipCode }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
  import { convertDate } from '~/helpers/unit.helpers';
  definePageMeta({
    layout: 'user',
  });
  useHead({
    title: `${useRuntimeConfig().public.titleBaseText}Orders`,
  });

  const userStore = useUserStore();
  useAsyncDataWrapper('user.getUserOrders', userStore.getUserOrders);

  const getOrderStateBG = (stateId) => {
    let className = '';
    switch(stateId) {
      case 1:
        className = 'bg-blue-300';
        break;
      case 2:
        className = 'bg-blue-300';
        break;
      case 3:
        className = 'bg-cyan-400';
        break;
      case 4:
        className = 'bg-cyan-400';
        break;
    }
    return className;
  };
</script>
