<template>
	<v-row class="pa-6 px-8 article">
		<v-col class="darkbackground">
			<h1 class="gold">{{ article.title }}</h1>
			<p v-for="(paragraph, index) of article.article" :key="index" v-html="paragraph" />
		</v-col>
	</v-row>
</template>

<script>
import {
	Saria_minuet,
	Malon_song,
	Ruto_serenade,
	Zelda_lullaby,
	Nabooru_requiem,
	Midna_lament
} from "@/assets/articles/stories.js"
import Saria_minuetVue from './Saria_minuet.vue'

export default {
	data() {
		return {
			articles: [
				Saria_minuet,
				Malon_song,
				Ruto_serenade,
				Zelda_lullaby,
				Nabooru_requiem,
				Midna_lament
			]
		}
	}
}
</script>

<style>

</style>