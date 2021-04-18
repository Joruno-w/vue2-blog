<template>
	<div id="blog-comment-container">
		<MessageArea
			title="评论列表"
			:subTitle="`(${datas.total})`"
			:list="datas.rows"
			:isListLoading="loading"
			@submit="handleSubmit"
		/>
	</div>
</template>

<script>
import MessageArea from "@/components/MessageArea";
import fetchData from "@/mixins/fetchData.js";
import { getComments, postComment } from "@/api/blog.js";
export default {
	mixins: [fetchData({ total: 0, rows: [] })],
	components: {
		MessageArea,
	},
	data() {
		return {
			page: 1,
			limit: 10,
		};
	},
	computed: {
		hasMore(){
			return this.datas.rows.length < this.datas.total;
		}
	},
	created() {
		this.$bus.$on('mainScroll',this.handleScroll);
	},
	destroyed() {
		this.$bus.$off('mainScroll',this.handleScroll);
	},
	methods: {
		handleScroll(dom){
			if (this.loading || !dom) return;
			const range = 100;
			const dec = Math.abs(dom.scrollTop + dom.clientHeight - dom.scrollHeight);
			if (dec <= range){
				this.fetchMore();
			}
		},
		async fetchDatas() {
			return await getComments(this.$route.params.id, this.page, this.limit);
		},
		async fetchMore(){
			if (!this.hasMore) return;
			this.loading = true;
			this.page++;
			const res = await this.fetchDatas();
			this.datas.total = res.total;
			this.datas.rows = [...this.datas.rows,...res.rows];
			this.loading = false;
		},
		async handleSubmit(formData, callback) {
			const resp = await postComment({
				blogId: this.$route.params.id,
				...formData,
			});
			this.datas.rows.unshift(resp);
			this.datas.total++;
			callback("评论成功"); // 告诉子组件，我这边处理完了，你继续
		},
	},
};
</script>

<style scoped lang="less">
#blog-comment-container {
	margin: 30px 0;
}
</style>
