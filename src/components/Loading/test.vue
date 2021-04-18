<template>
	<div class="test-container" style="position: relative;">
		<Loading v-if="isLoading"/>
		<button @click="handleSwitch">切换</button>
	</div>
</template>

<script>
import Loading from './'
export default {
	components: {
		Loading
	},
	data(){
		return{
			isLoading: true
		}
	},
	methods: {
		handleSwitch(){
			this.isLoading = !this.isLoading;
		}
	}
}
</script>
