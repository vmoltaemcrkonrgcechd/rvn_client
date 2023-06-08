<script setup>
import { computed } from "vue";
import Constants from "@/constants";

const props = defineProps({
  value: null,
});

const cellClass = computed(() => {
  return {
    "text-right": typeof props.value === "number",
    "text-center": typeof props.value === "boolean",
    "lowercase py-1 px-3 border-blue-900 border-r last:border-none font-normal": true,
  };
});

const formattedValue = computed(() => {
  switch (typeof props.value) {
    case "number":
      return props.value.toFixed(Constants.FRACTION_DIGITS);
    case "boolean":
      return props.value ? "да" : "нет";
    default:
      return props.value;
  }
});
</script>

<template>
  <td :class="cellClass">{{ formattedValue }}</td>
</template>
