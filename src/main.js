import Vue from 'vue';
import App from './App.vue';
import './styles/global.less';
import router from './router';
import {showMessage} from "@/utils";
import './mock';
import './eventBus';
import vLoading from '@/directives/loading';
import vLazy from '@/directives/lazy';
import store from './store';
Vue.directive("lazy",vLazy);
Vue.directive('loading',vLoading);
Vue.prototype.$showMessage = showMessage;

store.dispatch('setting/fetchData')

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app');


