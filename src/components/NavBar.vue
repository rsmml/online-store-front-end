<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <div>
        <img src="../assets/logo.png" class="mr-5">
        <router-link to="/" class="navbar-brand">From Hamburg With Love</router-link>
        <!-- eslint-disable-next-line -->
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>

      <!-- Links -->
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Shop</router-link>
          </li>
          <li class="nav-item">
            <!-- eslint-disable-next-line -->
            <router-link to="/" class="nav-link">About</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/" class="nav-link">Contact</router-link>
          </li>
        </ul>

        <!-- Search Form -->
        <form class="form-inline">
          <font-awesome-icon icon="search" />
          <input class="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search"
            aria-label="Search">
        </form>

        <!-- Sign-in-out -->
        <div class="d-flex">
          <!-- eslint-disable-next-line -->
          <router-link to="/signin" class="nav-link btn nav-link">Sign In</router-link>
          <button to="/" class="btn nav-link">Log Out</button>
        </div>
      </div>

    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
};
</script>

<style scoped>
  img{
    height: 40px;
  }
</style>
