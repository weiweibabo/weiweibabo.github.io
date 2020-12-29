import Vue from 'vue'
import App from './App.vue'
import router from './router';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
  router,
}).$mount('#app');
