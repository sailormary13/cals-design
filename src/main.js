import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routes from './routes.js';

Vue.use(VueRouter)

const router = new VueRouter({
  routes: Routes
});

Vue.config.productionTip = false

// global styling
import "@/assets/main.scss";

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
