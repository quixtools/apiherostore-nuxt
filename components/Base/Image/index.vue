<template>
    <img
      v-if="isVisible"
      :src="src"
      :alt="alt"
      :width="width"
      :class="imgClass"
      loading="lazy"
      @load="onLoad"
    />
    <div v-else v-html="svgPlaceholder" />
</template>

<script setup>
  const props = defineProps({
    src: { type: String, required: true },
    alt: { type: String, default: '' },
    width: { type: [String, Number], default: '100%' },
    height: { type: [String, Number], default: '100%' },
    imgClass: { type: String, default: '' },
    placeholderColor: { type: String, default: '#868e96' },
    textColor: { type: String, default: '#dee2e6' },
  });

  const isVisible = ref(false);
  let observer;

  const svgPlaceholder = computed(() => {
    return `
      <svg xmlns="http://www.w3.org/2000/svg" width="${props.width}" height="${props.height}" role="img" aria-label="Placeholder Image" preserveAspectRatio="xMidYMid slice">
        <rect width="100%" height="100%" fill="${props.placeholderColor}"></rect>
        <text x="50%" y="50%" fill="${props.textColor}" dy=".3em" text-anchor="middle" alignment-baseline="middle" font-size="20">* * *</text>
      </svg>
    `;
  });

  onMounted(() => {
    const el = document.querySelector(`[data-src="${props.src}"]`) || document.body;
    if ('IntersectionObserver' in window) {
      observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          isVisible.value = true;
          observer.disconnect();
        }
      });
      observer.observe(el);
    } else {
      isVisible.value = true;
    }
  });

  onBeforeUnmount(() => {
    if (observer) observer.disconnect();
  });
</script>
