<template>
  <div id="search-toggle" class="w-25 text-left d-flex align-items-center justify-content-end pl-5">
    <form class="form-inline justify-content-end pr-3">
      <i @click="closeComponent"><font-awesome-icon icon="times" /></i>
      <!-- eslint-disable-next-line -->
      <input class="form-control form-control-sm ml-3 w-25" type="text" placeholder="Search"
        aria-label="Search">
    </form>
  </div>
</template>

<script>
import Search from './Search';
import { bus } from '../../main';

export default {
  name: 'SearchToggle',
  methods: {
    closeComponent() {
      bus.$emit('closeComponent', Search);
    },
  },
};
</script>

<style scoped>
  form {
    z-index: 2;
    width: 85%;
    position: absolute;
    background-color: #f8f9fa;
    height: 300px;
    border-radius: 10px;
    box-shadow: 1px 1px 4px rgba(0,0,0,0.1);
  }
  i:hover {
    cursor: pointer;
  }
</style>
