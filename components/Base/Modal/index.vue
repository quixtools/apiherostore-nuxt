<template>
  <Teleport :to="props.parent">
    <Transition
      :name="isDrawer ? 'drawer' : 'modal'"
      @before-enter="handleTransitionStart"
      @after-leave="handleTransitionEnd"
      @enter="handleEnter"
      @before-leave="handleLeave"
    >
      <div v-if="props.visible" :class="isDrawer ? 'drawer' : 'modal'">
        <div class="modal-content shadow-xxl">
          <div v-if="$slots.header || props.visibleCloseButton" :class="['modal-header d-flex align-items-center', modalHeaderClass]">
            <slot name="header"></slot>
            <BaseIcon :icon-data="closeIcon" custom-class="modal-close" @click="$emit('update:visible', false)" />
          </div>
          <div v-if="$slots.body" class="modal-body">
            <slot name="body"></slot>
          </div>
          <div v-if="$slots.footer" class="modal-footer">
            <slot name="footer"></slot>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
<script setup>
const slots = useSlots();
const props = defineProps({
  parent: {
    type: String,
    default: 'body',
  },
  visible: {
    type: Boolean,
    default: false,
  },
  isDrawer: {
    type: Boolean,
    default: false,
  },
  visibleCloseButton: {
    type: Boolean,
    default: true,
  },
  customClass: {
    type: [String, Array, Object],
    default: '',
  },
});
const emits = defineEmits(['update:visible', 'show', 'hide']);

const modalHeaderClass = computed(() => {
  if (!slots.header && props.visibleCloseButton) {
    return 'justify-content-end';
  } else {
    return 'justify-content-between';
  }
});

onBeforeUnmount(() => {
  handleTransitionEnd();
});

const closeIcon = ref('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 64 64"><path d="m16 13a1 1 0 0 0-3 3l16 16-16 16a1 1 0 0 0 3 3l16-16 16 16a1 1 0 0 0 3-3l-16-16 16-16a1 1 0 0 0-3-3l-16 16z" fill="currentColor"/></svg>');

function getScrollHideWidth() {
  const documentWidth = document.documentElement.clientWidth;
  return Math.abs(window.innerWidth - documentWidth);
}
function handleTransitionStart() {
  document.body.style.overflow = 'hidden';
  document.body.style.paddingRight = getScrollHideWidth() + 'px';
};
function handleTransitionEnd() {
  document.body.setAttribute('style', '');
};
function handleEnter() {
  emits('show');
}
function handleLeave() {
  emits('hide');
}
function hide() {
  emits('update:visible', false);
}
function show() {
  emits('update:visible', false);
}
defineExpose({
  hide,
  show,
});
</script>
<style scoped>
/* modal */
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
.modal-enter-to,
.modal-leave-from {
  opacity: 1;
}
.modal-enter-active,
.modal-enter-active .modal-content,
.modal-leave-active,
.modal-leave-active .modal-content {
  transition: all 0.2s ease-in-out;
}
.modal-enter-from .modal-content,
.modal-leave-to .modal-content {
  transform: translateY(-200px);
}
.modal-enter-to .modal-content,
.modal-leave-from .modal-content {
  transform: translateY(0px);
}
/* drawer */
.drawer-enter-from,
.drawer-leave-to {
  opacity: 0;
}
.drawer-enter-to,
.drawer-leave-from {
  opacity: 1;
}
.drawer-enter-active,
.drawer-enter-active .modal-content,
.drawer-leave-active,
.drawer-leave-active .modal-content {
  transition: all 0.2s ease-in-out;
}
.drawer-enter-from .modal-content,
.drawer-leave-to .modal-content {
  transform: translateX(110%);
}
.drawer-enter-to .modal-content,
.drawer-leave-from .modal-content {
  transform: translateX(0);
}
</style>
