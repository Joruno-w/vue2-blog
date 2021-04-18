<template>
	<div class="to-top-container" v-show="show" @click="handleClick">Top</div>
</template>

<script>
export default {
	data(){
		return{
			show: false
		}
	},
	created() {
		this.$bus.$on("mainScroll",this.handleScroll);
	},
	destroyed() {
		this.$bus.$off("mainScroll",this.handleScroll);
	},
	methods: {
		handleScroll(dom){
			this.show = dom && dom.scrollTop >= 500;
		},
		handleClick(){
			this.$bus.$emit('setMainScroll',0);
		}
	}
}
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.to-top-container{
	position: fixed;
	right: 20px;
	bottom: 20px;
	width: 50px;
	height: 50px;
	border-radius: 50%;
	background-color: @primary;
	color: #fff;
	line-height: 50px;
	text-align: center;
	cursor: pointer;
}
</style>
