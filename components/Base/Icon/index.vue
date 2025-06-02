<template>
  <span ref="svgContainer" class="icon-container" :class="props.customClass"></span>
</template>
<script setup>
const props = defineProps({
  iconData: {
    type: String,
    default: '',
  },
  customClass: {
    type: [String, Array, Object],
    default: '',
  },
});

const svgContainer = ref(null);

watch(() => props.iconData, () => {
  convertSVG();
});

onMounted(() => {
  convertSVG();
});

function convertSVG() {
  const iconDataSplited = props.iconData.split(',');
  if (iconDataSplited.length > 1 && iconDataSplited[0].includes('data:image/svg+xml')) {
    const iconDataDecoded = decodeURI(iconDataSplited[1]);
    const domParser = new DOMParser();
    const svgDoc = domParser.parseFromString(iconDataDecoded, 'image/svg+xml');
    svgContainer.value.replaceChildren(svgDoc.documentElement);
  }
}
</script>
