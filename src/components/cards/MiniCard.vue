<template>
	<div class="container" @hover="isHovered = !isHovered" :class="{hover: isHovered}">
		<router-link :to="url + card.to">
			<div class="flipper">

				<div class="front">
					<v-card 
						color="black" 
						style="color: gray"
						class="flex-column d-flex" 
						justify="center" 
						align="center"
						height="470"
					>
						<v-img 
							v-if="card.img"
							:src="'/images/headers/' + card.img" 
							height="300" />
						<v-img 
							v-else
							:src="'https://i.imgur.com/OANxEOR.png'"
							height="300"  
							position="50% 20%" />

						<v-spacer />

						<v-card-title 
							class="headline justify-center pt-0 gold" 
							v-html="card.title.split(': ').join(':<br>')" />
						<v-card-subtitle 
							class="flex-grow-1"
							style="font-style: italic; color: gray;"
							v-html="card.excerpt"
						/>
					</v-card>
				</div>

				<div class="back">
					<v-card 
						color="black"
						style="color: gray; height: 100%;"
						justify="center"
						align="center"
					>
						<v-row class="pa-2 pt-0">
							<StoryDetails :card="card" />
							<v-col cols="12" class="pa-10" v-html="card.summary" @click="cardBackClick" />
							<v-col cols="12">
								Click this card to see more.
							</v-col>
						</v-row>
					</v-card>
				</div>

			</div>
		</router-link>
	</div>
</template>

<script>
import StoryDetails from "@/components/cards/StoryDetails.vue"

export default {
	props: {
		card: Object,
		url: {
			type: String,
			default: ""
		}
	},
	components: {
		StoryDetails
	},
	data: () => ({
		isHovered: false
	}),
	computed: {
		excerpt() {
			return this.card.excerpt;
		}
	},
	methods: {
		cardBackClick(e) {
			// eslint-disable-next-line no-console
			console.log(e);
			// eslint-disable-next-line no-console
			console.log(e.target);
			// eslint-disable-next-line no-console
			console.log(e.target.tagName);
			if (e.target.tagName === "A") e.stopPropagation();
		}
	}
}
</script>

<style>
.container {
	background: gray;
	border-radius: 5px;
	height: 300px;
}

.headline {
	font-size: 3em !important;
}
</style>

<style scoped>
/* entire container, keeps perspective */
.container {
	perspective: 1000px;
}
	/* flip the pane when hovered */
	.container:hover .flipper, .container.hover .flipper {
		transform: rotateY(180deg);
	}

.container {
	height: 490px;
	width: 320px;
}

.flipper, .front, .back {
	width: 100%;
	height: 100%;
}

/* flip speed goes here */
.flipper {
	transition: 0.6s;
	transform-style: preserve-3d;

	position: relative;
}

.front, .back {
	position: absolute;
	top: 0;
	left: 0;
}

/* front pane, placed above back */
.front {
	z-index: 2;
	/* for firefox 31 */
	transform: rotateY(0deg);
}

/* back, initially hidden pane */
.back {
	transform: rotateY(180deg);
}
</style>