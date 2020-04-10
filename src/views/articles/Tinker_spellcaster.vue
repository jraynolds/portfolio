<template>
	<v-row class="pa-6 px-8 article">
		<v-col class="darkbackground">
			<h1 class="gold">{{ article.title }}</h1>
			<p v-for="(paragraph, index) of article.article" :key="index" v-html="paragraph" />
		</v-col>
	</v-row>
</template>

<script>
import { Tinker_spellcaster } from "@/assets/articles/stories.js"

export default {
	data() {
		return {
			article: Tinker_spellcaster
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