import Vuex from 'vuex'

import rooms from './rooms'

const createStore = () => {
  return new Vuex.Store({
    modules: {
      rooms
    }
  })
}

export default createStore
