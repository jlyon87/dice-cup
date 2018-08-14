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
            <v-btn flat @click="join" to="/rooms" >Enter</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      userName: ''
    }
  },

  created () {
    console.log(this.$router.options.routes)
  },

  methods: {
    join () {
      console.log('joining', this.userName)
    }
  }
}
</script>
