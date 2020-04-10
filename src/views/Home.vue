<template>
  <div class="home">
		<v-row class="pa-10">
			<v-col 
				sm="6"
				lg="3"
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
				img: "emperor",
				card: "The Emperor",
				back: {
					reading: "A strong figure armed and armored by the passage of time. He wields a sword and a scepter, symbolizing his strength as well as his diligence of rule. Here there is a hierarchy, and he sits at its top.",
					elements: [ "Fatherhood", "Authority", "Structure", "Wisdom" ],
					description: "I've been writing all my life. Although one day I'll try my hand at historical nonfiction, my true passion is in fantastical fiction. Whether it be Medieval, Victorian, or something stranger, I love it all. But what I love best is the interaction between two characters--different each time, altered by the stroke of the butterfly's wing. Come and read what I have to offer.",
					to: "/stories"
				}
			},
			{
				name: "programs",
				verb: "code",
				img: "empress",
				card: "The Empress",
				back: {
					reading: "A strong figure armed and armored by the passage of time. He wields a sword and a scepter, symbolizing his strength as well as his diligence of rule. Here there is a hierarchy, and he sits at its top.",
					elements: [ "Fatherhood", "Authority", "Structure", "Wisdom" ],
					description: "There's something beautiful about programming, about computers and language flowing just so. More bluntly, there's something beautiful about how code does exactly what you tell it to, mostly. The person in the wrong is always you, one way or another: you're your own worst enemy. And as frustrating as that can be, it's freeing. Very freeing.",
					to: "/coding"
				}
			},
			{
				name: "websites",
				verb: "design",
				img: "",
				card: "The ???",
				back: {
					reading: "A strong figure armed and armored by the passage of time. He wields a sword and a scepter, symbolizing his strength as well as his diligence of rule. Here there is a hierarchy, and he sits at its top.",
					elements: [ "Fatherhood", "Authority", "Structure", "Wisdom" ],
					description: "The problem with programming is that often, what goes on is entirely underneath the hood. Web design, especially app design, is something very different: what you see is what you get, mostly. Or at least what you do will manifest in visible ways both to you and to others. And it's a pleasure to show off what you've done.",
					to: "/webdesign"
				}
			},
			{
				name: "games",
				verb: "make",
				img: "hermit",
				card: "The Hermit",
				back: {
					reading: "A strong figure armed and armored by the passage of time. He wields a sword and a scepter, symbolizing his strength as well as his diligence of rule. Here there is a hierarchy, and he sits at its top.",
					elements: [ "Fatherhood", "Authority", "Structure", "Wisdom" ],
					description: "I've been playing games for almost longer than I've been writing. A long time. My first experiences in gaming were the Zelda games, FFVII, and all manner of silly little browser games. But something about putting someone in the seat of the story, letting them make their own adventure--that's something I'm passionate about. That's something I'd like to be able to do.",
					to: "/games"
				}
			}
		],
	}),
}
</script>
