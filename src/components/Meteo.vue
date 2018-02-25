<template>
 <v-container id="meteo" grid-list-md>
    <v-layout row wrap>
      <v-flex xs12>
        <h1>AUJOURD'HUI</h1>
        <h2>BREST</h2>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'Meteo',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#meteo{
  background-color:#0078d7;
}
</style>
