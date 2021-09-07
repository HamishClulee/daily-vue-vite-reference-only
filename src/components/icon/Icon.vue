<script setup>
import { ICON_PATHS } from "./paths";
defineProps({
  width: {
    type: String,
    default: "24",
  },
  height: {
    type: String,
    default: "24",
  },
  color: {
    type: String,
    default: "royalblue",
  },
  icon: {
    type: String,
    required: true,
    validator(value) {
      return Object.keys(ICON_PATHS).includes(value);
    },
  },
});
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    viewBox="0 0 24 24"
    :fill="color"
    v-html="ICON_PATHS[icon]"
  >
  </svg>
</template>

<style scoped></style>
