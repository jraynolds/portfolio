import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'

// const Home = () => import('./views/Home.vue');
// const About = () => import(`./views/About.vue`);
// const Stories = () => import(`./views/Stories.vue`);
// const Coding = () => import(`./views/Coding.vue`);

// // stories
// const American_disbelief = () => import(`./views/stories/American Sunset Disbelief.vue`);
// const Cultist_caro = () => import(`./views/stories/Cultist Simulator Cat Caro.vue`);
// const Sad_midna = () => import(`./views/stories/Sad Songs Midna.vue`);
// const Darker_dream = () => import(`./views/stories/Darker than Black I Dream.vue`);
// const Death_escape = () => import(`./views/stories/Death is No Escape.vue`);
// const Did_heaven = () => import(`./views/stories/Did it Hurt When you Fell From Heaven.vue`);
// const Heracles = () => import(`./views/stories/Heracles.vue`);
// const Max_noir = () => import(`./views/stories/Max Hard Noir.vue`);
// const Frugal_lord = () => import(`./views/stories/Frugal Lord.vue`);
// const Tinker_spellcaster = () => import(`./views/stories/Tinker, Spellcaster.vue`);
// const Isekai_delivery = () => import(`./views/stories/Isekai Slave Delivery.vue`);

// const Sad_songs = () => import(`./views/stories/Sad Songs.vue`);
// const Saria_minuet = () => import(`./views/stories/sad songs/Saria Minuet.vue`);

// // coding
// const Fractal_generator = () => import(`./views/coding/Fractal Tree Generator.vue`);

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  // Stories
  {
    path: `/stories`,
    name: `stories`,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/Stories.vue')
  },
  {
    path: `/stories/american_disbelief`,
    name: `american_disbelief`,
    component: () => import(`@/views/stories/American Sunset Disbelief.vue`)
  },
  {
    path: `/stories/cultist_caro`,
    name: `cultist_caro`,
    component: () => import(`@/views/stories/Cultist Simulator Cat Caro.vue`)
  },
  {
    path: `/stories/darker_dream`,
    name: `darker_dream`,
    component: () => import(`@/views/stories/Darker than Black I Dream.vue`)
  },
  {
    path: `/stories/death_escape`,
    name: `death_escape`,
    component: () => import(`@/views/stories/Death is No Escape.vue`)
  },
  {
    path: `/stories/did_heaven`,
    name: `did_heaven`,
    component: () => import(`@/views/stories/Did it Hurt When you Fell From Heaven.vue`)
  },
  {
    path: `/stories/heracles`,
    name: `heracles`,
    component: () => import(`@/views/stories/Heracles.vue`)
  },
  {
    path: `/stories/max_noir`,
    name: `max_noir`,
    component: () => import(`@/views/stories/Max Hard Noir.vue`)
  },
  {
    path: `/stories/frugal_lord`,
    name: `frugal_lord`,
    component: () => import(`@/views/stories/Frugal Lord.vue`)
  },
  {
    path: `/stories/tinker_spellcaster`,
    name: `tinker_spellcaster`,
    component: () => import(`@/views/stories/Tinker, Spellcaster.vue`)
  },
  {
    path: `/stories/isekai_delivery`,
    name: `isekai_delivery`,
    component: () => import(`@/views/stories/Isekai Slave Delivery.vue`)
  },
  {
    path: `/stories/sad_songs`,
    name: `sad_songs`,
    component: () => import(`@/views/stories/Sad Songs.vue`)
  },
  // sad songs
  {
    path: `/stories/saria_minuet`,
    name: `saria_minuet`,
    component: () => import(`@/views/stories/sad songs/Saria Minuet.vue`)
  },
  {
    path: `/stories/malon_song`,
    name: `malon_song`,
    component: () => import(`@/views/stories/sad songs/Malon Song.vue`)
  },
  {
    path: `/stories/ruto_serenade`,
    name: `ruto_serenade`,
    component: () => import(`@/views/stories/sad songs/Ruto Serenade.vue`)
  },
  {
    path: `/stories/nabooru_requiem`,
    name: `nabooru_requiem`,
    component: () => import(`@/views/stories/sad songs/Nabooru Requiem.vue`)
  },
  {
    path: `/stories/midna_lament`,
    name: `midna_lament`,
    component: () => import(`@/views/stories/sad songs/Midna Lament.vue`)
  },
  {
    path: `/stories/zelda_lullaby`,
    name: `zelda_lullaby`,
    component: () => import(`@/views/stories/sad songs/Zelda Lullaby.vue`)
  },
  // Coding
  {
    path: `/coding`,
    name: `coding`,
    component: () => import(`@/views/Coding.vue`),
  },
  {
    path: `/coding/fractal_generator`,
    name: `fractal_generator`,
    component: () => import(`@/views/coding/Fractal Tree Generator.vue`),
  },
  {
    path: `/coding/ping_graph`,
    name: `ping_graph`,
    component: () => import(`@/views/coding/Ping Graph.vue`),
  },
  {
    path: `/coding/timeliner`,
    name: `timeliner`,
    component: () => import(`@/views/coding/Timeliner.vue`),
  },
  // Games
  {
    path: `/games`,
    name: `games`,
    component: () => import(`@/views/Games.vue`),
  },
  {
    path: `/games/hrp`,
    name: `hrp`,
    component: () => import(`@/views/games/HRP.vue`),
  },
  {
    path: `/games/dragons_teeth`,
    name: `dragons_teeth`,
    component: () => import(`@/views/games/Dragon's Teeth.vue`),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
