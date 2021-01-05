<template>
  <div class="home-page">
    <Banner />
    <Featured />
    <ProductsHomePage />
  </div>
</template>

<script>
import Banner from '@/components/home-page/Banner';
import Featured from '@/components/home-page/Featured';
import ProductsHomePage from '@/components/home-page/ProductsHomePage';

export default {
  name: 'HomePage',
  components: {
    Banner,
    Featured,
    ProductsHomePage,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
