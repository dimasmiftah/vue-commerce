import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import jQuery from "jquery";
window.$ = window.jQuery = jQuery;
import "popper.js";
import "bootstrap";
import "./assets/scss/app.scss";

Vue.config.productionTip = false;
Vue.component("Navbar", require("./components/Navbar.vue").default);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
