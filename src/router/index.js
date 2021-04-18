import Vue from 'vue';
import VueRouter from "vue-router";
import routes from './routes';
import titleController from "@/utils/titleController";

Vue.use(VueRouter);

const router = new VueRouter({
	routes,
	mode: 'history'
});

router.afterEach((to, from) => {
	if (to.meta.title){
		titleController.setRouteTitle(to.meta.title);
	}
});


export default router;
