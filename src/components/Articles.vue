<template>
	<v-row class="pa-6 px-8 article">
		<v-col class="darkbackground">
			<p v-for="(paragraph, index) of collection.article" :key="index" v-html="paragraph" />

			<v-row>
				<v-col v-for="subArticle of subArticles" :key="subArticle">
					<MiniCard :card="articles[subArticle]" :url="'/stories/'" />
				</v-col>
			</v-row>
		</v-col>
	</v-row>
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
			collection: null,
			subArticles: null
		}
	},
	beforeMount() {
		this.collection = collections[this.$route.params.collection];
		this.subArticles = this.collection.subArticles;
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