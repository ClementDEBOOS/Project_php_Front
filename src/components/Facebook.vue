<template>
  <div id="facebook">
    <div class="facebook-container">
      <div class="facebook-banner">
      </div>
      <div class="facebook-picture-container">
        <img src="../assets/facebook_logo_cesi-min.jpg"/>
      </div>
    </div>

    <div class="padding-5 posts">
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
      this.$http.get('https://graph.facebook.com/v2.12/campus.cesi.brest/posts/?access_token=EAACEdEose0cBAKWVxZBJLNmHb1b7oZBeIQ7IA1f9o2k67WhlUjbvP5tZAwKAP4sprxsk3s2wt2VxgElvfQkMbSRW0WTjGJvZBmZAt3zxV9V6iTGsQScnHxzUKFqYoMacFSnWCtoZCmGlsSqQLJIZCP7xSrwacBB1J8gr6NAsJs91mCfpSgBJaApp79ZAJ4YMhZCxAahpsrLD27AZDZD&limit=2')
        .then(response => {
          this.posts = response.body.data
        })
    },
    getMomentDate: (date) => {
      let datePost = moment(date).calendar()
      return datePost.charAt(0).toUpperCase() + datePost.slice(1)
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

  .facebook-picture-container{
      overflow: hidden;
      line-height:1;
      height:100px;
      vertical-align:middle;
      position:absolute;
      top: 20px;
      left:20px;
      border: 2px solid #fff;
      border-radius: 2px;
  }

  .facebook-picture-container img{
      height: 100px;
      width:100px;
  }

  .facebook-container{
    position:relative;
    margin-bottom:20px;
  }

  .facebook-banner{
    overflow: hidden;
    height:100px;
    background-color: #3b5998;
    border-bottom-color: rgba(0, 0, 0, .4);
  }

  .post-card{
    border: 1px solid #dddfe2;
     padding: 10px;
     background-color: white;
     font-weight:300;
     font-size:20px;
     font-family:Helvetica;
     max-height: 160px;
     text-overflow: ellipsis;
     overflow: hidden;
     border-radius:5px;
   }

   .post-date{
    color: #90949c;
   }

   .post-card:first-child {
      margin-bottom: 10px;
   }

   .post-message{
      color: #666;
   }

</style>
