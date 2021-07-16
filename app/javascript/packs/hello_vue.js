import Vue from 'vue/dist/vue.esm'
import Vuex from 'vuex'

import App from '../app.vue'
import store from '../store'

Vue.use(Vuex)

document.addEventListener('DOMContentLoaded', () => {
  const app = new Vue({
    el: '#hello',
    store,
    data: () => {
      return {
        message: "Can you say hello?"
      }
    },
    components: { App }
  })
})
