import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// import firebase from 'firebase';
// require('firebase/firestore');

// const config = {
//     "databaseURL": "https://soda-machine-gui2.firebaseio.com",
//     "projectId": "soda-machine-gui2",

// }
// /* Initialize firebase with your configuration */
// firebase.initializeApp(config);


// /* Bind firebase to your Vue instance */
// Vue.prototype.$firebase = firebase;

// Vue.config.productionTip = false;

import App from './App.vue'

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
