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
  name: 'Informations',
  components: {
    'meteo': Meteo,
    'actus': Actus,
    'evenements': Evenements,
    'logo': Logo,
    'facebook': Facebook
  }
}
</script>

<style scoped>

</style>
