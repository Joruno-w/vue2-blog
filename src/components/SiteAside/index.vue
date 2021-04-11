<template>
	<div class="site-aside-container">
		<Avatar src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3984801441,3395782865&fm=26&gp=0.jpg" />
		<h1 class="title">末日铁拳</h1>
		<Menu />
		<Contact />
		<p class="footer">
			黑ICP备17001719号
		</p>
	</div>
</template>

<script>
import Avatar from "@/components/Avatar";
import Menu from "./Menu";
import Contact from "./Contact";
export default {
	components: {
		Avatar,
		Menu,
		Contact,
	},
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.site-aside-container {
	width: 100%;
	height: 100%;
	background: @dark;
	padding: 20px 0;
	box-sizing: border-box;
	overflow-x: hidden;
	overflow-y: auto;
}
.avatar-container {
	text-align: center;
}
.footer {
	text-align: center;
	font-size: 12px;
}
.title {
	font-size: 1.2em;
	color: #fff;
	text-align: center;
}
</style>
