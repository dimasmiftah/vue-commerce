import Vue from "vue";
import App from "./App.vue";
import router from "./router";
global.jQuery = require('jquery');
var $ = global.jQuery;
window.$ = $;
import "popper.js";
import "bootstrap";
import "./assets/scss/app.scss";
import {fb} from '@/firebase'


Vue.config.productionTip = false;
Vue.component("Navbar", require("./components/Navbar.vue").default);

let app = ''

fb.auth().onAuthStateChanged(function(user) {
  if (!app) {
    new Vue({
      router,
      render: h => h(App)
    }).$mount("#app");
  } 
});

