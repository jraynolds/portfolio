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
	// Stories
	// ORIGINAL
	{
    path: '/stories/american_disbelief',
    name: 'American Sunset: Disbelief',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/articles/American_disbelief.vue'),
    meta: {
      title: 'American Sunset: Disbelief'
    }
  },
	{
    path: '/stories/death_escape',
    name: 'Death is no escape',
    component: () => import('@/views/articles/Death_escape.vue'),
    meta: {
      title: 'Death is no escape'
    }
  },
	{
    path: '/stories/did_heaven',
    name: 'Did it hurt when you fell from heaven?',
    component: () => import('@/views/articles/Did_heaven.vue'),
    meta: {
      title: 'Did it hurt when you fell from heaven?'
    }
  },
	{
    path: '/stories/heracles',
    name: 'Heracles',
    component: () => import('@/views/articles/Heracles.vue'),
    meta: {
      title: 'Heracles'
    }
  },
	{
    path: '/stories/max_noir',
    name: 'Max Hard Noir',
    component: () => import('@/views/articles/Max_noir.vue'),
    meta: {
      title: 'Max Hard Noir'
    }
  },
	{
    path: '/stories/tinker_spellcaster',
    name: 'Tinker, Spellcaster',
    component: () => import('@/views/articles/Tinker_spellcaster.vue'),
    meta: {
      title: 'Tinker, Spellcaster'
    }
  },
	{
    path: '/stories/frugal_lord',
    name: 'Frugal Lord',
    component: () => import('@/views/articles/Frugal_lord.vue'),
    meta: {
      title: 'Frugal Lord'
    }
  },
	{
    path: '/stories/isekai_delivery',
    name: 'Isekai Delivery',
    component: () => import('@/views/articles/Isekai_delivery.vue'),
    meta: {
      title: 'Isekai Delivery'
    }
  },
	// FANFIC
  {
    path: '/stories/cultist_caro',
    name: 'Cultist Simulator: Cat Caro',
    component: () => import('@/views/articles/Cultist_caro.vue'),
    meta: {
      title: 'Cultist Simulator: Cat Caro'
    }
	},
  {
    path: '/stories/darker_dream',
    name: 'Darker than Black: I Dream',
    component: () => import('@/views/articles/Darker_dream.vue'),
    meta: {
      title: 'Darker than Black: I Dream'
    }
	},
	// Rose + Victor
	{
    path: '/stories/rose_a',
    name: 'Rose_a',
    component: () => import('@/views/articles/rose and victor/Rose_a.vue'),
    meta: {
      title: 'Rose_a'
    }
  },
	// Sad songs
	{
    path: '/stories/saria_minuet',
    name: 'Saria: Minuet',
    component: () => import('@/views/articles/sad songs/Saria_minuet.vue'),
    meta: {
      title: 'Saria: Minuet'
    }
  },
	{
    path: '/stories/malon_song',
    name: 'Malon: Song',
    component: () => import('@/views/articles/sad songs/Malon_song.vue'),
    meta: {
      title: 'Malon: Song'
    }
  },
	{
    path: '/stories/ruto_serenade',
    name: 'Ruto: Serenade',
    component: () => import('@/views/articles/sad songs/Ruto_serenade.vue'),
    meta: {
      title: 'Ruto: Serenade'
    }
  },
	{
    path: '/stories/zelda_lullaby',
    name: 'Zelda: Lullaby',
    component: () => import('@/views/articles/sad songs/Zelda_lullaby.vue'),
    meta: {
      title: 'Zelda: Lullaby'
    }
  },
	{
    path: '/stories/nabooru_requiem',
    name: 'Nabooru: Requiem',
    component: () => import('@/views/articles/sad songs/Nabooru_requiem.vue'),
    meta: {
      title: 'Nabooru: Requiem'
    }
  },
	{
    path: '/stories/midna_lament',
    name: 'Midna: Lament',
    component: () => import('@/views/articles/sad songs/Midna_lament.vue'),
    meta: {
      title: 'Midna: Lament'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
