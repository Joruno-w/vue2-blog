<template>
	<nav class="menu-container">
		<router-link :exact="item.exact" exact-active-class="" active-class="selected" v-for="item in items" :key="item.name" :to="{name: item.name}">
			<div class="icon">
				<Icon :type="item.icon" />
			</div>
			<span>{{ item.title }}</span>
		</router-link>
	</nav>
</template>

<script>
import Icon from "@/components/Icon";
export default {
	components: {
		Icon,
	},
	data() {
		return {
			items: [
				{
					name: "home",
					title: "首页",
					icon: "home",
					exact: true
				},
				{
					name: "blog",
					title: "文章",
					icon: "blog",
					exact: false
				},
				{
					name: "about",
					title: "关于我",
					icon: "about",
					exact: true
				},
				{
					name: "project",
					title: "项目&效果",
					icon: "code",
					exact: true
				},
				{
					name: "message",
					title: "留言板",
					icon: "chat",
					exact: true
				},
			],
		};
	},
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.menu-container {
	color: @gray;
	margin: 24px 0;
	a {
		&.selected {
			background: darken(@words, 3%);
		}
		padding: 0 50px;
		display: block;
		display: flex;
		align-items: center;
		height: 45px;
		.icon {
			width: 24px;
		}
		&:hover {
			color: #fff;
		}
	}
}
</style>

