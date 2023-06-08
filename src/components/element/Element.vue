<script setup>
import { computed, onBeforeMount } from "vue";
import Constants from "@/constants";
import DataTable from "@/components/dataTable/DataTable.vue";
import Form from "@/components/form/Form.vue";
import { useIndexStore } from "@/stores";

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

    case Constants.FORM_TYPE_NAME:
      return Form;

    default:
      return null;
  }
});

const getElement = computed(() => {
  return reactiveElement.value;
});

const onMsg = (type, payload) => {
  switch (type) {
    case Constants.POST_TYPE_NAME:
      indexStore.insert(payload);
      return;

    default:
      return;
  }
};
</script>

<template>
  <component :is="getComponent" :element="getElement" @msg="onMsg" />
</template>
