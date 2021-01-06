import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '@/components/HomePage';
import Products from '@/components/Products';
import About from '@/components/About';
import Contact from '@/components/Contact';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage,
    },
    {
      path: '/products',
      name: 'Products',
      component: Products,
    },
    {
      path: '/about',
      name: 'About',
      component: About,
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact,
    },
  ],
});
