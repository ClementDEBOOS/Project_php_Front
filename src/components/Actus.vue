<template>
  <v-layout column wrap id="actus" class="padding-5 text-xs-center">
    <v-flex>
      <h1 class="padding-5" text-xs-center>ACTUALITES</h1>
    </v-flex>
    <v-flex>
      <div class="actu-content ellipsis-container">
        <!-- Défilement des actus -->
        <v-carousel hide-controls hide-delimiters class="padding-5" interval="8000" text-center>
          <v-carousel-item v-for="(actu,i) in actus" :key="i">

            <v-avatar size="400px">
              <img id="actu-image" :src="'static/img/' + actu.image_url_actualite" alt="Image de l'actu"/>
            </v-avatar>

            <div class="actu-text ellipsis-text">
              <h2>{{ actu.titre_actualite }}</h2>
              {{ actu.contenu_actualite }}
            </div>

          </v-carousel-item>
        </v-carousel>
      </div>
    </v-flex>
  </v-layout>
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
    // Récupération des actus
    getActus () {
      this.$http.get('http://ecran-php.cleverapps.io/public/actus')
        .then(response => {
          this.actus = response.body // On insére les données récupérées dans la variable 'actus'
        })
    }
  },
  mounted () {
    this.getActus()
  }
}
</script>

<style scoped>
#actus{
  background-color:#ffb900;
  min-height: 900px;
}

.actu-image{
  display: block;
}

.actu-text{
  text-align: justify;
  text-align-last: center;
  font-weight: 500;
  font-size:26px;
  margin-top: 30px;
  padding: 10px;
}

.actu-text h2{
  text-transform: uppercase;
  margin-bottom: 10px;
}

.carousel{
    height: 100%;
 }

 .actu-content{
   max-height: 825px;
   text-align: center;
 }

.card{
  background-color: rgba(0, 0, 0, 0.5);
  padding:8px;
  color:white;
}

</style>
