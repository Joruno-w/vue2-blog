<template>
	<div class="test-container">
		<Layout>
			<template v-slot:left>
				<div class="left">
					agsdfgsdfgsfg
				</div>
			</template>
			<template v-slot:default>
				<div class="main">
					awegsgsgserg
				</div>
			</template>
			<template v-slot:right>
				<div class="right">
					asdasdasd
				</div>
			</template>
		</Layout>
	</div>
</template>

<script>
import Layout from './';
export default {
	components: {
		Layout,
	}
}
</script>

<style scoped>
.test-container{
	width: 80%;
	height: 500px;
	border: 2px solid;
	margin: 0 auto;
}
.left{
	width: 200px;
	height: 100%;
	background-color: #6b9eee;
}
.main{
	width: 100%;
	height: 100%;
	background-color: lightcoral;
}
.right{
	width: 200px;
	height: 100%;
	background-color: lightseagreen;
}
</style>
