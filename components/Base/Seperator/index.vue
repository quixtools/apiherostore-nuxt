<template>
  <div
    class="seperator"
    :class="props.colorClass"
    :style="seperatorStyles"
  >
    <span
      v-if="props.label"
      :class="props.labelColorClass"
      :style="seperatorLabelStyles"
    >
      {{ label }}
    </span>
  </div>
</template>
<script setup>
  const props = defineProps({
    label: {
      type: String,
      default: '',
    },
    colorClass: {
      type: String,
      default: '',
    },
    labelColorClass: {
      type: String,
      default: '',
    },
    thickness: {
      type: Number,
      default: 1,
    },
    gap: {
      type: String,
      default: '1rem',
    },
  });

  const seperatorStyles = reactive({
    height: `${props.thickness}px`,
    marginTop: props.gap,
    marginBottom: props.gap,
  });
  const seperatorLabelStyles = reactive({
    paddingLeft: '0.75rem',
    paddingRight: '0.75rem',
  });
</script>
