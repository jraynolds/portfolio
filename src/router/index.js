import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
	},
	{
    path: '/stories',
    name: 'Stories',
    component: () => import('@/views/Stories.vue')
	},
	// Stories
	// ORIGINAL
	{
    path: '/stories/american_disbelief',
    name: 'American Sunset: Disbelief',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/articles/American_disbelief.vue')
  },
	{
    path: '/stories/death_escape',
    name: 'Death is no escape',
    component: () => import('@/views/articles/Death_escape.vue')
  },
	{
    path: '/stories/did_heaven',
    name: 'Did it hurt when you fell from heaven?',
    component: () => import('@/views/articles/Did_heaven.vue')
  },
	{
    path: '/stories/heracles',
    name: 'Heracles',
    component: () => import('@/views/articles/Heracles.vue')
  },
	{
    path: '/stories/max_noir',
    name: 'Max Hard Noir',
    component: () => import('@/views/articles/Max_noir.vue')
  },
	{
    path: '/stories/tinker_spellcaster',
    name: 'Tinker, Spellcaster',
    component: () => import('@/views/articles/Tinker_spellcaster.vue')
  },
	{
    path: '/stories/frugal_lord',
    name: 'Frugal Lord',
    component: () => import('@/views/articles/Frugal_lord.vue')
  },
	{
    path: '/stories/isekai_delivery',
    name: 'Isekai Delivery',
    component: () => import('@/views/articles/Isekai_delivery.vue')
  },
	// FANFIC
  {
    path: '/stories/cultist_caro',
    name: 'Cultist Simulator: Cat Caro',
    component: () => import('@/views/articles/Cultist_caro.vue')
	},
  {
    path: '/stories/darker_dream',
    name: 'Darker than Black: I Dream',
    component: () => import('@/views/articles/Darker_dream.vue')
	},
	// Sad songs
	{
    path: '/stories/saria_minuet',
    name: 'Saria: Minuet',
    component: () => import('@/views/articles/sad songs/Saria_minuet.vue')
  },
	{
    path: '/stories/malon_song',
    name: 'Malon: Song',
    component: () => import('@/views/articles/sad songs/Malon_song.vue')
  },
	{
    path: '/stories/ruto_serenade',
    name: 'Ruto: Serenade',
    component: () => import('@/views/articles/sad songs/Ruto_serenade.vue')
  },
	{
    path: '/stories/zelda_lullaby',
    name: 'Zelda: Lullaby',
    component: () => import('@/views/articles/sad songs/Zelda_lullaby.vue')
  },
	{
    path: '/stories/nabooru_requiem',
    name: 'Nabooru: Requiem',
    component: () => import('@/views/articles/sad songs/Nabooru_requiem.vue')
  },
	{
    path: '/stories/midna_lament',
    name: 'Midna: Lament',
    component: () => import('@/views/articles/sad songs/Midna_lament.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
