<template>
  <!-- eslint-disable-next-line -->
  <nav class="navbar navbar-expand-lg navbar-light bg-light flex-column"  @mouseleave="shopActive = false; whatsNewActive = false">
    <div class="w-100 d-flex justify-content-between mt-4">
      <!-- LEFT -->
      <component :is="currentComp"></component>

      <!-- MIDDLE -->
      <h1>FROM HAMBURG WITH LOVE</h1>

      <!-- RIGHT -->
      <div class="w-25 d-flex justify-content-end align-items-center pr-5">
        <!-- eslint-disable-next-line -->
        <router-link to="/signin" class="nav-link btn nav-link">Sign In</router-link>
        <button to="/" class="btn nav-link">Log Out</button>
        <div class="ml-2 shopping-bag">
          <font-awesome-icon icon="shopping-bag"/>
        </div>
      </div>

    </div>
    <!-- eslint-disable-next-line -->
    <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
      <ul class="navbar-nav">
        <!-- eslint-disable-next-line -->
        <router-link to="/products" class="nav-link">
          <li class="nav-item" @mouseover="shopActive = true">
            <p class="mb-0">Shop</p>
          </li>
        </router-link>
        <!-- HOVER SHOP -->
        <transition name="fade">
          <ShopHover v-if="shopActive" style="z-index: 1;"></ShopHover>
        </transition>
        <!-- eslint-disable-next-line -->
        <router-link to="/about" class="nav-link">
          <li class="nav-item" @mouseover="whatsNewActive = true">
            <p class="mb-0">What's New</p>
          </li>
        </router-link>
        <!-- HOVER WHATSNEW -->
        <transition name="fade">
          <WhatsNewHover v-if="whatsNewActive" style="z-index: 1;"></WhatsNewHover>
        </transition>
        <!-- eslint-disable-next-line -->
        <router-link to="/contact" class="nav-link">
          <li class="nav-item">Skincare</li>
        </router-link>
        <!-- eslint-disable-next-line -->
        <router-link to="/contact" class="nav-link">
          <!-- eslint-disable-next-line -->
          <li class="nav-item d-flex justify-content-between align-items-center" style="color: #5bb4e0;">
            <p class="mb-0 mr-1">On Sale</p>
            <p class="new-tag m-0">New</p>
          </li>
        </router-link>
        <!-- eslint-disable-next-line -->
        <router-link to="/contact" class="nav-link">
          <li class="nav-item">Makeup</li>
        </router-link>
        <!-- eslint-disable-next-line -->
        <router-link to="/contact" class="nav-link">
          <li class="nav-item">Body</li>
        </router-link>
        <!-- eslint-disable-next-line -->
        <router-link to="/contact" class="nav-link">
          <li class="nav-item">Hair</li>
        </router-link>
      </ul>
    </div>
  </nav>
</template>

<script>
// import SearchToggle from './nav-bar-search/SearchToggle';
import Search from './nav-bar-search/Search';
import ShopHover from './nav-bar-hover/ShopHover';
import WhatsNewHover from './nav-bar-hover/WhatsNewHover';
import { bus } from '../main';

export default {
  name: 'NavBar',
  components: {
    ShopHover,
    WhatsNewHover,
  },
  data() {
    return {
      currentComp: Search,
      shopActive: false,
      whatsNewActive: false,
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
  methods: {
    mouseover() {
      this.shopActive = !this.shopActive;
      this.whatsNewActive = !this.whatsNewActive;
    },
  },
};
</script>

<style scoped>
  .nav-link li {
    color: #3a3b3c;
    font-weight: bolder;
    background-color: transparent;
    /*transition: 0.2s;*/
    padding: 10px 24px;
  }
  .nav-link:hover li {
    margin-bottom: -1px;
    border-bottom: 1px solid black;
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
  h1{
    font-size: 24px;
  }
  .shopping-bag:hover{
    cursor: pointer;
  }
  p.new-tag {
    color: white;
    font-size: 11px;
    margin: 0;
    background-color:#272727;
    padding: 2px 6px;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .3s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }

</style>
