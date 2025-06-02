<template>
  <div class="accordion-item" :class="{'active': isActive}">
    <slot></slot>
  </div>
</template>
<script setup>
const isMultiple = inject('isMultiple');
const activeItem = inject('activeItem');
const setActiveItem = inject('setActiveItem');

const props = defineProps({
  aid: {
    type: String,
    default: '',
  },
});

const isActive = ref(false);

watch(activeItem, () => {
  isActive.value = activeItem.value === props.aid;
});

function setActive() {
  isActive.value = !isActive.value;
  if (isActive.value && !isMultiple.value) {
    setActiveItem(props.aid);
  }
}

provide('isActive', isActive);
provide('setActive', setActive);
</script>
