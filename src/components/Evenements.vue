<template>
  <v-carousel hide-controls hide-delimiters id="evenements" class="padding-5">
    <v-carousel-item v-for="(evenement,i) in evenements" :key="i">
      <div class="event-content">
        <v-icon color="white" size="150px">keyboard_arrow_right</v-icon>
        <span class="event-text"><span class="nom-evenement">{{ evenement.nom_evenement }}</span> {{ evenement.lieu_evenement }} du {{ evenement.date_debut_evenement }} au {{ evenement.date_fin_evenement }}</span>
      </div>
    </v-carousel-item>
  </v-carousel>
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
    // http://192.168.43.76:8081/project_php_Back-master
      this.$http.get('http://ecran-php.cleverapps.io/public/evenements')
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

}

.event-content{
  vertical-align:middle;
}

</style>
