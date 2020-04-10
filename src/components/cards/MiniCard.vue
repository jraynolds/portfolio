<template>
	<div class="container" @hover="isHovered = !isHovered" :class="{hover: isHovered}">
		<router-link :to="url + card.to">
			<div class="flipper">
				<div class="front">
					<v-card color="black" style="color: gray" justify="center" align="center">
						<v-img 
							v-if="card.img"
							:src="require('@/assets/images/headers/' + card.img)" 
							height="300" />
						<v-img 
							v-else
							:src="'https://i.imgur.com/OANxEOR.png'" />
						<v-card-title 
							class="headline justify-center pt-0 gold" 
							v-html="card.title.split(': ').join(':<br>')" />
						<v-card-subtitle style="font-style: italic; color: gray;">
							{{ card.excerpt }}
						</v-card-subtitle>
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
							<v-col 
								cols="12" 
								style="font-style: italic; text-align: left; font-size: .9em;"
							>Featuring: 
								<span v-for="(character, index) of card.characters" :key="character">
									{{ character }}<span v-if="index != card.characters.length - 1">, </span>
								</span>			
							</v-col>
							<v-col 
								cols="12" 
								style="font-style: italic; text-align: right;"
								class="pt-0" 
							>Elements: 
								<span 
									v-for="(element, index) of card.elements" 
									:key="element">
										<span class="gold">{{ element }}</span>
										<span v-if="index < card.elements.length - 1">, </span>
								</span>
							</v-col>
							<v-col cols="12" class="pa-10" v-html="card.summary" />
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
	props: [ "card", "url" ],
	data: () => ({
		isHovered: false
  }),
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