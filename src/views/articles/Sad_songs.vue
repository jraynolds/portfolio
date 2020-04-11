<template>
	<v-row class="pa-6 px-8 article">
		<v-col class="darkbackground">
			<h1 class="gold">{{ article.title }}</h1>
			<p v-for="(paragraph, index) of article.article" :key="index" v-html="paragraph" />

			<v-row>
				<v-col v-for="subArticle of subArticles" :key="subArticle.title">
					<MiniCard :card="subArticle" :url="'/stories/'" />
				</v-col>
			</v-row>
		</v-col>
	</v-row>
</template>

<script>
import {
	Zelda_songs,

	Saria_minuet,
	Malon_song,
	Ruto_serenade,
	Zelda_lullaby,
	Nabooru_requiem,
	Midna_lament
} from "@/assets/articles/stories.js"

import MiniCard from "@/components/cards/MiniCard"

export default {
	components: {
		MiniCard
	},
	data() {
		return {
			article: Zelda_songs,
			subArticles: [
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

<style scoped>
.darkbackground {
	background: black;
	box-shadow: 0 10px 10px 20px black;
	color: gray;
}

p:last-child {
	margin-bottom: -20px;
}
</style>