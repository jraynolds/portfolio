<template>
	<v-row class="pa-6 px-8 article">
		<v-col class="darkbackground">
			<p v-for="(paragraph, index) of article.article" :key="index" v-html="paragraph" />
		</v-col>
	</v-row>
</template>

<script>
import { articles } from "@/assets/articles.js"

export default {
	data() {
		return {
			article: null
		}
	},
	beforeMount() {
		// eslint-disable-next-line no-console
		// console.log(this.$route.params.article);
		this.article = articles[this.$route.params.article];
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

<style>
.article p>img {
	max-width: 100%;
	height: auto;
}
</style>