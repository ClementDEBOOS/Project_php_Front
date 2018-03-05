<template>
  <v-container id="facebook" fluid grid-list-md>
    <v-layout column>
      <v-layout row wrap>
        <v-flex xs4>
          <div v-for="(post, i) in posts" :key="i">
            <span>{{ post.created_time }}</span>
            <p>{{ post.message }}</p>
          </div>
        </v-flex>
      </v-layout>
    </v-layout>
  </v-container>
</template>

<script>

export default {
  name: 'Facebook',
  data () {
    return {
      posts: []
    }
  },
  methods: {
    getPosts () {
      this.$http.get('https://graph.facebook.com/v2.12/campus.cesi.brest/posts/?access_token=EAACEdEose0cBAJEREJAMiJg3kDxRiwxZBaAoY9o0DmU99sHISuLEgbybxkdLngF0cbSbx1lwRiLqVppEDnZBMvZCexvWgwFVTQQQlPN3hpP4CCxFny1AUpN2XTzGBKcLwuEhKADGDga1AvZCLoRk9Dj2FAXwBYWMSELqYMZBZAiW6zZCMuc9YbkpvlgWUQLqGESORdsVMCd5AZDZD&limit=3')
        .then(response => {
          this.posts = response.body.data
        })
    }
  },
  mounted () {
    this.getPosts()
  }
}
</script>

<style scoped>
  #facebook{
    background-color: #0091d7;
  }

  .card{
    background-color: rgba(0, 0, 0, 0.5);
    padding:8px;
    color:white;
  }
  .profile-img-card {
    width: 96px;
    height: 96px;
    margin: 0 auto 10px;
    display: block;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    border-radius: 50%;
  }

</style>
