<script setup>
import InputText from "@/components/form/InputText.vue";
import { onMounted } from "vue";
import Button from "@/components/form/Button.vue";
import Constants from "@/constants";

const props = defineProps({
  data: Object,
});

const getComponent = (type) => {
  switch (type) {
    case Constants.INPUT_TEXT_TYPE_NAME:
      return InputText;

    default:
      return null;
  }
};

let form = {};

onMounted(() => {
  props.data.fields.forEach((i) => {
    form[i.data.columnName] = i.data.value;
  });
});

const onChange = (value) => {
  form = { ...form, ...value };
};
</script>

<template>
  <form
    @submit.prevent
    class="rounded-md shadow-2xl bg-white p-4 grid grid-cols-2 gap-4"
  >
    <component
      v-for="field in data.fields"
      :key="field.id"
      :is="getComponent(field.type)"
      :data="field.data"
      @change="onChange"
    />

    <Button label="Подтвердить" class="col-span-2" />
  </form>
</template>
