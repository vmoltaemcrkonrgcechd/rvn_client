<script setup>
import DataTable from "@/components/dataTable/DataTable.vue";

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
</script>

<template>
  <div class="h-screen w-screen p-8 bg-slate-50">
    <DataTable :data="data" />
  </div>
</template>
