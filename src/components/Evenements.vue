<template>
  <v-carousel hide-controls hide-delimiters id="evenements" class="padding-5">
    <v-carousel-item v-for="(evenement,i) in evenements" :key="i">
      <v-icon color="white" size="100px">keyboard_arrow_right</v-icon>
      <span class="nom-evenement">{{ evenement.nom_evenement }}</span> {{ evenement.lieu_evenement }} du {{ evenement.date_debut_evenement }} au {{ evenement.date_fin_evenement }}
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
      this.$http.get('http://127.0.0.1/project_php_Back/public/evenements')
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
  line-height: 150px;
  text-overflow: ellipsis;
}

.nom-evenement{
  font-weight: bold;
}

</style>
