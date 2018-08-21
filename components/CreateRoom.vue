<template>
  <v-card>
    <v-list>
      <v-list-tile>
        <v-list-tile-action>
          <v-icon>meeting_room</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>
            Create Room
          </v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>

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
import socket from '~/plugins/socket-io'

const CREATE_ROOM = 'createRoom'

export default {
  data () {
    return {
      roomName: ''
    }
  },

  methods: {
    initSocket () {

    },
    createRoom () {
      socket.emit(CREATE_ROOM, { name: this.roomName, uid: 'justin' })
    }
  },

  mounted () {
    socket.on(CREATE_ROOM, data => {
      console.log(CREATE_ROOM, data)
    })
  }
}
</script>

