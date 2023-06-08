const getDisplayNameOrColumnName = (from) => {
  return from.displayName || from.columnName;
};

const getValueByKey = (from, key) => {
  return from[key] ?? "нет данных";
};

const isNumber = (value) => {
  return typeof value === "number";
};

export default {
  getDisplayNameOrColumnName,
  getValueByKey,
  isNumber,
};
