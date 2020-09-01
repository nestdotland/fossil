import Vue from 'vue'
import App from './App.vue'

import "bulma/css/bulma.css"
import "./assets/nest-style.scss"

import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch, faArchive } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faSearch, faArchive)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
