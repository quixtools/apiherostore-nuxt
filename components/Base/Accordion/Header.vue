<template>
  <button class="accordion-header">
    <div class="accordion-header-content text-base text-silver-700 font-bold" @click="handleSetActive">
      <slot name="header"></slot>
      <slot name="icon"></slot>
    </div>
  </button>
</template>
<script setup>
const setActive = inject('setActive');

function handleSetActive() {
  setActive();
}
</script>
