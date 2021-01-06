<template>
  <div id="categories">
    <nav>
      <ul id="array-categories" class="d-flex justify-content-around align-items-center">
        <li v-for="category in categories" :key="category">
          <p>{{ category.message }}</p>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>

export default {
  name: 'Categories',
  data() {
    return {
      categories: [
        { message: 'All' },
        { message: 'Hands' },
        { message: 'Face' },
        { message: 'Full Body' },
      ],
    };
  },
};
</script>

<style scoped>
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  p{
    color: white;
    font-weight: bolder;
    font-size: 70px;
    -webkit-text-stroke: 1px rgba(0,0,0,0.4);
  }

  p:hover {
    color: rgba(0,0,0,0.7);
  }
</style>
