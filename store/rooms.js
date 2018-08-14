const namespaced = true

const state = {
  rooms: [],
  currentRoom: ''
}

const getters = {
  rooms: state => state.rooms,
  currentRoom: state => state.currentRoom
}

const mutations = {}

const actions = {}

export default {
  namespaced,
  state,
  getters,
  mutations,
  actions
}
