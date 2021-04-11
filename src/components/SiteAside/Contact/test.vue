<template>
	<div class="test-container">
		<Contact/>
	</div>
</template>

<script>
import Contact from './index';
export default {
	components: {
		Contact
	}
}
</script>

<style scoped>
.test-container{
	width: 400px;
	height: 600px;
	background-color: #000;
	margin: 0 auto;
}
</style>
