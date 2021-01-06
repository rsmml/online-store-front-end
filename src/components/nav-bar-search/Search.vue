<template>
  <div class="w-25 text-left d-flex align-items-center justify-content-between pl-5">
    <router-link to="/">
      <img src="../../assets/logo.png" class="mr-5">
    </router-link>
    <!-- <router-link to="/" class="navbar-brand">From Hamburg With Love</router-link> -->
    <!-- eslint-disable-next-line -->
    <!-- Search Form -->
    <form class="form-inline justify-content-end pr-3">
      <font-awesome-icon icon="search" />
      <!-- eslint-disable-next-line -->
      <input @focus="changeComponent" class="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search"
        aria-label="Search">
    </form>
    <!-- eslint-disable-next-line -->
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  </div>
</template>

<script>
import SearchToggle from './SearchToggle';
import { bus } from '../../main';

export default {
  name: 'Search',
  methods: {
    changeComponent() {
      bus.$emit('changeComponent', SearchToggle);
    },
  },
};
</script>

<style scoped>
  img{
    height: 40px;
  }
</style>
