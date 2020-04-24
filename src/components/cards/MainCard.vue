<template>
	<div class="container" @hover="isHovered = !isHovered" :class="{hover: isHovered}">
		<router-link :to="card.back.to">
			<div class="flipper">
				<div class="front">
					<v-card color="black" style="color: gray" justify="center" align="center">
						<v-img 
							v-if="card.img"
							:src="'/images/' + card.img + '.png'"
							:style="[card.reversed ? { transform: 'rotate(180deg)'} : {}]" />
						<v-img 
							v-else
							:src="'https://i.imgur.com/OANxEOR.png'" />
						<v-card-title class="headline justify-center pt-0">I {{ card.verb }} {{ card.name }}.</v-card-title>
					</v-card>
				</div>
				<div class="back">
					<v-card 
						color="black"
						style="color: gray; height: 100%;"
						justify="center"
						align="center"
					>
						<v-card-title class="pb-0 gold">{{ card.card }}<span v-if="card.reversed">, reversed</span></v-card-title>
						<v-row class="pa-2 pt-0">
							<v-col 
								cols="12" 
								style="font-style: italic; text-align: left; font-size: .9em;"
							>{{ card.back.reading }}</v-col>
							<v-col 
								cols="12" 
								style="font-style: italic; text-align: right;"
								class="pt-0" 
							>Elements: 
								<span 
									v-for="(element, index) of card.back.elements" 
									:key="element">
										<span class="gold">{{ element }}</span>
										<span v-if="index < card.back.elements.length - 1">, </span>
								</span>
							</v-col>
							<v-col cols="12" class="pa-10">
								{{ card.back.description }}
							</v-col>
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
export default {
	props: [ "card" ],
	components: {
	},
	data: () => ({
		isHovered: false
  })
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
	height: 750px;
	width: 420px;
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