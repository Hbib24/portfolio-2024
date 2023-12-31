/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from "./App.vue";
import "./assets/main.scss";
import "animate.css";

// Composables
import { createApp } from "vue";

// Plugins
import { registerPlugins } from "@/plugins";
import { createI18n } from "vue-i18n";
import messages from "@intlify/unplugin-vue-i18n/messages";

const app = createApp(App);

registerPlugins(app);

const i18n = createI18n({
  locale: "en",
  warnHtmlMessage: false,
  messages,
});

app.use(i18n).mount("#app");
