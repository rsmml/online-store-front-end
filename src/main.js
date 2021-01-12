// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueCarousel from 'vue-carousel';
import Cloudinary from 'cloudinary-vue';
import 'bootstrap'; import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFontAwesome, faTwitterSquare, faFacebookSquare, faInstagramSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faSearch, faChevronRight, faBurn, faTimes, faHeart, faStar, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import App from './App';
import router from './router';
import products from './store/products';

library.add(
  faSearch,
  faChevronRight,
  faBurn,
  faTimes,
  faHeart,
  faStar,
  faFontAwesome,
  faTwitterSquare,
  faFacebookSquare,
  faInstagramSquare,
  faLinkedin,
  faMapMarkerAlt,
);

Vue.component('font-awesome-icon', FontAwesomeIcon);

// eslint-disable-next-line
export const bus = new Vue();

Vue.config.productionTip = false;

Vue.use(VueAxios, axios, VueCarousel);
Vue.use(Cloudinary, {
  configuration: { cloudName: 'from-hamburg-with-love' },
});

/* eslint-disable no-new */
new Vue({
  store: products,
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
