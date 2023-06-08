import { defineStore } from "pinia";
import { ref } from "vue";

export const useIndexStore = defineStore("index", () => {
  const elements = {};

  const setElement = (element) => {
    if (elements[element.tableName] === undefined) {
      elements[element.tableName] = {};
    }

    if (elements[element.tableName][element.id] === undefined) {
      elements[element.tableName][element.id] = ref({});
    }

    elements[element.tableName][element.id].value = element;

    return elements[element.tableName][element.id];
  };

  return {
    setElement,
  };
});
