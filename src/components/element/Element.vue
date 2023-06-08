<script setup>
import { computed, onBeforeMount } from "vue";
import Constants from "@/constants";
import DataTable from "@/components/dataTable/DataTable.vue";
import { useIndexStore } from "@/stores/index.js";

const props = defineProps({
  element: Object,
});

const indexStore = useIndexStore();

let reactiveElement;

onBeforeMount(() => {
  reactiveElement = indexStore.setElement(props.element);
});

const getComponent = computed(() => {
  switch (props.element.type) {
    case Constants.TABLE_TYPE_NAME:
      return DataTable;

    default:
      return null;
  }
});

const data = computed(() => {
  return reactiveElement.value.data;
});
</script>

<template>
  <component :is="getComponent" :data="data" />
</template>
