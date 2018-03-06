<template>
  <v-app id="app">
    <v-content>
      <v-carousel hide-controls hide-delimiters id="application" interval="25000" class="padding-5">
        <v-carousel-item>
          <informations></informations>
        </v-carousel-item>
        <v-carousel-item>
          <planning></planning>
        </v-carousel-item>
      </v-carousel>
    </v-content>
  </v-app>
</template>

<script>
import Informations from '@/components/Informations'
import Planning from '@/components/Planning'

export default {
  name: 'App',
  components: {
    'informations': Informations,
    'planning': Planning
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

  .ellipsis-container{
    min-width: 0;
  }

  .ellipsis-text{
    width:100%;
    overflow: hidden;
    text-overflow: ellipsis;
  }

</style>
