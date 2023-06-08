import { defineStore } from "pinia";
import { ref } from "vue";
import Api from "@/api/index.js";

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

  const redraw = (tableName) => {
    Object.keys(elements[tableName]).forEach((i) => {});
  };

  const insert = ({ tableName, data }, success) => {
    Api.insert(tableName, data)
      .then(() => {
        if (typeof success === "function") {
          success();
        }

        redraw(tableName);
      })
      .catch(() => {
        redraw(tableName);
      });
  };

  return {
    setElement,
    insert,
  };
});
