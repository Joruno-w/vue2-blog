<template>
	<div class="avatar-container">
		<img :src="src" :style="{width: size + 'px',height: size + 'px'}" alt="">
	</div>
</template>

<script>
export default {
	name: "Avatar",
	props: {
		src: {
			type: String,
			required: true
		},
		size: {
			type: Number,
			default: 150
		}
	}
}
</script>

<style scoped>
	img {
		width: 100%;
		height: 100%;
		border-radius: 50%;
	}
</style>
