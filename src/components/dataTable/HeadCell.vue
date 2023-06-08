<script setup>
import { computed } from "vue";

defineProps({
  value: String,
});

const cellClass = computed(() => {
  return {
    "uppercase py-1 px-3 text-white font-medium": true,
  };
});
</script>

<template>
  <th :class="cellClass">{{ value }}</th>
</template>
