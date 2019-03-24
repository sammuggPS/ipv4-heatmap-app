
import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
// import getters from './getters';
import mutations from './mutations';
import initialState from './initialState';

Vue.use(Vuex);

const store = new Vuex.Store({
  strict: process.env.NODE_ENV === 'development',
  state: { ...initialState },
  actions,
  mutations,
  // getters
});

export default store;