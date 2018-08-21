<template>
  <v-container grid-list-sm >
    <v-layout row wrap >
      <v-flex xs12 md8>
        <v-card>
          <v-card-title>Enter your name</v-card-title>

          <v-form>
            <v-container>
              <v-layout>
                <v-flex>
                  <v-text-field
                    label="Name"
                    v-model="userName" ></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
          </v-form>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn flat @click="join" >Enter</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  data () {
    return {
      userName: ''
    }
  },

  created () {
    // console.log(this.$router.options.routes)
  },

  methods: {
    ...mapMutations(['user']),

    join () {
      this.user({ name: this.userName })
      this.$router.push('/rooms')
    }
  }
}
</script>
