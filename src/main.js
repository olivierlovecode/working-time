import Vue from "vue";
import App from "./App.vue";
import "./element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "./styles/common.scss"
import "./assets/css/reset.css"
import router from './router';

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");