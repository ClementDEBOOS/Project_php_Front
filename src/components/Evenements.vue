<template>
  <v-carousel hide-controls hide-delimiters id="evenements" class="padding-5">
    <v-carousel-item v-for="(evenement,i) in evenements" :key="i">
      <v-icon color="white" size="150px">keyboard_arrow_right</v-icon>
      <div class="event-text"><span class="nom-evenement">{{ evenement.nom_evenement }}</span> {{ evenement.lieu_evenement }} du {{ evenement.date_debut_evenement }} au {{ evenement.date_fin_evenement }}</div>
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
      this.$http.get('http://app-3e76fc09-b9d1-4f53-8bfb-b4f7730fc090.cleverapps.io/public/evenements')
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
  font-size: 28px;
  height: 150px;
  color:white;
  font-weight:300;
}

.nom-evenement{
  font-weight: bold;
}

.event-text{
  display: inline;
}

</style>
