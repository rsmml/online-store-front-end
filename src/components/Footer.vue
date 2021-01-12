<template>
  <div id="footer" class="mt-5">
    <div class="top-footer container d-flex py-5">
      <div class="d-flex flex-column align-items-start mr-5">
        <h1>Online Shop</h1>
        <router-link to="/">Order & Delivery</router-link>
        <router-link to="/">Payment methods</router-link>
        <router-link to="/">Customer account</router-link>
      </div>
      <div class="d-flex flex-column align-items-start mx-5">
        <h1>About Us</h1>
        <router-link to="/">News</router-link>
        <router-link to="/">Career</router-link>
        <router-link to="/">Investments</router-link>
      </div>
      <div class="d-flex flex-column align-items-start mx-5 flex-grow-1">
        <h1>Help</h1>
        <router-link to="/">Order Status</router-link>
        <router-link to="/">Returns</router-link>
        <router-link to="/">Contact Us</router-link>
        <router-link to="/">Payment Options</router-link>
      </div>
      <div class="d-flex align-items-start" style="color:#b8bfc7;">
        <router-link to="/" style="font-size: 25px !important">
          <font-awesome-icon class="mx-2" :icon="['fab', 'twitter-square']" />
        </router-link>
        <router-link to="/" style="font-size: 25px !important">
          <font-awesome-icon class="mx-2" :icon="['fab', 'facebook-square']" />
        </router-link>
        <router-link to="/" style="font-size: 25px !important">
          <font-awesome-icon class="mx-2" :icon="['fab', 'instagram-square']" />
        </router-link>
        <router-link to="/" style="font-size: 25px !important">
          <font-awesome-icon class="mx-2" :icon="['fab', 'linkedin']" />
        </router-link>
      </div>
    </div>
    <div class="bottom-footer d-flex container mt-2">
      <font-awesome-icon icon="map-marker-alt" style="color:white; font-size: 12px;"/>
      <p>Hamburg, Deutschland</p>
      <p class="flex-grow-1">© 2021 From Hamburg With Love GmbH. All Rights Reserved</p>
      <router-link to="/" style="font-size: 12px !important">Impressum</router-link>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Footer',
};
</script>

<style scoped>
#footer {
  background-color: #2c3e52;
}
h1{
  font-size: 18px;
  color: white;
}
a{
  font-size: 14px;
  text-decoration: none;
  color: white;
  transition: 0.2s;
}
a:hover{
  color: #b8bfc7;
}
.top-footer {
  border-bottom: 1px solid #b8bfc7;
}
p{
  color: white;
  font-size: 12px;
  margin-left: 12px;
}

</style>
