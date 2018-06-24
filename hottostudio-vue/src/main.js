import Vue from 'vue';
import * as VueGoogleMaps from 'vue2-google-maps';
import App from './App';
import router from './router';

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDtvEd1IgyaNAC3mNXZjJ9XyobaKHwAvUs',
    libraries: 'places' // necessary for places input
  }
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
