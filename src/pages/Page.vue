<script setup>
import { onMounted, ref } from "vue";
import Element from "@/components/element/Element.vue";
import Constants from "@/constants/index.js";

const columns = [
  {
    columnName: "name",
    displayName: "название",
  },
  {
    columnName: "age",
    displayName: "возраст",
  },
  {
    columnName: "price",
  },
  {
    columnName: "bool",
    displayName: "есть в наличии",
  },
];

const rows = [
  {
    name: "коносуба",
    age: 21,
    price: 41.05,
    bool: true,
  },
  {
    name: "коносуба",
    age: 21,
    price: 41.05,
    bool: false,
  },
];

const data = {
  rows,
  columns,
};

const element = {
  id: 1,
  type: Constants.TABLE_TYPE_NAME,
  tableName: "some_table",
  data,
};

const elements = ref([element]);

onMounted(() => {});
</script>

<template>
  <div class="grid grid-cols-2 h-screen w-screen items-start">
    <Element v-for="element in elements" :key="element.id" :element="element" />
  </div>
</template>
