<template>
  <div class="banner-container row" style="background-image: url(https://images.unsplash.com/photo-1583209814683-c023dd293cc6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80);">
    <div class="text-banner col-12 col-lg-6 justify-content-start py-5 m-5">
      <h4 style="font-weight: light; text-align: left;">From Hamburg With Love </h4>
      <h1>WAKE UP</h1>
      <h1>AND MAKEUP</h1>
      <div class="text-p-banner d-flex">
        <div class="v2"></div>
        <!-- eslint-disable-next-line -->
        <p style="width: 80%; margin: 0;text-align: left;">Lorem ipsum dolor sit amet consectetur adipisicing, elit. Recusandae maxime cupiditate cumque eos quod, voluptate</p>
      </div>
      <div class="d-flex align-items-center">
          <!-- eslint-disable-next-line -->
          <button class="btn btn-banner btn-dark">Start Shopping <i><font-awesome-icon icon="chevron-right" /></i></button>


          <button class="btn btn-trend btn-warning">
            <i><font-awesome-icon icon="chevron-right" /></i>
          </button>
        <!-- eslint-disable-next-line -->
        <p class="ml-2" style="margin:0; text-shadow: 1px 1px 2px rgba(0,0,0,0.2); font-size: 14px;">
          See what's trending
        </p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Banner',
};
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

  .banner-container{
    height: 80vh;
    object-fit: cover;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: right;
  }
  .text-banner{
    height: max-content;
    font-family: 'Montserrat', sans-serif;
  }
  h1{
    font-weight: bolder;
    background-color: white;
    padding: 6px 16px;
    font-size: 40px;
    width: max-content;
  }

  .btn-banner {
    border-radius: 8px !important;
  }
  i {
    background-color: #fe823e;
    border-radius: 100px;
    padding: 3px 6px;
    margin-left: 12px;
  }

  .btn-trend {
    border-radius: 8px !important;
    margin-left: 16px;
  }

  .v2{
    border: 1px solid rgba(0,0,0,0.5);
    height: auto;
    margin-right: 12px;
  }

  .text-p-banner{
    margin: 24px 0;
  }
</style>
