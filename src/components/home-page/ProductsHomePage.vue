<template>
  <div class="products-container">
    <div class="nav-bar-products d-flex justify-content-center align-items-center">
      <h1 class="mb-5">Shop</h1>
    </div>

    <div class="products-grid">

    </div>
  </div>
</template>

<script>

export default {
  name: 'ProductsHomePage',
};
</script>

<style scoped>

.nav-bar-products{
  background-image: url(../../assets/products-home-page.jpg);
  background-size: cover;
  height: 400px;
  margin: 40px;
  border-radius: 16px;
  box-shadow: -2px -2px 14px rgba(0,0,0,0.1);
}

h1 {
  font-weight: bolder;
  text-shadow: 4px 4px 0px rgba(255,255,255,1)
}

</style>
