<template>
  <v-app>
    <Head/>

    <v-content>
			<v-row justify="center" class="pt-8 mb-n6" v-if="pageTitle">
				<transition name="slide-fade" mode="out-in">
					<h1 
						class="gold" 
						style="text-align: center; -webkit-text-stroke: 2px black; font-size: 3em;" 
						:key="pageTitle"
					>
						{{ pageTitle }}
					</h1>
				</transition>
			</v-row>

			<v-row class="pt-10" justify="center">
				<transition name="fade" mode="out-in">
					<router-view/>
				</transition>
			</v-row>
    </v-content>
  </v-app>
</template>

<script>
import { articles } from "@/assets/articles.js"
import { collections } from "@/assets/collections.js"

import Head from "@/components/Head.vue"

export default {
  name: 'App',

  components: {
		Head
  },

  data: () => ({
		articles: articles,
		collections: collections
	}),
	computed: {
		pageTitle: function() {
			let title = null;
			if (this.$route.meta.title) title = this.$route.meta.title;
			if (this.$route.params.article) title = this.$route.meta.title;
			if (this.$route.params.collection) {
				title = this.collections[this.$route.params.collection].title;
			}
			
			if (title) document.title = `jraynolds: ${title}`;
			return title;
		},
	}
};
</script>

<style>
.v-card__title {
	word-break: break-word !important;
}

.fade-enter-active,
.fade-leave-active {
	transition-duration: 0.3s;
	transition-property: opacity;
	transition-timing-function: ease;
}
.fade-enter,
.fade-leave-active {
	opacity: 0
}

.slide-fade-enter-active {
  transition: all .5s ease;
}
.slide-fade-leave-active {
  transition: all .5s cubic-bezier(1.0, 1, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

main {
	background: url('/images/space.png');
}

.gold {
	color: #ffc367 !important;
}

a {
	color: #ffc367 !important;
}

.darkbackground {
	background: black;
	box-shadow: 0 10px 10px 20px black;
	color: gray;
}

.article {
	max-width: 1280px;
	margin-left: auto;
	margin-right: auto;
	margin-bottom: 20px;
}
</style>