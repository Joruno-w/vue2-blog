<template>
	<div class="test-container">
		<Empty/>
	</div>
</template>

<script>
import Empty from './';
export default {
	components: {
		Empty
	}
}
</script>

<style scoped lang="less">
	.test-container{
		width: 500px;
		height: 300px;
		margin: 0 auto;
		border: 2px solid;
		position: relative;
	}
</style>
