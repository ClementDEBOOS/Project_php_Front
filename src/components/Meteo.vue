<template>
 <v-container id="meteo" grid-list-md>
    <v-layout column>
      <v-layout row wrap>
        <v-flex xs4>
          <h1>AUJOURD'HUI</h1>
          <h2>BREST</h2>
        </v-flex>
        <v-flex xs4 text-xs-center>
          <p class="temperature">{{day0Temperature}}°</p>
        </v-flex>
        <v-flex xs4>
          <h1>AUJOURD'HUI</h1>
          <h2>BREST</h2>
        </v-flex>
      </v-layout>
      <v-layout row wrap>
        <v-flex xs4 v-for="i in 3" :key="`4${i}`">
          <v-card>
            <v-layout row wrap>
              <v-flex xs4>
              LUNDI
              </v-flex>
              <v-flex xs4>
              {{day+i+Temperature}}°
              </v-flex>
              <v-flex xs4>
              LUNDI
              </v-flex>
            </v-layout>
          </v-card>
        </v-flex>
      </v-layout>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'Meteo',
  data () {
    return {
      day0Temperature: 8,
      day1Temperature: 8,
      day2Temperature: 8,
      day3Temperature: 8
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#meteo{
  background-color:#0078d7;
}

.card{
  background-color: rgba(0, 0, 0, 0.5);
  padding:8px;
  color:white;
}

</style>
