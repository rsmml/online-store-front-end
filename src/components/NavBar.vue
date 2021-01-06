<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="w-100 d-flex justify-content-between">
      <!-- LEFT -->
      <component :is="currentComp"></component>

      <!-- MIDDLE -->
      <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
        <ul class="navbar-nav">
          <!-- eslint-disable-next-line -->
          <router-link to="/products" class="nav-link" :class="{ 'active': isActiveShop }">
            <li class="nav-item">Shop</li>
          </router-link>
          <!-- eslint-disable-next-line -->
          <router-link to="/about" class="nav-link" :class="{ 'active': isActiveAbout }">
            <li class="nav-item">About</li>
          </router-link>
          <!-- eslint-disable-next-line -->
          <router-link to="/contact" class="nav-link" :class="{ 'active': isActiveContact }">
            <li class="nav-item">Contact</li>
          </router-link>
        </ul>
      </div>

      <!-- RIGHT -->
      <div class="w-25 d-flex justify-content-end align-items-center pr-5">
        <!-- eslint-disable-next-line -->
        <router-link to="/signin" class="nav-link btn nav-link">Sign In</router-link>
        <button to="/" class="btn nav-link">Log Out</button>
      </div>

    </div>
  </nav>
</template>

<script>
// import SearchToggle from './nav-bar-search/SearchToggle';
import Search from './nav-bar-search/Search';
import { bus } from '../main';

export default {
  name: 'NavBar',
  data() {
    return {
      currentComp: Search,
      isActiveShop: false,
      isActiveAbout: false,
      isActiveContact: false,
    };
  },
  created() {
    bus.$on('changeComponent', (data) => {
      this.currentComp = data;
    });
    bus.$on('closeComponent', (data) => {
      this.currentComp = data;
    });
  },
  watch: {
    $route(to) {
      if (to.name === 'Products') {
        this.isActiveShop = true;
        this.isActiveAbout = false;
        this.isActiveContact = false;
      } else if (to.name === 'About') {
        this.isActiveShop = false;
        this.isActiveAbout = true;
        this.isActiveContact = false;
      } else if (to.name === 'Contact') {
        this.isActiveShop = false;
        this.isActiveAbout = false;
        this.isActiveContact = true;
      } else {
        this.isActiveShop = false;
        this.isActiveAbout = false;
        this.isActiveContact = false;
      }
    },
  },
};
</script>

<style scoped>
  .nav-link li {
    color: #3a3b3c;
    font-weight: bolder;
    background-color: transparent;
    transition: 0.2s;
    border-radius: 4px;
    padding: 10px 24px;
  }
  .nav-link:hover li {
    background-color: #d9d9d9;
  }

  .active li {
    color: #3a3b3c;
    font-weight: bolder;
    background-color: transparent;
    transition: 0.2s;
    border-radius: 4px;
    padding: 10px 24px;
    background-color: #d9d9d9;
  }

</style>
