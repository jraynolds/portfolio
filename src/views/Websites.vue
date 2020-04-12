<template>
	<div class="content pa-8">
		<v-row class="article darkbackground">
			<v-col cols="12">
				<h3>I create websites, full-stack, as well as single-page applications.</h3>
				<p>Here are some individual projects I'm particularly proud of.</p>
			</v-col>
			<v-row>
				<v-col v-for="website of websites" :key="website.title">
					<MiniCard 
						v-if="website.url!='collections'" 
						:card="articles[website.name]" 
						:url="'coding/'" />
					<MiniCard 
						v-else
						:card="collections[website.name]" 
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
			websites: [
				{ name: "timeliner", url: "websites" },
				{ name: "vue_calendar", url: "websites" },
			]
		}
	}
}
</script>

<style>

</style>