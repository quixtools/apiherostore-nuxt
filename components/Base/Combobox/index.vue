<template>
  <div class="formitem">
    <label
      v-if="props.label || slots.label"
      :for="props.inputId"
      :class="props.customLabelClass"
    >
      <slot name="label">{{ props.label }}</slot>
    </label>
    <div class="combobox">
      <select v-model="selectedItem" @change="handleChange">
        <option v-for="(item, index) in optionList" :key="index" :value="item.id">{{ item.name }}</option>
      </select>
    </div>
  </div>
</template>
<script setup>
  defineOptions({inheritAttrs: false});
  const slots = useSlots();
  const props = defineProps({
    modelValue: {
      type: Number,
      default: 0,
    },
    optionList: {
      type: Array,
      default: () => [],
    },
    label: {
      type: String,
      default: '',
    },
    customLabelClass: {
      type: String,
      default: '',
    },
  });
  const emit = defineEmits([ 'update:modelValue', 'change' ]);

  const selectedItem = ref(props.modelValue);
  const handleChange = () => {
    emit('update:modelValue', selectedItem.value);
    emit('change');
  };
</script>
