<template>
  <div id="facebook" class="padding-5">
    <h1 class="padding-5">FACEBOOK</h1>

    <div class="padding-5">
      <div v-for="(post, i) in posts" :key="i" class="post-card">
        <div class="post-date">{{ post.created_time }}</div>
        <div class="post-message">{{ post.message }}</div>
      </div>
    </div>

  </div>
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
      this.$http.get('https://graph.facebook.com/v2.12/campus.cesi.brest/posts/?access_token=EAACEdEose0cBAD68gzZBsdLNZAgusZCPFkoHcZB8gFGu9ltr8LGeAlSpH59ahRVZC0QqGIZBg2xJAlzZBtuZASme1urI9bnAVDHsROLJh6QAV66Fh49aWZA8ZBWHDGLhiX0TZAZBQpk2tOewZBPVTw8oUVO2NLeSlLzcKKjjrAv0X2zZBmxXJzgP7AJ0Qgwzs1ZAxxZCaHy1rZAsdV7CqggZDZD&limit=2')
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
    max-height: 194px;
    text-overflow: ellipsis;
    overflow: hidden;
    border-radius:5px;
  }

</style>
