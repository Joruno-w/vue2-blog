import Vue from 'vue';
import Vuex from 'vuex';
import setting from "@/store/setting";
import banner from "@/store/banner";
import about from "@/store/about";
import project from "@/store/project";
Vue.use(Vuex);

export default new Vuex.Store({
	strict: true,
	modules: {
		banner,
		setting,
		about,
		project
	}
});
