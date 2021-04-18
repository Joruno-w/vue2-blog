<template>
	<div class="app-container">
		<Layout>
			<template v-slot:left>
				<div class="left">
					<SiteAside/>
				</div>
			</template>
			<template>
				<div class="main">
					<router-view/>
				</div>
			</template>
		</Layout>
		<ToTop/>
	</div>
</template>

<script>
import ToTop from '@/components/ToTop';
import SiteAside from '@/components/SiteAside';
import Layout from '@/components/Layout';
export default {
	components: {
		Layout,
		SiteAside,
		ToTop,
	}
}
</script>

<style scoped lang="less">
.app-container{
	width: 100%;
	height: 100vh;
	.left{
		width: 250px;
	}
}

</style>
