import Vue from 'vue';
import Router from 'vue-router';
import App from './App.vue';
import router from './router/router';
import VeeValidate from 'vee-validate';

Vue.use(VeeValidate);

Vue.use(Router);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router,
}).$mount('#app');
