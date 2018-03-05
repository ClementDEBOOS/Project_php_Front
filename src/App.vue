<template>
  <v-app id="app">
    <v-content>
      <v-container grid-list-md fluid>
        <v-layout column wrap>

          <v-flex>
            <v-layout row wrap>
              <v-flex d-flex xs12 lg6>
                <v-layout column wrap>
                  <v-flex>
                    <meteo></meteo>
                  </v-flex>
                  <v-flex>
                    <twitter></twitter>
                  </v-flex>
                </v-layout>
              </v-flex>
              <v-flex d-flex xs12 lg6>
                <actus></actus>
              </v-flex>
            </v-layout>
          </v-flex>

          <v-flex>
            <v-layout row wrap>
              <v-flex d-flex xs12 md10>
                 <evenements></evenements>
              </v-flex>
              <v-flex d-flex xs12 md2>
                 <logo></logo>
              </v-flex>
            </v-layout>
          </v-flex>

        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Meteo from '@/components/Meteo'
import Twitter from '@/components/Twitter'
import Actus from '@/components/Actus'
import Evenements from '@/components/Evenements'
import Logo from '@/components/Logo'

export default {
  name: 'App',
  components: {
    'meteo': Meteo,
    'twitter': Twitter,
    'actus': Actus,
    'evenements': Evenements,
    'logo': Logo
  }
}
</script>

<style>
  #app {
    overflow: hidden;
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

  .container.grid-list-md {
      /* padding: 10px; */
  }

  @media only screen and (max-width: 599px)
  .container {
      /* padding: 24px; */
  }

  .container {
      /* margin: auto; */
      /* padding: 16px; */
  }

  .container.grid-list-md :not(:only-child) .layout:last-child {
      /* margin-bottom: -4px; */
  }
  .container.grid-list-md :not(:only-child) .layout:first-child {
      /* margin-top: -4px; */
  }
  .container.grid-list-md .layout:only-child {
      /* margin: -4px; */
  }
</style>
