<template>
	<v-dialog
		width="80vw"
		v-model="show"
	>
		<v-card
			dark
			style="margin-left: auto; margin-right: auto; overflow-x: hidden; height: 100%;"
			class="d-flex flex-column"
		>
			<v-card-title class="d-flex justify-center">
				Some of my best work:
			</v-card-title>
			<v-row justify="center">
				<router-link 
					:to="highlight.to"
					v-for="highlight in card.highlights"
					:key="highlight.title" 
					style="text-decoration: none;"
					class="d-flex"
				>
					<v-col class="highlight d-flex flex-column">
						<v-img
							:src="require('@/assets/images/headers/' + highlight.img)"
							height="250"
							width="250"
							class="flex-grow-0"
						/>
						<v-card-text style="font-style: italic;">{{ highlight.excerpt }}</v-card-text>
						<v-card-text v-html="highlight.summary" />
					</v-col>
				</router-link>
			</v-row>
		</v-card>
	</v-dialog>
</template>

<script>
export default {
	props: [ "card", "showDialog" ],
	computed: {
		show: {
			get() {
				return this.showDialog;
			},
			set(value) {
				this.$emit("setDialogShown", value);
			}
		}
	},
	methods: {
		test(highlight) {
			// eslint-disable-next-line no-console
			console.log("help");
			highlight.isHovered = !highlight.isHovered;
		}
	},
	mounted() {
		for (let highlight of this.card.highlights) highlight.isHovered = false;
	}
}
</script>

<style>
.v-dialog {
	height: 90vh;
}

.highlight {
	max-width: 300px;
	opacity: 0.2;
	transition: opacity 1s;

	color: gray;
}

.highlight:hover {
	opacity: 1;
}
</style>