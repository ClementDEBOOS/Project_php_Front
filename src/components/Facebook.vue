<template>
  <div id="facebook" class="padding-5">
    <v-flex md4 xs12 text-xs-center text-md-left class="padding-5">
      <h1 class="padding-5">FACEBOOK</h1>
    </v-flex>

    <div class="padding-5">
      <div v-for="(post, i) in posts" :key="i" class="post-card">
        <div class="post-date">{{getMomentDate(post.created_time)}}</div>
        <div class="post-message">{{ post.message }}</div>
      </div>
    </div>

  </div>
</template>

<script>

import * as moment from 'moment'
import 'moment/locale/fr'
moment.locale('fr')
export default {
  name: 'Facebook',
  data () {
    return {
      posts: []
    }
  },
  methods: {
    getPosts () {
      this.$http.get('https://graph.facebook.com/v2.12/campus.cesi.brest/posts/?access_token=EAACEdEose0cBABfwKUwfZCZCkA8Xjtnp015v3z5bO0knRtW5oXJNz55oTqgEBYTAfbxhG8CYA9d9CHKcPLnEmnCp2oSZCZBndeMwTC83ORoUr7S6CuMoVF8h3umfobkIUrmLoFFCxoADLZBYuWnsbPtnfvkmPfY3VeGnkA9y6VIxlHpNtM0ElbqYfdxvYh4dJHf4KvHpJvAZDZD&limit=2')
        .then(response => {
          this.posts = response.body.data
        })
    },
    getMomentDate: (date) => {
      return moment(date).calendar().toUpperCase()
    }

  },
  mounted () {
    this.getPosts()
  },

  computed: {
  }
}
</script>

<style scoped>

  #facebook{
    background-color: #e9ebee;
    max-height: 450px;
    height:450px;
  }

  #facebook h1{
      color:#3b5998;
   }

  #facebook .post-card{
    border: 1px solid #dddfe2;
    padding: 10px;
    background-color: white;
    color:black;
    margin-bottom: 10px;
    font-weight:300;
    font-size:20px;
    font-family:Helvetica;
    max-height: 177px;
    text-overflow: ellipsis;
    overflow: hidden;
    border-radius:5px;
  }

</style>
