import Vue from 'vue';
import App from './App.vue';
import './styles/global.less';
import router from './router';
import showMessage from "@/utils/showMessage";
Vue.prototype.$showMessage = showMessage;
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
