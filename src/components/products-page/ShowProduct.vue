<template>
  <div id="show-product" class="mt-5">
    <div class="row m-0">
      <div class="col-12 col-lg-7 container mx-5 px-5 carousel">
        <carousel
          :per-page="1"
          :navigationEnabled="true"
          :navigationNextLabel="'>'"
          :navigationPrevLabel="'<'"
          >
          <slide v-for="photo in product.photos" :key="photo.id">
            <!-- eslint-disable-next-line -->
            <cld-image cloudName="from-hamburg-with-love" :publicId="photo" crop="scale" />
          </slide>
        </carousel>
      </div>
      <!-- eslint-disable-next-line -->
      <div class="col-12 col-lg-4 d-flex flex-column align-items-start info-product justify-content-between">
        <p>Hands / Face</p>
        <div class="w-100 d-flex justify-content-between align-items-center">
          <h1>{{product.product.title}}</h1>
          <div style="color:#ffa500;" class="d-flex align-items-center">
            <font-awesome-icon icon="star"/>
            <font-awesome-icon icon="star"/>
            <font-awesome-icon icon="star"/>
            <font-awesome-icon icon="star"/>
            <font-awesome-icon icon="star"/>
            <p style="color:#2c3e52; font-size: 12px; margin: 0">(405)</p>
          </div>
        </div>
        <p>€ {{product.product.price}}</p>
        <p style="text-align: left;">{{product.product.description}}</p>
        <div class="w-100 d-flex justify-content-between">
          <button class="btn btn-dark btn-lg btn-block mr-3">Add to bag</button>
          <!-- eslint-disable-next-line -->
          <button class="btn btn-dark"><font-awesome-icon icon="heart" :class="{ 'heart-color': heartColor }" /></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';

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
  components: {
    Carousel,
    Slide,
  },
};
</script>

<style scoped>
  img{
    height: 65vh;
    width: 65vh;
  }
</style>
