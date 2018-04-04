<template>
  <div id="planning">
    <div class="padding-5">
      <v-app>
        <v-container grid-list-xl text-xl-center class="planning-content">
          <v-layout row wrap>
            <v-flex offset-xs1 xs10 class="padding-5">
              <v-card class="edit_title">
                <v-card-text>Planning</v-card-text>
              </v-card>
            </v-flex>
          </v-layout><br><br>
          <v-layout>
            <v-flex v-for="n in 3" :key="n">
              <v-layout row wrap>
                <v-flex xs10 offset-xs1 class="padding-5">
                    <v-card-text class="class_text text-md-left" >RIL 2016</v-card-text>
                </v-flex>
              </v-layout>
              <v-layout  row wrap v-for="n in 7" :key="n">
                <v-flex offset-xs1 xs3 class="padding-5 line_border">
                  <v-card class="color_days">
                    <v-card-text class="px-20 text-md-center">LUNDI</v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs7 class="padding-5">
                  <v-card class="color_classroom">
                    <v-card-text class="px-20 text-md-center">Les veilles charrues</v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-flex>
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
    height: 100%;
  }

  .planning-content{
    text-align: center;
    height: 100%;
    background: white;
  }
  .padding-5{
    padding: 5px !important;
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
</style>
