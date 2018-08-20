<template>
  <v-container grid-list-md >
    <v-layout row wrap >
      <v-flex xs12 md8>
        <v-card>
          <v-card-title>Join Room</v-card-title>

          <v-list>
            <v-list-tile v-for="room in rooms" :key="room.id" >
              <v-list-tile-content>
                <h3>{{ room.name }}</h3>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
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

import { mapGetters, mapMutations } from 'vuex'

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

  computed: {
    ...mapGetters('rooms', {
      rooms: 'rooms'
    })
  },

  methods: {
    ...mapMutations({
      setRooms: 'rooms/rooms'
    }),

    logRooms (data) {
      console.log('rooms: ', data)
    },

    assignRooms (data) {
      this.logRooms(data)

      this.setRooms(data)
    }
  },

  mounted () {
    console.log('mounted')
    this.socket = io()
    this.socket.emit(GET_ROOMS, '')
    this.socket.on(GET_ROOMS, this.assignRooms)
  }
}
</script>
