<template>
	<Layout>
		<BlogList/>
		<template #right>
			<BlogCategory/>
		</template>
	</Layout>
</template>

<script>
import Layout from '@/components/Layout';
import BlogList from "@/views/Blog/components/BlogList";
import BlogCategory from "@/views/Blog/components/BlogCategory";

export default {
	components: {
		BlogCategory,
		BlogList,
		Layout,
	}
}
</script>

<style scoped>

</style>
