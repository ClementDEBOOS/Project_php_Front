<template>
  <v-layout id="meteo" column class="padding-5">

    <v-flex>
      <v-layout row wrap>
        <v-flex md4 xs12 text-xs-center text-md-left class="padding-5">
          <h1>AUJOURD'HUI</h1>
          <h2>BREST</h2>
        </v-flex>
        <v-flex md4 xs12 text-xs-center class="padding-5">
          <p class="day-temperature text-xs-center">{{weatherData[0].temp}}°</p>
        </v-flex>
        <v-flex md4 xs12 text-xs-center text-md-right class="padding-5">
          <div class="weather-icon-container">
            <svgicon :name="weatherData[0].img" class="weather-icon-big"></svgicon>
          </div>
        </v-flex>
      </v-layout>
    </v-flex>
    <v-flex>
      <v-layout row wrap>
        <v-flex xs12 md4 v-for="n in 3" :key="n" class="padding-5">
          <v-card>
            <v-layout row wrap>
              <v-flex xl4 xs12 text-xs-center>
                <h3 class="capitalize">{{ weatherData[n].day }}</h3>
              </v-flex>
              <v-flex xl4 xs12 text-xs-center>
                <p class="other-temperature text-xs-center">{{weatherData[n].temp}}°</p>
              </v-flex>
              <v-flex xl4 xs12 text-xs-center>
                <div class="weather-icon-container">
                  <svgicon :name="weatherData[n].img" class="weather-icon-small"></svgicon>
                 </div>
              </v-flex>
            </v-layout>
          </v-card>
        </v-flex>
      </v-layout>
    </v-flex>

  </v-layout>
</template>

<script>
import '../icons'
import moment from 'moment'

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
        console.log(response.body)
        let data = response.body
        let day0 = data.list[0]
        let day1 = data.list[8]
        let day2 = data.list[16]
        let day3 = data.list[24]

        // List of objects {temperature, image}
        // today
        this.weatherData.push({
          temp: this.kelvinToCelsius(day0.main.temp),
          img: day0.weather[0].main,
          day: moment(day0.dt_txt, 'YYYY-MM-DD HH:mm:ss', 'fr').format('dddd')
        })
        // day + 1
        this.weatherData.push({
          temp: this.kelvinToCelsius(day1.main.temp),
          img: day1.weather[0].main,
          day: moment(day1.dt_txt, 'YYYY-MM-DD HH:mm:ss', 'fr').format('dddd')
        })
        // day + 2
        this.weatherData.push({
          temp: this.kelvinToCelsius(day2.main.temp),
          img: day2.weather[0].main,
          day: moment(day2.dt_txt, 'YYYY-MM-DD HH:mm:ss', 'fr').format('dddd')
        })
        // day + 3
        this.weatherData.push({
          temp: this.kelvinToCelsius(day3.main.temp),
          img: day3.weather[0].main,
          day: moment(day3.dt_txt, 'YYYY-MM-DD HH:mm:ss', 'fr').format('dddd')
        })

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

<style scoped>

#meteo{
  background-color:#0078d7;
  min-height: 450px;
}

.card{
  background-color: rgba(0, 0, 0, 0.5);
  padding:8px;
  color:white;
}

.day-temperature{
  font-size:92px;
}

.other-temperature{
  font-size:42px;
}

.weather-icon-big, .weather-icon-small{
   fill: white;
   float:right;
}

.weather-icon-container{
  display:inline-block;
}

.weather-icon-small{
  width:75px;
}

.weather-icon-big{
  width:150px;
}

</style>
