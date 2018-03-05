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
      this.$http.get('https://graph.facebook.com/v2.12/campus.cesi.brest/posts/?access_token=EAACEdEose0cBADyPpYmtm0MK0pLXzZBzmOO0SxlACuSPqXBCokET6cMDWz3UdvHdkLaNDEYIKvoZACLNNNT6jbCKK2gz9xSN8QEnt5BebPYndDpgoqAtBZCj6ZBT75VMV97oYIj4EChTxR8XT1s7zvFyrfIQUxyt91PqSNT6x4ZAZBRdgSJz3Ns2PPWa21T7F5QdmgGvSOLAZDZD&limit=2')
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
