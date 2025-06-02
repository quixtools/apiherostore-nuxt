<template>
  <Transition
    @before-enter="onBeforeEnter"
    @enter="onEnter"
    @after-enter="onAfterEnter"
    @before-leave="onBeforeLeave"
    @leave="onLeave"
  >
    <div v-if="isActive" class="accordion-collapsible">
      <div class="accordion-collapsible-content">
        <slot></slot>
      </div>
    </div>
  </Transition>
</template>
<script setup>
const isActive = inject('isActive');
function onBeforeEnter(el) {
  el.style.height = 0;
}
function onEnter(el) {
  const offsetHeight = el.querySelector('.accordion-collapsible-content').offsetHeight;
  el.style.height = `${offsetHeight}px`;
}
function onAfterEnter(el) {
  el.style.height = 'auto';
}
function onBeforeLeave(el) {
  const offsetHeight = el.querySelector('.accordion-collapsible-content').offsetHeight;
  el.style.height = `${offsetHeight}px`;
}
function onLeave(el) {
  el.style.height = '0px';
}
</script>
