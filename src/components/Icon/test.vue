<template>
	<div>
		<div v-for="t in types" :key="t" >
			<Icon :type="t"/>
			<p>{{t}}</p>
		</div>
	</div>
</template>

<script>
import types from "./test";
import Icon from "@/components/Icon/index";
export default {
	components: {
		Icon
	},
	data(){
		return{
			types
		}
	}
}
</script>

<style scoped>

</style>
