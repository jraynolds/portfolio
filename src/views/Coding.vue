<template>
	<div class="content pa-8">
		<v-row class="article darkbackground">
			<v-col cols="12">
				<h3>I specialize in Java-based languages:</h3>
				<span class="gold">Java</span>, <span class="gold">Javascript</span>, <span class="gold">C#</span>, as well as <span class="gold">python</span> and <span class="gold">p5</span>. This website is coded in <span class="gold">Vue</span>.
				<p>Here are some individual projects I'm particularly proud of.</p>
			</v-col>
			<v-row>
				<v-col v-for="code of coding" :key="code.title">
					<MiniCard 
						v-if="code.url!='collections'" 
						:card="articles[code.name]" 
						:url="'coding/'" />
					<MiniCard 
						v-else
						:card="collections[code.name]" 
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
			coding: [
				{ name: "renpy_spriter", url: "coding" },
				{ name: "glimmer_bot", url: "coding" },
				{ name: "timeliner", url: "coding" },
				{ name: "ping_graph", url: "coding" },
				{ name: "fractal_generator", url: "coding" },
			]
		}
	}
}
</script>

<style>

</style>