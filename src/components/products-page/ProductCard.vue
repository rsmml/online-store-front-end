<template>
  <div id="product-card">
    <ul class="">
      <li v-for="product in products" :key="product.id">
        <router-link :to="'/products/' + product.product.id">
          <div class="card d-flex justify-content-start flex-column align-items-start">
            <div class="new-tag">
              <p style="margin: 0;">New</p>
            </div>
            <div @click.prevent="changeColor">
              <font-awesome-icon icon="heart" :class="{ 'heart-color': heartColor }" />
            </div>
            <!-- Image -->
            <div class="image">
              <!-- eslint-disable-next-line -->
              <cld-image cloudName="from-hamburg-with-love" :publicId="product.photos[0]" width="300" crop="scale" />
            </div>

            <!-- Text -->
            <div>
              <!-- Title -->
              <p class="cart-title">{{ product.product.title }}</p>
              <!-- Price -->
              <p class="cart-price" style="font-size: 14px;">€ {{ product.product.price }}</p>
            </div>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  data() {
    return {
      heartColor: false,
    };
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
  mounted() {
    this.$store.dispatch('getProduts');
  },
  methods: {
    changeColor() {
      this.heartColor = !this.heartColor;
    },
  },
};
</script>

<style scoped>
  ul {
    list-style: none;
    margin: 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 24px;
    justify-content: space-between;
  }
  .card {
    height: 430px;
    width: 302px;
    border: none;
    border-radius: 0;
    transition: 0.1s ease;
  }
  .card:hover {
    transform: scale(1.03);
    border: 1px solid #272727;
    z-index: 2;
  }
  li {
    height: 430px ;
    width: 302px !important;
  }
  .image {
    height: 300px;
    width: 300px;
    background-color: #eceeef;
  }
  p.cart-title, p.cart-price{
    text-align: left;
    margin: 0;
    margin-left: 0.5em;
  }
  p.cart-title{
    margin-top: 2em;
    margin-bottom: 0.5em;
  }
  .new-tag {
    position: absolute;
    background-color: #89e900;
    padding: 4px 12px;
    right: 10px;
    top: 10px;
    font-size: 13px;
  }
  svg path {
    /*color: #b0b3b9;*/
  }

  svg {
    position: absolute;
    left: 14px;
    top: 14px;
  }
  a{
    text-decoration: none;
    color: #272727;
  }
  .heart-color{
    color: red;
  }
</style>
