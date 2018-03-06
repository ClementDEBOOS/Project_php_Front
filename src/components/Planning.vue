<template>
  <v-app id="app">
    <v-content>
      <v-container grid-list-md fluid>
        <v-layout column wrap>
          <v-flex>
            <v-layout row wrap>
              <v-flex d-flex xs12 lg6 class="padding-5">
                <div id="planning" class="planning">
                  <div class="content">
                    <img src="static/img/planning.PNG" />
                  </div>
                </div>
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
import Evenements from '@/components/Evenements'
import Logo from '@/components/Logo'

export default {
  name: 'Planning',
  components: {
    'evenements': Evenements,
    'logo': Logo
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.planning{
  height: 930px;
  text-align: center;
}
.content{
  width:100%;
  height: 100%;
  background: black;
}
</style>
