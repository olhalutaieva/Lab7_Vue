// store.js

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    user: null, // Тут буде зберігатися аутентифікований користувач
    isAuthenticated: false // Це можна використовувати для перевірки статусу аутентифікації користувача
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user
      state.isAuthenticated = !!user
    },
    LOGOUT(state) {
      state.user = null
      state.isAuthenticated = false
    }
  },
  actions: {
    loginUser({ commit }, user) {
      commit('SET_USER', user)
    },
    logoutUser({ commit }) {
      commit('LOGOUT')
    }
  }
})

export default store