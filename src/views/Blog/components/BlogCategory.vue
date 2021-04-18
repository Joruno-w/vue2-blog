<template>
	<div class="blog-category-container" v-loading="loading">
		<h2>文章分类</h2>
		<RightList :list="list" @select="handleSelect"/>
	</div>
</template>

<script>
import fetchData from "@/mixins/fetchData";
import {getBlogTypes} from "@/api/blog";
import RightList from "@/views/Blog/components/RightList";
export default {
	name: "BlogCategory",
	components: {RightList},
	mixins: [fetchData([])],
	methods:{
		async fetchDatas(){
			return await getBlogTypes();
		},
		handleSelect(item){
			const query = {
				page: 1,
				limit: this.limit
			}
			if (item.id === -1){
				this.$router.push({
					name: 'blog',
				})
			}else{
				this.$router.push({
					name: 'blogCategory',
					query,
					params:{
						categoryId: item.id
					}
				})
			}
		}
	},
	computed:{
		limit(){
			return +this.$route.query.limit || 10;
		},
		categoryId(){
			return +this.$route.params.categoryId || -1;
		},
		list(){
			const totalArticleCount = this.datas.reduce((a,b)=>a+b.articleCount,0);
			const result = [
				{name:'全部文章',articleCount: totalArticleCount, id: -1},
				...this.datas
			]
			return result.map(it=>({
				...it,
				selected: it.id === this.categoryId,
				aside: `${it.articleCount}篇`
			}))
		},
	},
}
</script>

<style scoped lang="less">
.blog-category-container{
	width: 250px;
	box-sizing: border-box;
	padding: 20px;
	height: 100%;
	overflow-y: auto;
	position: relative;
	h2{
		margin: 0;
		font-size: 1em;
	}
}
</style>
