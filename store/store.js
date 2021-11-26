import Vue from "vue";
import Vuex from "vuex";
import state from "./state/state.js"
Vue.use(Vuex);

const IGNORE_LIST=[];
const syncStore = (store) => {
  store.subscribe((mutation) => {
    // if (IGNORE_LIST.findIndex((e) => e === mutation.type) > -1 || mutation.type.indexOf('_ig') > -1) {
    //   return
    // }
    if (mutation.payload !== undefined && mutation.payload !== null) {
      localStorage.setItem(`jcpt-${mutation.type}`, JSON.stringify(mutation.payload))
    }
  })
}

const store = new Vuex.Store({
	state: state,
	getters: {},
	mutations:{},
	actions: {},
	modules: {},
	plugins: [syncStore],
})

export default store;
