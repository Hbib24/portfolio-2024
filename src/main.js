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

const queryLanguage = new URLSearchParams(window.location.search).get("lang");
const browserLanguage = navigator.language.slice(0, 2);
const i18n = createI18n({
  locale: queryLanguage || browserLanguage || "en",
  fallbackLocale: queryLanguage || browserLanguage || "en",
  warnHtmlMessage: false,
  messages,
});

app.use(i18n).mount("#app");
