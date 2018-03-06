<template>
  <v-app id="app">
    <v-content>
      <v-container grid-list-md fluid>
        <v-layout column wrap>

          <v-flex>
            <v-layout row wrap>
              <v-flex d-flex xs12 lg6>
                <v-layout column wrap>
                  <v-flex class="padding-5">
                    <meteo></meteo>
                  </v-flex>
                  <v-flex class="padding-5">
                    <facebook></facebook>
                  </v-flex>
                </v-layout>
              </v-flex>
              <v-flex d-flex xs12 lg6 class="padding-5">
                <actus></actus>
              </v-flex>
            </v-layout>
          </v-flex>

          <v-flex>
            <v-layout row wrap>
              <v-flex d-flex xs12 md10 class="padding-5">
                 <evenements></evenements>
              </v-flex>
              <v-flex d-flex xs12 md2 class="padding-5">
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
import Actus from '@/components/Actus'
import Evenements from '@/components/Evenements'
import Logo from '@/components/Logo'
import Facebook from '@/components/Facebook'

export default {
  name: 'App',
  components: {
    'meteo': Meteo,
    'actus': Actus,
    'evenements': Evenements,
    'logo': Logo,
    'facebook': Facebook
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
  h1{
    font-size: 30px;
  }
  h2{
    font-size: 26px;
  }
  h3{
    font-size: 24px;
  }

  .padding-5{
    padding: 5px !important;
  }

  .container.grid-list-md {
      padding: 0;
  }

  .container {
      margin: 0;
      padding: 0;
  }

  .container.grid-list-md :not(:only-child) .layout:last-child {
      margin-bottom: 0;
  }
  .container.grid-list-md :not(:only-child) .layout:first-child {
      margin-top: 0;
  }
  .container.grid-list-md .layout:only-child {
      margin: 0;
  }

  .container.grid-list-md .layout .flex {
      padding: 0;
  }

  @media only screen and (min-width: 1920px){
    ::-webkit-scrollbar {
        display: none;
    }
  }

  @media only screen and (max-width: 599px){
    .container {
        padding: 0;
    }
  }

  .carousel {
      height: 100%;
      width: 100%;
      position: relative;
      overflow: hidden;
      -webkit-box-shadow: none;
      box-shadow: none;
  }

  .application .theme--light.jumbotron__content, .theme--light .jumbotron__content {
      color: white;
  }

</style>
