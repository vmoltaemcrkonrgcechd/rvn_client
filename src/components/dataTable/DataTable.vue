<script setup>
import Utils from "@/utils/index.js";
import BodyCell from "@/components/dataTable/BodyCell.vue";
import HeadCell from "@/components/dataTable/HeadCell.vue";

defineProps({
  element: Object,
});
</script>

<template>
  <table class="w-full table-fixed rounded-md overflow-hidden shadow-2xl">
    <thead>
      <tr class="bg-blue-900">
        <HeadCell
          v-for="column in element.data.columns"
          :key="column"
          :value="Utils.getDisplayNameOrColumnName(column)"
        />
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="row in element.data.rows"
        :key="row"
        class="bg-white even:bg-blue-50"
      >
        <BodyCell
          v-for="column in element.data.columns"
          :key="column"
          :value="Utils.getValueByKey(row, column.columnName)"
        />
      </tr>
    </tbody>
  </table>
</template>
