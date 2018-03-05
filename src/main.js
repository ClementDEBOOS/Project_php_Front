import Vue from 'vue'
import App from './App'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader
import Timeline from 'vue-tweet-embed/timeline'
import VueResource from 'vue-resource'
import * as svgicon from 'vue-svgicon'
import VueMoment from 'vue-moment'

Vue.use(VueMoment)
Vue.use(VueResource)
Vue.config.productionTip = false
Vue.use(Vuetify)
Vue.use(Timeline)
Vue.use(svgicon, {
  tagName: 'svgicon',
  classPrefix: 'vue-svg'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {App},
  template: '<App/>'
})
