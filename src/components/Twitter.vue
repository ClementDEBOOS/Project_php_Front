<template>
  <v-container id="twitter" fluid grid-list-md>
    <v-layout column>
      <v-layout row wrap>
        <v-flex xs4>
        <div v-for="(tweet,i) in tweets" :key="i">
            <h1>Name : {{ tweet.user }}</h1>
            <h2>Text : {{ tweet.text }}</h2>
        </div>
        </v-flex>
        <v-flex xs4 text-xs-center>

        </v-flex>
        <v-flex xs4>
          <h1></h1>
          <h2></h2>
        </v-flex>
      </v-layout>
    </v-layout>
  </v-container>
</template>

<script>
/* eslint-disable handle-callback-err */

export default {
  name: 'Twitter',
  data () {
    return {

      tweets: []
    }
  },
  methods: {
    getTweets () {
      var Twit = require('twit')

      var config = require('../assets/config')
      var T = new Twit(config)

      var params = {
        q: 'rainbow',
        count: 2
      }

      T.get('search/tweets', params, gotData/* ).then(response => {
        this.tweets = response
        console.log(response)
      } */)
      function gotData (err, data, response) {
        console.log(data)
      }
    }
  },
  mounted () {
    this.getTweets()
  }
}

</script>

<style scoped>
  #twitter{
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
