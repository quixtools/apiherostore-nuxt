<template>
  <div class="accoridon">
    <slot />
  </div>
</template>
<script setup>
const props = defineProps({
  isMultiple: {
    type: Boolean,
    default: false,
  },
  uid: {
    type: String,
    default: '',
  },
});

onMounted(() => {
  setActiveItem(props.uid);
});

const isMultiple = ref(props.isMultiple);
const activeItem = ref(null);
function setActiveItem(val) {
  activeItem.value = val;
}

provide('isMultiple', isMultiple);
provide('activeItem', activeItem);
provide('setActiveItem', setActiveItem);
</script>
