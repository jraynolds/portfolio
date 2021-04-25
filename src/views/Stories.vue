<template>
	<div class="content pa-8">
		<v-row class="article darkbackground">
			<v-col cols="12">
				<h2>Featured</h2>
				<h3>Some of my more interesting ideas.</h3>
			</v-col>
			<v-row>
				<v-col v-for="feature of featured" :key="feature.title">
					<MiniCard 
						v-if="feature.url=='stories'" 
						:card="articles[feature.name]" 
						:url="'stories/'" />
					<MiniCard 
						v-else
						:card="collections[feature.name]" 
						:url="'collections/'" />
				</v-col>
			</v-row>

			<v-col cols="12">
				<h2>Originals</h2>
				<h3>Completed original works.</h3>
			</v-col>
			<v-row>
				<v-col v-for="original of originals" :key="original.title">
					<MiniCard 
						v-if="original.url=='stories'" 
						:card="articles[original.name]" 
						:url="'stories/'" />
					<MiniCard 
						v-else
						:card="collections[original.name]" 
						:url="'collections/'" />
				</v-col>
			</v-row>

			<v-col cols="12">
				<h2>Fanfiction</h2>
				<h3>Works featuring others' characters.</h3>
			</v-col>
			<v-row>
				<v-col v-for="fanfic of fanfics" :key="fanfic.title">
					<MiniCard 
						v-if="fanfic.url=='stories'" 
						:card="articles[fanfic.name]" 
						:url="'stories/'" />
					<MiniCard 
						v-else
						:card="collections[fanfic.name]" 
						:url="'collections/'" />
				</v-col>
			</v-row>

			<v-col cols="12">
				<h2>Hooks</h2>
				<h3>Bite-sized ideas designed to inspire a larger story... one day.</h3>
			</v-col>
			<v-row>
				<v-col v-for="hook of hooks" :key="hook.title">
					<MiniCard 
						v-if="hook.url=='stories'" 
						:card="articles[hook.name]" 
						:url="'stories/'" />
					<MiniCard 
						v-else
						:card="collections[hook.name]" 
						:url="'collections/'" />
				</v-col>
			</v-row>
		</v-row>
	</div>
</template>

<script>
import { articles } from "@/assets/articles.js"
import { collections } from "@/assets/collections.js"

import MiniCard from "@/components/cards/MiniCard"

export default {
	components: {
		MiniCard
	},
	data() {
		return {
			articles: articles,
			collections: collections,
			featured: [
				{ name: "cultist_caro", url: "stories" },
				{ name: "american_disbelief", url: "stories" },
				{ name: "zelda_songs", url: "collections" }
			],
			originals: [
				{ name: "american_disbelief", url: "stories" },
				{ name: "real_magic", url: "stories" },
				{ name: "sea_songs", url: "stories" },
			],
			fanfics: [
				{ name: "cultist_caro", url: "stories" },
				{ name: "darker_dream", url: "stories" },
				{ name: "cultist_rose", url: "collections" },
				{ name: "zelda_songs", url: "collections" },
			],
			hooks: [
				{ name: "death_escape", url: "stories" },
				{ name: "did_heaven", url: "stories" },
				{ name: "sea_songs", url: "stories" },
				{ name: "real_magic", url: "stories" },
				{ name: "harem", url: "stories" },
				{ name: "heracles", url: "stories" },
				{ name: "max_noir", url: "stories" },
				{ name: "tinker_spellcaster", url: "stories" },
				{ name: "frugal_lord", url: "stories" },
				{ name: "isekai_delivery", url: "stories" },
				{ name: "requiem", url: "stories" }
			]
		}
	}
}
</script>

<style>

</style>