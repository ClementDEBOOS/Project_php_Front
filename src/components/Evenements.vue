<template>
 <v-container id="evenements" grid-list-md>
    <v-layout column>
      <v-layout row wrap>
        <v-flex xs9>
          <v-carousel hide-controls hide-delimiters class="evenements">
            <v-carousel-item v-for="(evenement,i) in evenements" :key="i">
              <v-icon style="color: rgb(255, 255, 255);">keyboard_arrow_right</v-icon>
              <span class="nom-evenement">{{ evenement.nom_evenement }}</span>
              <span class="contenu-actu">{{ evenement.lieu_evenement }}</span>
              <span class="date-actu">du {{ evenement.date_debut_evenement }} au {{ evenement.date_fin_evenement }}</span>
            </v-carousel-item>
          </v-carousel>
        </v-flex>
      </v-layout>
    </v-layout>
  </v-container>
</template>

<script>

export default {
  name: 'Actus',
  data () {
    return {
      evenements: []
    }
  },
  methods: {
    getEvenements () {
      this.$http.get('http://127.0.0.1/php_ecran_rest_api/public/evenements')
        .then(response => {
          this.evenements = response.body
        })
    }
  },
  mounted () {
    this.getEvenements()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.evenements{
  background-color:#e74856;
  font-size: 18px;
  height: auto;
}

.nom-evenement{
  display: inline;
  font-weight: bold;
}

.lieu-evenement{
  display: inline;
}

.date-evenement{
  display: inline;
}

.card{
  background-color: rgba(0, 0, 0, 0.5);
  padding:8px;
  color:white;
}

</style>
