<template>
	<div ref="container">
		<h1>home</h1>
		<button @click="handleClick">click</button>
	</div>
</template>

<script>
export default {
	methods: {
		handleClick(){
			this.$showMessage({
				content: '你娘个别',
				type: 'info',
				duration: 1000,
				container: this.$refs.container,
				callback: ()=>{
					console.log('remove done');
				}
			})
		}
	}
}
</script>

<style scoped>

</style>
