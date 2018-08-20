const namespaced = true

const state = {
  rooms: [],
  currentRoom: ''
}

const getters = {
  rooms: state => state.rooms,
  currentRoom: state => state.currentRoom
}

const mutations = {
  rooms (state, newRooms) {
    state.rooms = newRooms
  },

  currentRoom (state, newRoom) {
    state.currentRoom = newRoom
  }
}

const actions = {}

export default {
  namespaced,
  state,
  getters,
  mutations,
  actions
}
