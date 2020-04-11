import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'We are all, all of us, the same.'
    }
	},
	{
    path: '/stories',
    name: 'Stories',
    component: () => import('@/views/Stories.vue'),
    meta: {
      title: 'Stories'
    }
	},
	{
    path: '/stories/:article',
    name: '???',
    component: () => import('@/views/Article.vue'),
    meta: {
      title: '???'
    }
	},
	{
    path: '/collections/:collection',
    name: '????',
    component: () => import('@/views/Articles.vue'),
    meta: {
      title: '????'
    }
	}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
	routes,
	scrollBehavior () {
		return { x: 0, y: 0 }
	}
})

export default router
