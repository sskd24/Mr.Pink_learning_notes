import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import movieDetail from './movieDetail'
export default new Vuex.Store({
  modules: {
    movieDetail
  }
})