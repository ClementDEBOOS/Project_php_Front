<template>
  <div id="actus" class="padding-5">
    <h1 class="padding-5">ACTUALITES</h1>

    <v-carousel hide-controls hide-delimiters class="padding-5" interval="15000" text-center>
      <v-carousel-item v-for="(actu,i) in actus" :key="i">
        <v-avatar size="400px" text-center>
          <img :src="actu.image_url_actualite" alt="Image de l'actu">
        </v-avatar>

        <div class="contenu-actu">
          <h2>{{ actu.titre_actualite }}</h2>
          {{ actu.contenu_actualite }}
        </div>
      </v-carousel-item>
    </v-carousel>
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
      this.$http.get('http://127.0.0.1/project_php_Back/public/actus')
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

.image-actu{
  display: block;
}

.contenu-actu{
  text-align: justify;
  text-align-last: center;
}

.carousel{
    height: 100%;
 }

.card{
  background-color: rgba(0, 0, 0, 0.5);
  padding:8px;
  color:white;
}

</style>
