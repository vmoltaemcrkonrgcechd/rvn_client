<script setup>
import { onMounted, ref } from "vue";
import Element from "@/components/element/Element.vue";
import Constants from "@/constants";

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

const form = {
  id: 2,
  type: Constants.FORM_TYPE_NAME,
  tableName: "some_table",
  data: {
    type: "post",
    fields: [
      {
        id: 1,
        type: Constants.INPUT_TEXT_TYPE_NAME,
        data: {
          columnName: "NAME",
          value: "DEFAULT NAME",
        },
      },
      {
        id: 2,
        type: Constants.INPUT_TEXT_TYPE_NAME,
        data: {
          displayName: "ВОЗРАСТ",
          columnName: "AGE",
          value: "21",
        },
      },
    ],
  },
};

const elements = ref([element, form]);

onMounted(() => {});
</script>

<template>
  <div class="h-screen w-screen grid grid-cols-2 items-start gap-4 p-8">
    <Element v-for="element in elements" :key="element" :element="element" />
  </div>
</template>
