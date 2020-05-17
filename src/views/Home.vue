<template>
  <div class="home">
		<v-row class="px-10">
			<v-col 
				xl="3"
				lg="6"
				md="6"
				sm="12"
				v-for="card in cards"
				:key="card.name"
			>
				<MainCard
					:card="card"
				/>
			</v-col>
		</v-row>
  </div>
</template>

<script>
import MainCard from "@/components/cards/MainCard"

export default {
  name: 'Home',
  components: {
		MainCard
	},
	
	data: () => ({
		cards: [
			{
				name: "stories",
				verb: "write",
				img: "Death",
				card: "Death",
				reversed: true,
				back: {
					reading: "A skeletal figure on a pale horse approaches, stepping lightly over the dead and before the yet living. He carries the five-petaled flower as a standard and ignores all pleas.",
					elements: [ "Resistance to Change", "Personal Transformation", "Precipice" ],
					description: "I've been writing all my life. Although one day I'll try my hand at historical nonfiction, my true passion is in fantastical fiction. Whether it be Medieval, Victorian, or something stranger, I love it all. But what I love best is the interaction between two characters, two archetypes--different each time, altered by the stroke of the butterfly's wing. Come and read what I have to offer.",
					to: "/stories"
				}
			},
			{
				name: "programs",
				verb: "code",
				img: "Two of Pentacles",
				card: "Two of Pentacles",
				back: {
					reading: "A young man dances and juggles two coins, or pentacles. The two are linked by an infinity symbol. Behind him two ships bob on the ocean, large waves buoying them up and down.",
					elements: [ "Priority", "Management", "Adaptability" ],
					description: "There's something beautiful about programming, about computers and language flowing just so. More bluntly, there's something beautiful about how code does exactly what you tell it to, mostly. The person in the wrong is always you, one way or another: you're your own worst enemy. And as frustrating as that can be, it's freeing. Very freeing.",
					to: "/coding"
				}
			},
			{
				name: "websites",
				verb: "design",
				img: "Page of Swords",
				card: "The Page of Swords",
				back: {
					reading: "A young man stands with his sword to the sky.His posture seems indecisive. A breeze tousles his hair and the clouds above move with a speedy wind. The ground is green and growing.",
					elements: [ "New ideas", "Curiosity", "New Communication" ],
					description: "The problem with programming is that often, what goes on is entirely underneath the hood. Web design, especially app design, is something very different: what you see is what you get, mostly. Or at least what you do will manifest in visible ways both to you and to others. And it's a pleasure to show off what you've done.",
					to: "/webdesign"
				}
			},
			{
				name: "games",
				verb: "make",
				img: "Two of Swords",
				card: "Two of Swords",
				back: {
					reading: "A blindfolded woman in a white robe sits holding two crossed swords. The swords are in perfect balance but her vision is blocked. Behind her a dangerous sea is full of rocky spires.",
					elements: [ "Decisions", "Weighing options", "Uncertainty" ],
					description: "I've been playing games for almost longer than I've been writing. A long time. My first experiences in gaming were the Zelda games, FFVII, and all manner of silly little browser games. But something about putting someone in the seat of the story, letting them make their own adventure--that's something I'm passionate about. That's something I'd like to be able to do.",
					to: "/games"
				}
			}
		],
	}),
}
</script>
