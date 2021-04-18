<template>
	<img :src="loadUrl" alt="" class="loading-container" />
</template>

<script>
import loadUrl from "@/assets/loading.svg";
export default {
	data(){
		return{
			loadUrl
		}
	}
}
</script>

<style scoped lang="less">
@import "~@/styles/mixin.less";
.loading-container{
	.self-center()
}
</style>
