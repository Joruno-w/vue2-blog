<template>
	<div class="image-loader-container">
		<img v-if="!everythingLoaded" :src="placeholder" alt="" class="placeholder">
		<img @load="handleLoaded" :src="src" alt="" class="origin" :style="{opacity: originOpacity,transition: `${duration}ms`}">
	</div>
</template>

<script>
export default {
	data(){
		return{
			originLoaded: false,
			everythingLoaded: false
		}
	},
	methods: {
		handleLoaded(){
			this.originLoaded = true;
			setTimeout(()=>{
				this.everythingLoaded = true;
				this.$emit("load");
			},this.duration);
		}
	},
	computed: {
		originOpacity(){
			return this.originLoaded ? 1 : 0;
		}
	},
	props: {
		duration: {
			type: Number,
			default: 500
		},
		src: {
			type: String,
			required: true
		},
		placeholder: {
			type: String,
			required:true
		}
	}
}
</script>

<style scoped lang="less">
@import "~@/styles/mixin.less";
.image-loader-container{
	width: 100%;
	height: 100%;
	position: relative;
	overflow: hidden;
	img{
		.self-fill();
		object-fit: cover;
	}
	.placeholder{
		filter: blur(2vw);
	}
}
</style>
