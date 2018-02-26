<template>
  <v-app id="app">
    <meteo></meteo>
    <actus></actus>
    <twitter></twitter>
    <evenements></evenements>
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

.background-blue2{
  background-color:#0099bc;
}

.background-red{
  background-color:#e74856;
}

.background-yellow{
  background-color:#ffb900;
}

#app {
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
