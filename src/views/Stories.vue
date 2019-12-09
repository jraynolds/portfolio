<template>
  <layout-default title="Stories">
    <div class="stories">
      <h2 style="text-align: center;">Finalized</h2>
			<h3 style="font-style: italic; text-align: center;">These are stories that have a certain amount of polish.<br>Some are wholly my own and some are inspired by others.</h3>

      <div id="finalized" class="cardContainer">

        <card :card=finish v-for="finish in finished" v-bind:key="finish.id"></card>

			</div>

      <h2 style="text-align: center;">Hooks</h2>
			<h3 style="font-style: italic; text-align: center;">These are stories that are yet to be.<br>Perhaps some will catch your fancy--and maybe some will get finished one day.</h3>

      <div id="hooks" class="cardContainer">

        <card :card=hook v-for="hook in hooks" v-bind:key="hook.id"></card>

			</div>
      
    </div>
  </layout-default>
</template>

<script>
import LayoutDefault from '../layouts/LayoutDefault.vue';
import Card from "../components/Card.vue";

export default {
  name: `stories`,
  components: {
    LayoutDefault,
    Card
  },
  data: function() {
    return {
      finished: [
        {
          title: "American Sunset:<br>Disbelief",
          image: "/assets/images/headers/americanwest.jpg",
          link: "stories/american_disbelief",
          excerpt: "My name is Isaiah Colwell, and I submit that these stories you hear are worth just about as much as a bit of spare ear’s wax.",
          summary: "A farmer's boy firmly disbelieves the tales about supernatural creatures, magic, and strange happenings that are told about the small town of Silver Springs. His disbelief is magical too.<br>Written for a few friends' Kickstarter campaign."
        },
        {
          title: "Cultist Simulator:<br>Cat Caro",
          image: "/assets/images/headers/catcaro.png",
          link: "stories/cultist_caro",
          excerpt: '"Of course I dreamt it," she answered, as if it was perfectly obvious. As if it was perfectly ordinary to dream of a whole day before living it.',
          summary: "A knife-wielding mercenary and the titular soothsayer explore a rotting house inhabited by a great serpent and a hidden door. These would be impossible obstacles--if Cat Caro hadn't seen it all in her dreams.<br>Characters from Weather Factory's incredible <a href='google.com'>Cultist Simulator</a> game."
        },
        {
          title: "Darker than Black:<br>I Dream",
          image: "/assets/images/headers/yin.png",
          link: "stories/darker_dream",
          excerpt: 'A doll is not supposed to dream; this is common knowledge and I never found any reason to doubt it until I met Hei.',
          summary: 'The blind Doll Yin hesitates as she "watches" her companion Hei sleep, conflicted by her feelings for him. For after all, Dolls do not feel. Do they?<br>Characters from the <a class="helpme" href="">Darker than Black</a> Anime.'
        },
        {
          title: "Zelda:<br>Sad Songs",
          image: "https://i.imgur.com/OANxEOR.png",
          link: "stories/sad_songs",
          excerpt: "Maybe if I'd snared you then, when you were still my Wolfy, you'd still be mine and this world of twilight would be a little less dark.",
          summary: "A series of letters and journal entries written by some of the heroines over the Zelda games, expressing their feelings towards the Hero of Time."
        },
      ],
      hooks: [
        {
          title: "Death is No Escape",
          image: "https://i.imgur.com/OANxEOR.png",
          link: "stories/death_escape",
          excerpt: "I turned away when the Death King pointed his finger at me, and I think I'll always regret that.",
          summary: "The Hero finds himself utterly at a loss when the Lich King is defeated. What is a hero to do when evil has been extinguished? What is he to do but to concern himself with bringing back the souls he's lost?"
        },
        {
          title: "Did it Hurt When you Fell From Heaven?",
          image: "https://i.imgur.com/OANxEOR.png",
          link: "stories/did_heaven",
          excerpt: 'The angel sat perched in the hospital window, looking at the cocky patient with an expression of worry on her face.',
          summary: "A playboy suffers an incredible injury, one that should have easily killed him--and yet he walks right out of it with almost superficial damage. He doesn't seem concerned but the Angel who came down from Heaven to collect his soul--who claims he was supposed to die--is."
        },
        {
          title: "Heracles",
          image: "https://i.imgur.com/OANxEOR.png",
          link: "stories/heracles",
          excerpt: "I don't know what the three witches promised him, and I didn't know what they took in return. But I know Heracles wouldn't speak a word of it to us--his closest allies--afterwards.",
          summary: "A medieval larger-than-life hero's companion and ally explains his downfall as he is put on trial for the hero's murder. He insists that the killing was more than moral--it was necessary."
        },
        {
          title: "Max Hard Noir",
          image: "https://i.imgur.com/OANxEOR.png",
          link: "stories/max_noir",
          excerpt: "Heads turned. Eyes widened. The handsome dame at the third desk blushed and bit her lip. Max Hardgrove, six feet tall minus his half-cocked trilby, had that effect.",
          summary: "A hardboiled detective playing to all the Noir cliches is assigned a straight-laced partner who begins to discover that reality seems to be adapting to the detective's illusions."
        },
        {
          title: "Frugal Lord",
          image: "https://i.imgur.com/OANxEOR.png",
          link: "stories/frugal_lord",
          excerpt: '"You..." she paused, trying to come to terms with what she\'d just heard. She stared at the empty room. "You live like this?"<br>He just cocked his head. "Yes, why?"',
          summary: "A princess captured by the evil Demon lord discovers his bare-bones, no-frills life."
        },
        {
          title: "Tinker, Spellcaster",
          image: "https://i.imgur.com/OANxEOR.png",
          link: "stories/tinker_spellcaster",
          excerpt: "A carpenter? He'd never so much as hammered a nail. He knew a spell that could do the trick, as sure as he knew one that could twist his neck so far and so quick he'd never feel a thing.",
          summary: "A sorcerer haunted by his past searches for a place to die. Instead he is rescued by a struggling outland town that claims him and declares him a new man."
        },
        {
          title: "Isekai Slave Delivery",
          image: "https://i.imgur.com/OANxEOR.png",
          link: "stories/isekai_delivery",
          excerpt: 'Just what an unfair and dishonorable man would say," the slave girl interrupted. "I\'d prefer you\'d told me you were a dirty thief: then at least I\'d believe you."',
          summary: "A man born again into a fantasy realm orders a slave girl to live out his fantasies of being a savior--but finds her utterly unimpressed."
        },
      ]
    }
  },
};
</script>

<style lang="scss" scoped>

</style>