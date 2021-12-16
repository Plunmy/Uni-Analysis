import App from './App'
import store from "./store/store.js"

// #ifndef VUE3
import Vue from 'vue'
import request from "./utils/request/request.js"
import path from "./path/path.js"
import uView from 'uview-ui';
import Channel from "./utils/eventChannel.js"
Vue.use(uView);

let chel = new Channel();
console.log(chel);
// chel.eventOn('other', (res) => {
// 	console.log(res);
// });

Vue.config.productionTip = false
App.mpType = 'app'
Vue.prototype.$store = store;
Vue.prototype.$api = request;
Vue.prototype.$path = path;

Vue.prototype.$channel = chel;

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
