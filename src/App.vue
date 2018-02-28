<template>
  <v-app id="app">
    <v-container id="meteo" grid-list-md fluid>
      <v-layout column>

        <v-flex>
          <v-layout row>
            <v-flex>
              <v-layout column>
                <v-flex>
                  <meteo></meteo>
                </v-flex>
                <v-flex>
                  <twitter></twitter>
                </v-flex>
              </v-layout>
            </v-flex>
            <v-flex>
              <actus></actus>
            </v-flex>
          </v-layout>
        </v-flex>

        <v-flex>
          <evenements></evenements>
        </v-flex>

      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
import Meteo from '@/components/Meteo'
import Twitter from '@/components/Twitter'
import Actus from '@/components/Actus'
import Evenements from '@/components/Evenements'

export default {
  name: 'App',
  components: {
    'meteo': Meteo,
    'twitter': Twitter,
    'actus': Actus,
    'evenements': Evenements
  }
}
</script>

<style>
  #app {
    background-color: black;
    font-family: 'Roboto', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, p, span{
    font-weight: normal;
    color:white;
  }

  .content{
    padding:8px;
  }
</style>
