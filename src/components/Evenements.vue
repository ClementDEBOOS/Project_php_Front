<template>
  <!-- Défilement des évenements -->
  <v-carousel hide-controls hide-delimiters id="evenements" class="padding-5" reverse-transition>
    <v-carousel-item v-for="(evenement,i) in evenements" :key="i">
      <v-layout row wrap class="event-content">
        <v-flex xs1 text-xs-center>
          <v-icon color="white" size="140px">keyboard_arrow_right</v-icon>
        </v-flex>
        <v-flex xs11 text-xs-left>
          <div class="event-text"><span class="nom-evenement">{{ evenement.nom_evenement }}</span> {{ evenement.lieu_evenement }} du {{ getMomentDate(evenement.date_debut_evenement) }} au {{ getMomentDate(evenement.date_fin_evenement) }}</div>
        </v-flex>
      </v-layout>
    </v-carousel-item>
  </v-carousel>
</template>

<script>

import * as moment from 'moment'
import 'moment/locale/fr'
moment.locale('fr')
export default {
  name: 'Actus',
  data () {
    return {
      evenements: []
    }
  },
  methods: {
    // Récupération des évenements
    getEvenements () {
      this.$http.get('http://ecran-php.cleverapps.io/public/evenements')
        .then(response => {
          this.evenements = response.body // On insére les données récupérées dans la variable 'evenements'
        })
    },
    getMomentDate: (date) => {
      return moment(date).format('LLLL')
    }
  },
  mounted () {
    this.getEvenements()
  }

}
</script>

<style scoped>

#evenements{
  background-color:#e74856;
  font-size: 36px;
  height: 150px;
  color:white;
  font-weight:300;
}

.nom-evenement{
  font-weight: bold;
}

.event-text{
  vertical-align:middle;
  display:inline-block;
  line-height:1.2;
  padding: 10px;
}

.event-content{
  height: inherit;
  line-height:150px;
}

</style>
