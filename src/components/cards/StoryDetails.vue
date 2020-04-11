<template>
	<div style="width: 100%;">
		<v-col 
			cols="12" 
			style="font-style: italic; text-align: left;"
			v-if="card.characters"
		>
			Featuring: 
			<span 
				v-for="(character, index) of card.characters" 
				:key="character"
			>
				<span class="gold">{{ character }}</span>
				<span v-if="index != card.characters.length - 1">, </span>
			</span>			
		</v-col>
		<v-col 
			cols="12" 
			style="font-style: italic; text-align: left;"
			v-else-if="card.aliases"
		>
			Featuring: 
			<span 
				v-for="(alias, index) of card.aliases" 
				:key="alias">
					<span class="gold">The {{ alias }}</span>
					<span v-if="index < card.aliases.length - 1">, </span>
			</span>
		</v-col>
		<v-col 
			cols="12" 
			style="font-style: italic; text-align: right; font-size: .9em;"
			class="pt-0" 
			v-if="card.elements"
		>
			Elements: 
			<span 
				v-for="(element, index) of card.elements" 
				:key="element">
					<span class="gold">{{ element }}</span>
					<span v-if="index < card.elements.length - 1">, </span>
			</span>
		</v-col>
	</div>
</template>

<script>
export default {
	props: [ "card" ]
}
</script>

<style>

</style>