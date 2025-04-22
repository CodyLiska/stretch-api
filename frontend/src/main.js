// filepath: d:\DEVELOPMENT\JavaScript\Stretch-App-V2\frontend\src\main.js
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// Import Bootstrap's CSS
import "bootstrap/dist/css/bootstrap.min.css";

// Optionally, import Bootstrap's JavaScript components
import "bootstrap";

createApp(App).use(router).mount("#app");
