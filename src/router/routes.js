export default [
	{
		path: '/',
		name: 'home',
		component: () => import('@/views/Home')
	},
	{
		path: '/about',
		name: 'about',
		component: () => import('@/views/About')
	},
	{
		path: '/blog',
		name: 'blog',
		component: () => import('@/views/Blog')
	},
	{
		path: '/project',
		name: 'project',
		component: () => import('@/views/Project')
	},
	{
		path: '/message',
		name: 'message',
		component: () => import('@/views/Message')
	},
]
