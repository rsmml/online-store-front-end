<template>
  <div class="align-items-end row">
    <!-- Picture -->
    <div class="col-lg-3 col-12 d-flex justify-content-center">
      <img src="../../assets/featured.png" class="featured-picture">
    </div>

    <!-- Banner -->
    <div class="col-lg-9 col-12">

      <!-- Title -->
      <div class="row featured-title d-flex justify-content-center align-items-center">
        <div class="d-flex align-items-center col-12 col-lg-12" style="padding-left: 0px;">
          <i class=""><font-awesome-icon icon="burn" /></i>
          <p>Featured</p>
        </div>
      </div>

      <!-- Cards -->
      <div class="featured-bar d-flex">
        <FeaturedList />
      </div>
    </div>
  </div>
</template>

<script>
import FeaturedList from './FeaturedList';

export default {
  name: 'Featured',
  components: {
    FeaturedList,
  },
};
</script>

<style scoped>

.featured-container{
  padding: 24px;
}

.featured-picture{
  height: 300px;
  margin: 24px 40px 0px 40px;
}

.featured-bar {
  background-color: #23212b;
  border-radius: 18px 0 0 0;
}

.featured-title {
  height: 44px;
  margin: 40px 0;
}
i{
  font-size: 26px;
  background-color: #e67f00;
  padding: 2px 12px;
  border-radius: 50%;
}
p {
  margin: 0 0 0 36px;
  font-size: 22px;
}
img{

}

</style>
