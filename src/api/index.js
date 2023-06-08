import axios from "axios";

const instance = axios.create();

const insert = (into, data) => {
  return instance.post(`/${into}`, data);
};

export default {
  insert,
};
