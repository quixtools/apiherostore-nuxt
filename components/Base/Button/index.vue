<template>
  <router-link
    v-if="props.to"
    v-bind="$attrs"
    :to="props.to"
    :class="buttonClass"
  >
    <BaseIcon v-if="leftIcon" :icon-data="leftIcon" :custom-class="[{ 'me-3': props.label, }, leftIconCss]" />
    <slot>{{ props.label }}</slot>
    <BaseIcon v-if="rightIcon && !loading" :icon-data="rightIcon" :custom-class="[{ 'ms-3': props.label, }, rightIconCss]" />
    <BaseIcon v-if="loadingIcon && loading" :icon-data="loadingIcon" :custom-class="[{ 'ms-3': props.label, }, loadingIconCss]" />
  </router-link>
  <a
    v-else-if="props.link"
    v-bind="$attrs"
    :href="props.link"
    :class="buttonClass"
  >
    <BaseIcon v-if="leftIcon" :icon-data="leftIcon" :custom-class="[{ 'me-3': props.label, }, leftIconCss]" />
    <slot>{{ props.label }}</slot>
    <BaseIcon v-if="rightIcon && !loading" :icon-data="rightIcon" :custom-class="[{ 'ms-3': props.label, }, rightIconCss]" />
    <BaseIcon v-if="loadingIcon && loading" :icon-data="loadingIcon" :custom-class="[{ 'ms-3': props.label, }, loadingIconCss]" />
  </a>
  <button
    v-else
    v-bind="$attrs"
    :class="buttonClass"
  >
    <BaseIcon v-if="leftIcon" :icon-data="leftIcon" :custom-class="[{ 'me-3': props.label, }, leftIconCss]" />
    <slot>{{ props.label }}</slot>
    <BaseIcon v-if="rightIcon && !loading" :icon-data="rightIcon" :custom-class="[{ 'ms-3': props.label, }, rightIconCss]" />
    <BaseIcon v-if="loadingIcon && loading" :icon-data="loadingIcon" :custom-class="[{ 'ms-3': props.label, }, loadingIconCss]" />
  </button>
</template>
<script setup>
const props = defineProps({
  label: {
    type: String,
    default: '',
  },
  to: {
    type: String,
    default: null,
  },
  link: {
    type: String,
    default: null,
  },
  customClass: {
    type: String,
    default: null,
  },
  variant: {
    type: String,
    default: 'primary',
  },
  type: {
    type: String, // outlined | text | action
    default: '',
  },
  size: {
    type: String, // xl | lg | sm | xs
    default: '',
  },
  leftIcon: {
    type: String,
    default: null,
  },
  leftIconCss: {
    type: String,
    default: null,
  },
  rightIcon: {
    type: String,
    default: null,
  },
  rightIconCss: {
    type: String,
    default: null,
  },
  loadingIcon: {
    type: String,
    default: null,
  },
  loadingIconCss: {
    type: String,
    default: null,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  block: {
    type: Boolean,
    default: false,
  },
});

const buttonClass = computed(() => {
  return [
    'btn',
    props.customClass,
    variantClass.value,
    typeClass.value,
    sizeClass.value,
    {
      'btn-block': props.block,
    },
  ];
});
const variantClass = computed(() => {
  return props.variant ? `btn-${props.variant}` : null;
});
const typeClass = computed(() => {
  return props.type ? `btn-${props.type}` : null;
});
const sizeClass = computed(() => {
  return props.size ? `btn-${props.size}` : null;
});
</script>
