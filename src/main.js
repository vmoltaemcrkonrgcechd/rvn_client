import { createApp } from "vue";
import App from "@/App.vue";
import Router from "@/router";
import { createPinia } from "pinia";
import { Chart as ChartJs, registerables } from "chart.js";
import "@/index.css";

ChartJs.register(...registerables);

createApp(App).use(Router).use(createPinia()).mount("#app");
