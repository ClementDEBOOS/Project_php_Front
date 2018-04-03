<template>
  <div class="padding-5">
    <div id="planning">
      <v-app>
        <v-container grid-list-xl text-xl-center class="planning-content ">
          <v-layout row wrap>
            <v-flex xs20 class="padding-5" align="center">
              <v-card dark color="purple">
                <v-card-text>Planning</v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
          <v-layout row wrap>
            <v-flex offset-xs1 class="padding-5" v-for="n in 3" :key="n">
              <v-card dark color="primary">
                <v-card-text class="px-20 text-md-left">RIL 2016</v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
          <v-layout row wrap  v-for="n in 7" :key="n">

            <v-flex offset-xs1 xs1 class="padding-5">
              <v-card dark color="primary">
                <v-card-text class="px-20 text-md-center">LUNDI</v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs2 class="padding-5">
              <v-card dark color="primary">
                <v-card-text class="px-20 text-md-center">Les veilles charrues</v-card-text>
              </v-card>
            </v-flex>
<!--fluid grid-list
            <v-flex xs1 class="padding-5">
              <v-card dark color="primary">
                <v-card-text class="px-20 text-md-center">LUNDI</v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs3 class="padding-5">
              <v-card dark color="primary">
                <v-card-text class="px-20 text-md-center">Les veilles charrues</v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs1 class="padding-5">
              <v-card dark color="primary">
                <v-card-text class="px-20 text-md-center">LUNDI</v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs3 class="padding-5">
              <v-card dark color="primary">
                <v-card-text class="px-20 text-md-center">Les veilles charrues</v-card-text>
              </v-card>
            </v-flex>-->
          </v-layout>
        </v-container>
      </v-app>
    </div>
  </div>
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
      this.$http.get('http://ecran-php.cleverapps.io/public/plannings')
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
    max-height: 910px;
    height:910px;
  }

  .planning-content{
    text-align: center;
    height: 100%;
    background: white;
  }

  .planning-content img{
    height:100%;
  }
  .padding-5{
    padding: 5px !important;
  }
</style>
