<template>
	<div class="content pa-8">
		<v-row class="article darkbackground">
			<v-col cols="12">
				<h1 class="gold mb-8">Stories</h1>
				<h2>Featured</h2>
				<h3>Some of my more interesting ideas.</h3>
			</v-col>
			<v-row>
				<v-col v-for="feature of featured" :key="feature.title">
					<MiniCard :card="feature" :url="'stories/'" />
				</v-col>
			</v-row>

			<v-col cols="12">
				<h2>Originals</h2>
				<h3>Completed original works.</h3>
			</v-col>
			<v-row>
				<v-col v-for="original of originals" :key="original.title">
					<MiniCard :card="original" :url="'stories/'" />
				</v-col>
			</v-row>

			<v-col cols="12">
				<h2>Fanfiction</h2>
				<h3>Works featuring others' characters.</h3>
			</v-col>
			<v-row>
				<v-col v-for="fanfic of fanfics" :key="fanfic.title">
					<MiniCard :card="fanfic" :url="'stories/'" />
				</v-col>
			</v-row>

			<v-col cols="12">
				<h2>Hooks</h2>
				<h3>Bite-sized ideas designed to inspire a larger story... one day.</h3>
			</v-col>
			<v-row>
				<v-col v-for="hook of hooks" :key="hook.title">
					<MiniCard :card="hook" :url="'stories/'" />
				</v-col>
			</v-row>
		</v-row>
	</div>
</template>

<script>
import {
	stories
} from "@/assets/articles.js"

import MiniCard from "@/components/cards/MiniCard"

export default {
	components: {
		MiniCard
	},
	data() {
		return {
			featured: [
				stories.cultist_caro,
				stories.zelda_songs,
				stories.american_disbelief
			],
			originals: [
				stories.american_disbelief,
				stories.real_magic,
				stories.harem
			],
			fanfics: [
				stories.cultist_caro,
				stories.darker_dream,

				stories.cultist_rose,

				stories.zelda_songs,
			],
			hooks: [
				stories.death_escape,
				stories.did_heaven,
				stories.heracles,
				stories.max_noir,
				stories.tinker_spellcaster,
				stories.frugal_lord,
				stories.isekai_delivery,
				stories.requiem
			]
		}
	}
}
</script>

<style>

</style>