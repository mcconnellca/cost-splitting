import Vue from 'vue'
import App from './App.vue'

import 'bootswatch/dist/minty/bootstrap.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrashAlt, faEdit, faSave, faUndo, faAngleUp, faAngleDown, faHandHoldingUsd } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faTrashAlt);
library.add(faEdit);
library.add(faSave);
library.add(faUndo);
library.add(faAngleUp);
library.add(faAngleDown);
library.add(faHandHoldingUsd);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
