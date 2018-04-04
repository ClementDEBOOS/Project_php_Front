<template>
  <v-layout column wrap class="padding-5">
      <v-flex class="padding-5" id="planning">
          <v-layout row wrap class="layout-center">
            <v-flex offset-xs1 xs10 class="padding-5">
              <v-card class="edit_title">
                <v-card-text>Planning</v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
          <v-layout class="layout-center">
            <v-flex v-for="(planning,i) in plannings" :key="i">
              <v-layout row wrap>
                <v-flex xs10 offset-xs1 class="padding-5">
                    <v-card-text class="class_text text-md-left" >{{planning.formation}}</v-card-text>
                </v-flex>
              </v-layout>
              <v-layout  row wrap >
                <v-flex offset-xs1 xs4 class="padding-5 line_border">
                  <v-card class="color_days">
                    <v-card-text class="px-20 text-md-center">LUNDI</v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs6 class="padding-5">
                  <v-card class="color_classroom">
                    <v-card-text class="px-20 text-md-center">{{planning.lundi_salle}}</v-card-text>
                  </v-card>
                </v-flex>
                <v-flex offset-xs1 xs4 class="padding-5 line_border">
                  <v-card class="color_days">
                    <v-card-text class="px-20 text-md-center">MARDI</v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs6 class="padding-5">
                  <v-card class="color_classroom">
                    <v-card-text class="px-20 text-md-center">{{planning.mardi_salle}}</v-card-text>
                  </v-card>
                </v-flex>
                <v-flex offset-xs1 xs4 class="padding-5 line_border">
                  <v-card class="color_days">
                    <v-card-text class="px-20 text-md-center">MERCREDI</v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs6 class="padding-5">
                  <v-card class="color_classroom">
                    <v-card-text class="px-20 text-md-center">{{planning.mercredi_salle}}</v-card-text>
                  </v-card>
                </v-flex>
                <v-flex offset-xs1 xs4 class="padding-5 line_border">
                  <v-card class="color_days">
                    <v-card-text class="px-20 text-md-center">JEUDI</v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs6 class="padding-5">
                  <v-card class="color_classroom">
                    <v-card-text class="px-20 text-md-center">{{planning.jeudi_salle}}</v-card-text>
                  </v-card>
                </v-flex>
                <v-flex offset-xs1 xs4 class="padding-5 line_border">
                  <v-card class="color_days">
                    <v-card-text class="px-20 text-md-center">VENDREDI</v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs6 class="padding-5">
                  <v-card class="color_classroom">
                    <v-card-text class="px-20 text-md-center">{{planning.vendredi_salle}}</v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-flex>
          </v-layout>
      </v-flex>
  </v-layout>
</template>

<script>

export default {
  name: 'Planning',
  data () {
    return {
      plannings: []
    }
  },
  methods: {
    // Récupération des actus
    getPlannings () {
      this.$http.get('http://127.0.0.1/Project_php_back-master/public/plannings')
        .then(response => {
          this.plannings = response.body // On insére les données récupérées dans la variable 'actus'
        })
    }
  },
  mounted () {
    this.getPlannings()
  }
}
</script>

<style scoped>
  #planning{
    min-height: 900px;
    max-height:900px;
    background-color: white;
  }

  .class_text{
    font-size: 26px;
    color: black;
    font-weight: bold;
  }
  .color_classroom{
    font-size: 20px;
    color: white;
    font-weight: bold;
    background: #3FC380;
  }
  .color_days{
    font-size: 20px;
    color: white;
    font-weight: bold;
    background: #6C7A89;
  }
  .line_border{
    border-left: #3FC380 3px solid;
  }
  .edit_title{
    font-size: 30px;
    color: white;
    font-weight: bold;
    background: #2574A9;
  }
  .layout-center{
    padding-top: 80px;
  }
</style>
