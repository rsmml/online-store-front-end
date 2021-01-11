import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

const resourceUri = 'http://localhost:3000/api/v1/products';


Vue.use(Vuex);


const state = {
  products: [],
};

const getters = {
  // eslint-disable-next-line
  allProducts: state => state.products,
  // eslint-disable-next-line
  showProduct: state => (id) => {
    return state.products.filter(p => p.id === id);
  },
};

const actions = {
  getProduts({ commit }) {
    axios.get(resourceUri)
      .then((response) => {
        commit('SET_PRODUCTS', response.data.products);
      })
      .catch(error => error);
  },
};

const mutations = {
  // eslint-disable-next-line
  SET_PRODUCTS(state, products) {
    state.products = products;
  },
};

export default new Vuex.Store({
  state, getters, actions, mutations,
});
