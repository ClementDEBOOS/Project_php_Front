<template>
  <v-app id="app">
    <router-view/>
  </v-app>
</template>

<script>
export default {
  name: 'App'
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
