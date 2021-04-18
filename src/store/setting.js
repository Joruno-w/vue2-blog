import {getSetting} from "@/api/setting";
import titleController from "@/utils/titleController";
export default {
	namespaced: true,
	state: {
		loading:false,
		data: null
	},
	mutations: {
		setLoading(state,payload){
			state.loading = payload;
		},
		setData(state,payload){
			state.data = payload;
		}
	},
	actions: {
		async fetchData({commit}){
			commit('setLoading',true);
			const res = await getSetting();
			commit('setData',res);
			commit('setLoading',false);
			if (res.favicon){
				//<link rel="shortcut icon" href="1.png" type="image/x-icon" />
				let link = document.querySelector("[rel='shortcut icon']");
				if (!link){
					link = document.createElement('link');
					link.rel = 'shortcut icon';
					link.type = 'image/x-icon';
					link.href = res.favicon;
				}
				document.head.appendChild(link);
			}
			if (res.siteTitle){
				titleController.setSiteTitle(res.siteTitle);
			}
		}
	}
}
