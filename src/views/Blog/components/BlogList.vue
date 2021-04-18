<template>
	<div class="blog-list-container" ref="mainContainer" v-loading="loading">
		<ul>
			<li v-for="item in datas.rows" :key="item.id">
				<div class="thumb" v-if="item.thumb">
					<router-link :to="{name: 'blogDetail',params: {id: item.id}}">
						<img v-lazy="item.thumb" :alt="item.title" :title="item.title"/>
					</router-link>
				</div>
				<div class="main">
					<router-link :to="{name: 'blogDetail',params: {id: item.id}}">
						<h2>{{ item.title }}</h2>
					</router-link>
					<div class="aside">
						<span>日期：{{ formatDate(item.createDate) }}</span>
						<span>浏览：{{ item.scanNumber }}</span>
						<span>评论：{{ item.commentNumber }}</span>
						<router-link :to="{name: 'blogCategory', params: {categoryId: item.category.id}}">{{ item.category.name }}</router-link>
					</div>
					<div class="desc">
						{{ item.description }}
					</div>
				</div>
			</li>
		</ul>
		<Pager
			v-if="datas.total"
			:current="routeInfo.page"
			:total="datas.total"
			:limit="routeInfo.limit"
			:visible-number="10"
			@pageChange="handlePageChange"
		/>
	</div>
</template>

<script>
import Pager from "@/components/Pager";
import fetchData from "@/mixins/fetchData.js";
import {getBlogs} from "@/api/blog.js";
import {formatDate} from "@/utils";
import mainScroll from "@/mixins/mainScroll";
export default {
	mixins: [fetchData({}),mainScroll('mainContainer')],
	components: {
		Pager,
	},
	computed: {
		routeInfo(){
			const categoryId = +this.$route.params.categoryId || -1;
			const page = +this.$route.query.page || 1;
			const limit = +this.$route.query.limit || 10;
			return{
				page,
				limit,
				categoryId
			}
		}
	},
	methods:{
		formatDate,
		async fetchDatas(){
			return await getBlogs({...this.routeInfo});
		},
		handlePageChange(newPage){
			const query = {
				page: newPage,
				limit: this.routeInfo.limit
			}
			if (this.routeInfo.categoryId === -1){
				this.$router.push({
					name: 'blog',
					query
				})
			}else{
				this.$router.push({
					name: 'blogCategory',
					query,
					params:{
						categoryId: this.routeInfo.categoryId
					}
				})
			}
		}
	},
	watch:{
		async $route(){
			this.loading = true;
			this.datas = await this.fetchDatas();
			this.$refs.mainContainer.scrollTop = 0;
			this.loading = false;
		}
	}
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";

.blog-list-container {
	line-height: 1.7;
	padding: 20px;
	overflow-y: scroll;
	width: 100%;
	height: 100%;
	box-sizing: border-box;
	scroll-behavior: smooth;
	ul {
		list-style: none;
		margin: 0;
		padding: 0;
	}
}

li {
	display: flex;
	padding: 15px 0;
	border-bottom: 1px solid @gray;

	.thumb {
		flex: 0 0 auto;
		margin-right: 15px;

		img {
			display: block;
			max-width: 200px;
			border-radius: 5px;
		}
	}

	.main {
		flex: 1 1 auto;

		h2 {
			margin: 0;
		}
	}

	.aside {
		font-size: 12px;
		color: @gray;

		span {
			margin-right: 15px;
		}
	}

	.desc {
		margin: 15px 0;
		font-size: 14px;
	}
}
</style>
