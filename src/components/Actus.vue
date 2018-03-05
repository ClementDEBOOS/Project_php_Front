<template>
  <v-carousel hide-controls hide-delimiters id="actus" class="padding-5" interval="15000" >
    <v-carousel-item v-for="(actu,i) in actus" :key="i">
      <span class="title-actu">{{ actu.titre_actualite }}</span>
      <v-avatar size="100px">
        <img :src="actu.image_url_actualite" alt="Image de l'actu">
      </v-avatar>
      <span class="contenu-actu">{{ actu.contenu_actualite }}</span>
      <span class="date-actu">{{ actu.date_ajout_actualite }}</span>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: 'Actus',
  data () {
    return {
      actus: []
    }
  },
  methods: {
    getActus () {
      this.$http.get('http://127.0.0.1/php_ecran_rest_api/public/actus')
        .then(response => {
          this.actus = response.body
        })
    }
  },
  mounted () {
    this.getActus()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#actus{
  background-color:#ffb900;
  min-height: 840px;
}

.title-actu{
  display: block;
  font-size: 45px;
}

.image-actu{
  display: block;
}

.contenu-actu{
  display: block;
  font-size: 13px;
  padding-top: 10px;
  text-align: justify;
}

.carousel{
    height: 100%;
 }

.date-actu{
  display: block;
  text-align: right;
  font-size: 10px;
}

.card{
  background-color: rgba(0, 0, 0, 0.5);
  padding:8px;
  color:white;
}

</style>
