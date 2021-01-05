<template>
  <!-- eslint-disable-next-line -->
  <div class="featured-container row justify-content-between align-items-center" style="width: 100%;">

    <div class="featured-card col-lg-4 col-12">
      <img src="../../assets/featured-1.png" class="">
      <div class="text-card">
        <p>FACE</p>
        <p class="border-btn-hover">See All</p>
      </div>
      <div class="v3"></div>
    </div>


    <div class="featured-card col-lg-4 col-12">
      <img src="../../assets/featured-2.png" class="">
      <div class="text-card">
        <p>HANDS</p>
        <p class="border-btn-hover">See All</p>
      </div>
      <div class="v3"></div>
    </div>


    <div class="featured-card col-lg-4 col-12">
      <img src="../../assets/featured-3.png" class="">
      <div class="text-card">
        <p>BODY</p>
        <p class="inline border-btn-hover">See All</p>
      </div>
      <div class="v3"></div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'FeaturedList',
};
</script>

<style scoped>

.featured-card {
  display: flex;
  align-items: center;
  justify-content: center;
}
.text-card {
  flex-grow: 1;
}

.v3 {
  height: 100px;
  border: 1px solid rgba(255,255,255,0.4);
}

p {
  color: white;
}
img {
  transition: 0.25s;
}
img:hover {
  transform: scale(1.1);
}

</style>
