<template>
  <v-card>
    <v-card-title>
      <v-icon>meeting_room</v-icon>
      Create Room
    </v-card-title>

    <v-form>
      <v-container>
        <v-layout>
          <v-flex xs12 >
            <v-text-field
              label="Name"
              v-model="roomName"></v-text-field>
          </v-flex>
        </v-layout>
      </v-container>
    </v-form>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn flat @click="createRoom" >Create</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import io from 'socket.io-client'

const CREATE_ROOM = 'createRoom'

export default {
  data () {
    return {
      socket: '',
      roomName: ''
    }
  },

  methods: {
    initSocket () {

    },
    createRoom () {
      this.socket.emit(CREATE_ROOM, { name: this.roomName, uid: 'justin' })
    }
  },

  mounted () {
    this.socket = io()

    this.socket.on(CREATE_ROOM, data => {
      console.log(CREATE_ROOM, data)
    })
  }
}
</script>

