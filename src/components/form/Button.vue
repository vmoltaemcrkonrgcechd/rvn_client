<script setup>
defineProps({
  label: String,
});
</script>

<template>
  <button
    class="uppercase py-1 px-3 text-white font-medium rounded-md bg-blue-900"
  >
    {{ label }}
  </button>
</template>
