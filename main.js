import App from './App'
import store from "./store/store.js"

// #ifndef VUE3
import Vue from 'vue'
import request from "./utils/request/request.js"
import path from "./path/path.js"
import uView from 'uview-ui';
Vue.use(uView);

Vue.config.productionTip = false
App.mpType = 'app'
Vue.prototype.$store = store;
Vue.prototype.$api = request;
Vue.prototype.$path = path;

const app = new Vue({
	...App
})
app.$mount()
// #endif

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
export function createApp() {
	const app = createSSRApp(App)
	return {
		app
	}
}
// #endif
