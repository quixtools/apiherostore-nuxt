<template>
  <div
    class="toast-item shadow-md"
    :class="props.msg.variant"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
  >
    <p class="font-bold" :class="variantClass">{{ props.msg.title }}</p>
    <p class="toast-msg">{{ props.msg.detail }}</p>
  </div>
</template>
<script setup>
import { toastProvider } from './ToastProvider';

const props = defineProps({
  msg: {
    type: Object,
    default: () => {},
  },
  customClass: {
    type: [String, Array, Object],
    default: '',
  },
});

const closeTimeout = ref(null); 
const remainingTimeToClose = ref(props.msg.duration);
const createdAt = ref(null);

const variantClass = computed(() => {
  return `text-${props.msg.variant}`;
});

onMounted(() => {
  startTimeout();
});

function startTimeout() {
  createdAt.value = new Date().valueOf();
  closeTimeout.value = setTimeout(() => {
    close();
  }, remainingTimeToClose.value);
};
function onMouseEnter() {
  remainingTimeToClose.value = createdAt.value + remainingTimeToClose.value - new Date().valueOf();
  createdAt.value = null;
  clearTimeout(closeTimeout.value);
  closeTimeout.value = null;
};
function onMouseLeave() {
  startTimeout();
};
function close() {
  toastProvider.remove(props.msg.id);
}

</script>
