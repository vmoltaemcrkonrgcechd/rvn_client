<script setup>
import InputText from "@/components/form/InputText.vue";
import { onMounted } from "vue";
import Button from "@/components/form/Button.vue";
import Constants from "@/constants";

const props = defineProps({
  element: Object,
});

const emit = defineEmits(["msg"]);

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
  props.element.data.fields.forEach((i) => {
    form[i.data.columnName] = i.data.value;
  });
});

const onChange = (value) => {
  form = { ...form, ...value };
};

const confirm = () => {
  emit("msg", props.element.data.type, {
    tableName: props.element.tableName,
    data: form,
  });
};
</script>

<template>
  <form
    @submit.prevent
    class="rounded-md shadow-2xl bg-white p-4 grid grid-cols-2 gap-4"
  >
    <component
      v-for="field in element.data.fields"
      :key="field.id"
      :is="getComponent(field.type)"
      :data="field.data"
      @change="onChange"
    />

    <Button @click="confirm" label="Подтвердить" class="col-span-2" />
  </form>
</template>
