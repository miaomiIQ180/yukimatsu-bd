/* eslint-disable perfectionist/sort-imports */
import { Icon } from "@iconify/vue";
import { createApp } from "vue";
import App from "./App.vue";

// #region : CSS
import "@/assets/css/reset.css";
import "@/assets/css/variable.scss";
import "@/assets/css/transition.scss";
import "@/assets/css/main.scss";
//  #endregion

// #region : v-viewer
import "viewerjs/dist/viewer.css";
import VueViewer from "v-viewer";
// #endregion

// #region : route guard
const { pw } = useUrlSearchParams();
console.log(import.meta.env.MODE);
if (import.meta.env.MODE !== "development" && pw !== "Yukimatsu1225!") {
  window.location.replace("/");
  throw new Error("Password not match");
}
// #endregion

const app = createApp(App);

// Plugins
app.use(VueViewer);

// Global Component
app.component("Icon", Icon);

// Mount it
app.mount("#app");
