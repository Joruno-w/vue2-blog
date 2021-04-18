export default [
	{
		path: '/',
		name: 'home',
		component: () => import('@/views/Home'),
		meta: {
			title: '首页'
		}
	},
	{
		path: '/about',
		name: 'about',
		component: () => import('@/views/About'),
		meta: {
			title: '关于'
		}
	},
	{
		path: '/blog',
		name: 'blog',
		component: () => import('@/views/Blog'),
		meta: {
			title: '文章'
		}
	},
	{
		path: '/blog/cat/:categoryId',
		name: 'blogCategory',
		component: () => import('@/views/Blog'),
		meta: {
			title: '文章分类'
		}
	},
	{
		path: '/blog/:id',
		name: 'blogDetail',
		component: () => import('@/views/Blog/Detail'),
		meta: {
			title: '文章详情'
		}
	},
	{
		path: '/project',
		name: 'project',
		component: () => import('@/views/Project'),
		meta: {
			title: '项目&效果'
		}
	},
	{
		path: '/message',
		name: 'message',
		component: () => import('@/views/Message'),
		meta: {
			title: '留言板'
		}
	}
]

