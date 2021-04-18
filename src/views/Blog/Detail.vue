<template>
	<Layout>
		<div ref="mainContainer" class="detail-container" v-loading="loading">
			<BlogDetail :blog="datas" v-if="datas"/>
			<BlogComments v-if="!loading"/>
		</div>
		<template #right>
			<div class="right-container" v-loading="loading">
				<BlogTOC :toc="datas.toc" v-if="datas" />
			</div>
		</template>
	</Layout>
</template>

<script>
import BlogComments from "@/views/Blog/components/BlogComments";
import fetchData from "@/mixins/fetchData";
import {getBlog} from "@/api/blog";
import Layout from '@/components/Layout';
import BlogTOC from "@/views/Blog/components/BlogTOC";
import BlogDetail from "@/views/Blog/components/BlogDetail";
import mainScroll from "@/mixins/mainScroll";
import titleController from "@/utils/titleController";
export default {
	name: "Detail",
	mixins: [fetchData(null),mainScroll('mainContainer')],
	components: {
		BlogTOC,
		Layout,
		BlogDetail,
		BlogComments
	},
	methods: {
		async fetchDatas(){
			const res = await getBlog(this.$route.params.id);
			titleController.setRouteTitle(res.title);
			return res;
		}
	},
	updated() {
		const hash = location.hash;
		location.hash = '';
		setTimeout(()=>{
			location.hash = hash;
		},50);
	}
}
</script>

<style scoped lang="less">
.detail-container{
	width: 100%;
	height: 100%;
	box-sizing: border-box;
	padding: 20px;
	overflow-y: scroll;
	overflow-x: hidden;
	position: relative;
	scroll-behavior: smooth;
}
.right-container{
	width: 250px;
	height: 100%;
	box-sizing: border-box;
	padding: 20px;
	overflow-y: scroll;
	position: relative;
}
</style>
