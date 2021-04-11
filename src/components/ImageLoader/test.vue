<template>
	<div class="test-container">
		<ImageLoader
			:duration="4000"
			@load="handleLoaded"
			src="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?fit=crop&crop=entropy&w=3456&h=2304"
			placeholder="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?w=100"
		/>
	</div>
</template>

<script>
import ImageLoader from  './';
export default {
	components: {
		ImageLoader
	},
	methods: {
		handleLoaded(){
			console.log(`imageLoader组件加载完毕`);
		}
	}
}
</script>

<style scoped>
	.test-container{
		width: 600px;
		height: 400px;
		margin: 0 auto;
		border: 2px solid;
	}
</style>
