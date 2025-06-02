<template>
  <Teleport :to="props.parent">
      <div class="toast-container">
            <TransitionGroup name="toast">
              <BaseToast
                v-for="item in toastProvider.handlerList"
                :key="item.id"
                :msg="item"
              />
            </TransitionGroup>
      </div>
  </Teleport>
</template>
<script setup>
import { toastProvider } from './ToastProvider';

const props = defineProps({
  parent: {
    type: String,
    default: 'body',
  },
});
</script>
<style scoped>
.toast-move,
.toast-enter-active,
.toast-leave-active {
  transition: all 0.2s ease-in-out;
}
.toast-enter-from,
.toast-leave-to {
  transform: translateX(110%);
}
.toast-enter-to,
.toast-leave-from {
  transform: translateX(0%);
}
</style>
