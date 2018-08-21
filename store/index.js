import Vuex from 'vuex'

import rooms from './rooms'

const state = {
  user: null
}

const getters = {
  user: state => state.user
}

const mutations = {
  user (state, newUser) {
    state.user = newUser
  }
}

const createStore = () => {
  return new Vuex.Store({
    state,
    getters,
    mutations,
    modules: {
      rooms
    }
  })
}

export default createStore
