import { Icon } from "@iconify/vue";
import { createApp } from "vue";
import App from "./App.vue";

// #region : CSS
import "@/assets/css/reset.css";
import "@/assets/css/variable.scss";
import "@/assets/css/transition.scss";
import "@/assets/css/main.scss";
//  #endregion

const app = createApp(App);

// Global Component
app.component("Icon", Icon);

// Mount it
app.mount("#app");
