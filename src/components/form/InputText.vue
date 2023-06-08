<script setup>
import { ref, watch } from "vue";

const props = defineProps({
  data: Object,
});

const emit = defineEmits(["change"]);

const value = ref(props.data.value);

watch(value, (newValue) => {
  emit("change", { [props.data.columnName]: newValue });
});
</script>

<template>
  <input
    class="py-1 px-3 border border-slate-900 rounded-md outline-none"
    v-model="value"
  />
</template>
