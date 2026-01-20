import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./styles/components/navbar.scss";
import "./styles/components/projectcard.scss";
import "./styles/components/breadcrumbs.scss";
import "./styles/app.scss";

createApp(App).use(router).mount("#app");
