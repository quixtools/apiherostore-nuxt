<template>
  <div class="formitem">
    <label
      v-if="props.label || slots.label"
      :for="props.inputId"
      :class="props.customLabelClass"
    >
      <slot name="label">{{ props.label }}</slot>
    </label>
    <div
      class="formitem-layout"
      :class="[
        props.customClass,
        {
          'focused': isFocused,
          'disabled': isDisabled,
          [stateClass]: props.state,
        },
      ]"
    >
      <BaseIcon
        v-if="props.leftIcon"
        :icon-data="props.leftIcon"
        :custom-class="computedIconClass"
        @click="() => emit('click:leftIcon')"
      />
      <textarea
        v-if="props.type === 'textarea'"
        :id="props.inputId"
        v-model="inputValue"
        :name="props.inputId"
        v-bind="$attrs"
        :disabled="isDisabled"
        :readonly="isReadonly"
        :class="props.customInputClass"
        @input="handleInput"
        @focus="isFocused = true"
        @blur="isFocused = false"
      ></textarea>
      <input
        v-else
        :id="props.inputId"
        v-model="inputValue"
        :name="props.inputId"
        :type="props.type"
        v-bind="$attrs"
        :disabled="isDisabled"
        :readonly="isReadonly"
        :class="props.customInputClass"
        @input="handleInput"
        @focus="isFocused = true"
        @blur="isFocused = false"
      />
      <BaseIcon
        v-if="props.rightIcon"
        :icon-data="props.rightIcon"
        :custom-class="computedIconClass"
        @click="() => emit('click:rightIcon')"
      />
    </div>
    <p v-if="props.showInfoLine" class="formitem-info">
      <slot name="infoLine" />
    </p>
    <p v-if="props.state" class="formitem-state">
      <slot name="stateLine" />
    </p>
  </div>
</template>
<script setup>
defineOptions({inheritAttrs: false});
const slots = useSlots();
const emit = defineEmits([ 'update:modelValue', 'click:leftIcon', 'click:rightIcon' ]);

const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: '',
  },
  inputId: {
    type: String,
    default: null,
  },
  type: {
    type: String,
    default: 'text',
  },
  label: {
    type: String,
    default: '',
  },
  leftIcon: {
    type: String,
    default: '',
  },
  rightIcon: {
    type: String,
    default: '',
  },
  customClass: {
    type: String,
    default: null,
  },
  customLabelClass: {
    type: String,
    default: null,
  },
  customInputClass: {
    type: String,
    default: null,
  },
  customIconClass: {
    type: String,
    default: null,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  readonly: {
    type: Boolean,
    default: false,
  },
  showInfoLine: {
    type: Boolean,
    default: false,
  },
  state: {
    type: String, // success, warning, error
    default: null,
  },
});

const isFocused = ref(false);

const inputValue = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value),
});
const isDisabled = computed({
  get: () => props.disabled,
  set: (value) => { return value; },
});
const isReadonly = computed({
  get: () => props.readonly,
  set: (value) => { return value; },
});
const computedIconClass = computed(() => {
  return [
    'formitem-icon',
    props.customIconClass,
  ];
});
const stateClass = computed(() => {
  return `has-${props.state}`;
});

function handleInput(event) {
  emit('update:modelValue', event.target.value);
}
</script>
