<template>
 <v-container id="meteo" grid-list-md fluid>
    <v-layout column>
      <v-layout row wrap>
        <v-flex xs4>
          <h1>AUJOURD'HUI</h1>
          <h2>BREST</h2>
        </v-flex>
        <v-flex xs4 text-xs-center>
          <p class="first-temperature text-xs-center">{{weatherData[0].temp}}°</p>
        </v-flex>
        <v-flex xs4>
          <svgicon :name="weatherData[0].img" class="vue-svg-big"></svgicon>
        </v-flex>
      </v-layout>
      <v-layout row wrap>

        <v-flex xs4 v-for="n in 3" :key="n">
          <v-card>
            <v-layout row wrap>
              <v-flex xs4>
              LUNDI
              </v-flex>
              <v-flex xs4>
                <p class="other-temperature text-xs-center">{{weatherData[n].temp}}°</p>
              </v-flex>
              <v-flex xs4>
                <svgicon :name="weatherData[n].img" class="vue-svg-small"></svgicon>
              </v-flex>
            </v-layout>
          </v-card>
        </v-flex>

      </v-layout>
    </v-layout>
  </v-container>
</template>

<script>
import '../icons'

export default {
  name: 'Meteo',
  data () {
    return {
      weatherData: [],
      brestCityId: 6448047,
      appId: '6958ece8f81cbd2cbca041c143226006'
    }
  },
  methods: {
    getBrestWeatherData: function () {
      this.$http.get('http://api.openweathermap.org/data/2.5/forecast?id=' + this.brestCityId + '&appid=' + this.appId).then(response => {
        // success callback
        // get body data
        let data = response.body
        let day0 = data.list[0]
        let day1 = data.list[8]
        let day2 = data.list[16]
        let day3 = data.list[24]
        //  const days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche']

        // List of objects {temperature, image}
        // today
        this.weatherData.push({temp: this.kelvinToCelsius(day0.main.temp), img: day0.weather[0].main})
        // day + 1
        this.weatherData.push({temp: this.kelvinToCelsius(day1.main.temp), img: day1.weather[0].main})
        // day + 2
        this.weatherData.push({temp: this.kelvinToCelsius(day2.main.temp), img: day2.weather[0].main})
        // day + 3
        this.weatherData.push({temp: this.kelvinToCelsius(day3.main.temp), img: day3.weather[0].main})

        console.log(this.weatherData)
      }, response => {
        // error callback
      })
    },
    kelvinToCelsius: function (kelvinTemperature) {
      return Math.round(kelvinTemperature - 273.15)
    }
  },
  mounted: function () {
    this.getBrestWeatherData()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#meteo{
  background-color:#0078d7;
}

.card{
  background-color: rgba(0, 0, 0, 0.5);
  padding:8px;
  color:white;
}

.first-temperature{
  font-size:72px;
}

.other-temperature{
  font-size:42px;
}

.vue-svg-small, .vue-svg-big{
   fill: white;
   float:right;
}

.vue-svg-small{
  width:75px;
}

.vue-svg-big{
  width:150px;
}

</style>
