<template>
	<div class="content pa-8">
		<v-row class="article darkbackground">
			<v-col cols="12">
				<h1 class="gold mb-8">Games</h1>
				<h2>Current Projects</h2>
				<h3>These are ongoing games in the middle of production.</h3>
			</v-col>
			<v-row>
				<v-col v-for="current of currents" :key="current.title">
					<MiniCard 
						v-if="current.url!='collections'" 
						:card="articles[current.name]" 
						:url="'stories/'" />
					<MiniCard 
						v-else
						:card="collections[current.name]" 
						:url="'collections/'" />
				</v-col>
			</v-row>
			
			<v-col cols="12">
				<h2>Future Projects</h2>
				<h3>These are games as of yet merely planned to be made.</h3>
			</v-col>
			<v-row>
				<v-col v-for="future of futures" :key="future.title">
					<MiniCard 
						v-if="future.url!='collections'" 
						:card="articles[future.name]" 
						:url="'stories/'" />
					<MiniCard 
						v-else
						:card="collections[future.name]" 
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
			currents: [
				{ name: "human_reignition_project", url: "games" },
			],
			futures: [
				{ name: "dragons_teeth", url: "games" },
			]
		}
	}
}
</script>

<style>

</style>