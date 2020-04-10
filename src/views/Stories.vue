<template>
	<v-row class="pa-6 px-8 article">
		<v-col class="darkbackground" cols="12">
			<h1 class="gold mb-8">Stories</h1>
			<h2>Featured</h2>
			<h3>Some of my more interesting ideas.</h3>
		</v-col>
		<v-row>
			<v-col v-for="feature of featured" :key="feature.title">
				<MiniCard :card="feature" :url="'stories/'" />
			</v-col>
		</v-row>
	</v-row>
</template>

<script>
import {
	American_disbelief,
	Death_escape,
	Did_heaven,
	Heracles,
	Max_noir,
	Tinker_spellcaster,
	Frugal_lord,
	Isekai_delivery,

	Cultist_caro,
	Darker_dream,

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
			featured: [
				Cultist_caro,
				Zelda_songs,
				American_disbelief
			],
			articles: [
				American_disbelief,
				Death_escape,
				Did_heaven,
				Heracles,
				Max_noir,
				Tinker_spellcaster,
				Frugal_lord,
				Isekai_delivery,

				Cultist_caro,
				Darker_dream,

				Zelda_songs,
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