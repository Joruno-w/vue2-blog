<template>
	<div class="layout-container">
		<div class="left">
			<slot name="left"></slot>
		</div>
		<div class="main">
			<slot></slot>
		</div>
		<div class="right">
			<slot name="right"></slot>
		</div>
	</div>
</template>

<script>
export default {

}
</script>

<style scoped lang="less">
.layout-container{
	width: 100%;
	height: 100%;
	display: flex;
	.left,.right{
		height: 100%;
		flex: 0;
	}
	.main{
		height: 100%;
		flex: 1;
	}
}
</style>
