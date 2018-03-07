<template>
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
</template>

<script>
import Meteo from '@/components/Meteo'
import Actus from '@/components/Actus'
import Facebook from '@/components/Facebook'

export default {
  name: 'Informations',
  components: {
    'meteo': Meteo,
    'actus': Actus,
    'facebook': Facebook
  }
}
</script>

<style scoped>

</style>
