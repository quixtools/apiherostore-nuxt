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
  const linkList = reactive([
    { label: 'Want to Be A Seller?', link: '/'},
    { label: 'Help / FAQs', link: '/support'},
    { label: 'Contact', link: '/contact'},
    { label: 'About', link: '/about'},
    { label: 'Blog', link: '/'},
    { label: 'Privacy', link: '/'},
  ]);
</script>
