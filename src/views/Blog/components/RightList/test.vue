<template>
	<div class="test-container">
		<RightList :list="list" @select="handleSelect"/>
	</div>
</template>

<script>
import RightList from "./";
export default {
	name: "test",
	components: {
		RightList
	},
	methods:{
		handleSelect(item){
			console.log(item);
		}
	},
	data(){
		return{
			list: []
		}
	}
}
</script>

<style scoped>

</style>
