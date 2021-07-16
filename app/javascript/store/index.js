import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  count: 0,
  name: 'Nate'
};

const mutations = {
  ADD_COUNT(state) {
    state.count++
  },
};

const actions = {
  addCount({commit}) {
    commit('ADD_COUNT')
  }
};

export default new Vuex.Store({
  state,
  mutations,
  actions
});