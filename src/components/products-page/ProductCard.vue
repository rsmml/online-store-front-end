<template>
  <div id="product-card">
    <ul class="">
      <li v-for="product in products" class="" :key="product.id">
        <div class="card d-flex justify-content-between flex-column">
          <!-- Title -->
          <p class="cart-title">{{ product.title }}</p>

          <!-- Price -->
          <p class="cart-price">EUR {{ product.price }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
  mounted() {
    this.$store.dispatch('getProduts');
  },
};
</script>

<style scoped>
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .card {
    height: 300px;
    width: 300px;
    box-shadow: 2px 2px 10px rgba(0,0,0,0.1)
  }
</style>
