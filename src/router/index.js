import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../components/Home'
import Workshop from '../components/Workshop';
import About from '../components/About';
import Product from '../components/Product';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      //設定路徑
      path: '/', //自訂路徑
      name: 'Home', //設定名稱
      component: Home,
    },
    {
      path: '/Workshop', 
      name: 'Workshop', 
      component: Workshop,
    },
    {
      path: '/About',
      name: 'About ',
      component: About,
    },
    {
      path: '/Product',
      name: 'Product ',
      component: Product,
    }
  ],
});