<template>
  <v-app>
    <app-header />
    <v-content>
      <v-container>
        <nuxt/>
      </v-container>
    </v-content>
    <app-footer />
  </v-app>
</template>

<script>
import Header from '~/components/Header'
import Footer from '~/components/Footer'
import socket from '~/plugins/socket-io'

export default {
  components: {
    appHeader: Header,
    appFooter: Footer
  },

  mounted () {
    window.socket = socket
  }
}
</script>
