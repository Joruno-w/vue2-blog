import * as userApi from '@/api/loginUser';
export default {
	namespaced: true,
	state: {
		loading: false,
		user: null
	},
	getters: {
		status(state){
			if (state.loading){
				return 'loading';
			}else if (state.user){
				return 'login';
			}else{
				return 'unlogin';
			}
		}
	},
	mutations: {
		setLoading(state,payload){
			state.loading = payload;
		},
		setUser(state,payload){
			state.user = payload;
		}
	},
	actions:{
		async login({commit},{loginId,loginPwd}){
			commit('setLoading',true);
			const res = await userApi.login(loginId,loginPwd);
			commit('setUser',res);
			commit("setLoading",false);
		},
		async loginOut({commit},payload){
			commit('setLoading',true);
			await userApi.loginOut();
			commit('setUser',null);
			commit("setLoading",false);
		},
		async whoAmI({commit},payload){
			commit('setLoading',true);
			const res = await userApi.whoAmI();
			commit('setUser',res);
			commit("setLoading",false);
		}
	}
}
