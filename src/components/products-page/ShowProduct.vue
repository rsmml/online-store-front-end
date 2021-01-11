<template>
  <div id="show-product">
    <h1>ShowPage Product</h1>
    <p>{{ product.price }}</p>
  </div>
</template>

<script>
export default {
  name: 'ShowProduct',
  data() {
    return {
      id: this.$route.params.id,
    };
  },
  computed: {
    product() {
      return this.$store.getters.showProduct(parseInt(this.id, 10))[0];
    },
  },
  mounted() {
    this.$store.dispatch('getProduts');
  },
};
</script>

<style scoped>
</style>
