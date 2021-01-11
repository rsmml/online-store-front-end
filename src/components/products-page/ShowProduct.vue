<template>
  <div id="show-product" class="d-flex">
    <div class="container mx-5 px-5">
      <carousel
        :per-page="1"
        :navigationEnabled="true"
        :navigationNextLabel="'>'"
        :navigationPrevLabel="'<'"
        >
        <slide>
          <div class="featured-card col-lg-4 col-12">
            <img src="../../assets/featured-1.png" class="">
            <div class="text-card">
              <p>FACE</p>
              <p class="border-btn-hover">See All</p>
            </div>
            <div class="v3"></div>
          </div>
        </slide>
        <slide>
          <div class="featured-card col-lg-4 col-12">
            <img src="../../assets/featured-2.png" class="">
            <div class="text-card">
              <p>FACE</p>
              <p class="border-btn-hover">See All</p>
            </div>
            <div class="v3"></div>
          </div>
        </slide>
        <slide>
          <div class="featured-card col-lg-4 col-12">
            <img src="../../assets/featured-3.png" class="">
            <div class="text-card">
              <p>FACE</p>
              <p class="border-btn-hover">See All</p>
            </div>
            <div class="v3"></div>
          </div>
        </slide>
      </carousel>
    </div>
    <h1 class="w-25">ShowPage Product</h1>
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
