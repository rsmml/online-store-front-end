<template>
  <div id="products">
    <Categories />
    <div class="container">
      <ProductCard/>
    </div>
  </div>
</template>

<script>
import Categories from './products-page/Categories';
import ProductCard from './products-page/ProductCard';

export default {
  name: 'Products',
  components: {
    Categories,
    ProductCard,
  },
};
</script>

<style scoped>
</style>
