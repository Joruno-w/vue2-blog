export default function (defaultValue=null) {
	return{
		data(){
			return{
				loading: true,
				datas: defaultValue
			}
		},
		async created(){
			this.datas = await this.fetchDatas();
			this.loading = false;
		}
	}
}
