import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

// import { articles } from "@/assets/articles.js"
// import { collections } from "@/assets/collections.js"

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
    path: '/coding',
    name: 'Coding',
    component: () => import('@/views/Coding.vue'),
    meta: {
      title: 'Coding'
    }
	},
	{
    path: '/games',
    name: 'Games',
    component: () => import('@/views/Games.vue'),
    meta: {
      title: 'Games'
    }
	},
	{
    path: '/websites',
    name: 'Websites',
    component: () => import('@/views/Websites.vue'),
    meta: {
      title: 'Websites'
    }
	},
	{
    path: '/about',
    name: 'About',
    component: () => import('@/views/About.vue'),
    meta: {
      title: 'About'
    }
	},


	{
    path: '/stories/:article',
    name: 'story_article',
		component: () => import('@/components/Article.vue')
	},
	{
    path: '/coding/:article',
    name: 'coding_article',
    component: () => import('@/components/Article.vue')
	},
	{
    path: '/websites/:article',
    name: 'website_article',
    component: () => import('@/components/Article.vue')
	},
	{
    path: '/collections/:collection',
    name: 'collection',
    component: () => import('@/components/Articles.vue')
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
