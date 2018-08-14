<template>
  <v-container grid-list-md >
    <v-layout row wrap >
      <v-flex xs12 md8>
        <v-card>
          <v-card-title>Join Room</v-card-title>
        </v-card>
      </v-flex>

      <v-flex xs12 md4>
        <app-create-room />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import CreateRoom from '~/components/CreateRoom'
import io from 'socket.io-client'

const GET_ROOMS = 'getRooms'

export default {
  data () {
    return {
      socket: {}
    }
  },

  components: {
    appCreateRoom: CreateRoom
  },

  methods: {
    logRooms (data) {
      console.log('rooms: ', data)
    }
  },

  mounted () {
    console.log('mounted')
    this.socket = io()
    this.socket.emit(GET_ROOMS, '')
    this.socket.on(GET_ROOMS, this.logRooms)
  }
}
</script>
