<template>
  <div id="actus" class="padding-5">
    <h1 class="padding-5">ACTUALITES</h1>
    <div class="actu-content">
      <v-carousel hide-controls hide-delimiters class="padding-5" interval="15000" text-center>
        <v-carousel-item v-for="(actu,i) in actus" :key="i">
          <v-avatar size="400px">
            <img id="image_actu" :src="'static/' + actu.image_url_actualite" alt="Image de l'actu"/>
          </v-avatar>

          <div class="actu-text">
            <h2>{{ actu.titre_actualite }}</h2>
            {{ actu.contenu_actualite }}
          </div>
        </v-carousel-item>
      </v-carousel>
    </div>
  </div>
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
      this.$http.get('http://ecran-php.cleverapps.io/public/actus')
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
  min-height: 900px;
}

.image_actu{
  display: block;
}

.actu-text{
  text-align: justify;
  text-align-last: center;
  font-weight: 300;
}

.actu-text h2{
  text-transform: uppercase;
}

.carousel{
    height: 100%;
 }

 .actu-content{
   max-height: 843px;
   text-align: center;
 }

.card{
  background-color: rgba(0, 0, 0, 0.5);
  padding:8px;
  color:white;
}

</style>
