import Vue from 'vue'
import Vuex from 'vuex'
import { basket } from './modules/basket'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    activeStory: 'home'
  },
  mutations: {
    setActiveStory(state: any, story: string) {
      state.activeStory = story
    }
  },
  actions: {
  },
  modules: {
    basket
  },
  getters: {
    activeStory(state: any) {
      return state.activeStory
    }
  }
})
