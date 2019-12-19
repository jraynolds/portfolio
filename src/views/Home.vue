<template>
  <div class="home">
    <div class="module">
      <div id="pillars" class="cardContainer">
        <ClickableCard :card=pillar v-for="pillar in pillars" :key="pillar.id" @cardClick="pillarClick(pillar)"/>
      </div>
      <h3 v-if="!cardClicked">Click a card to find out more.</h3>
    </div>
    <div class="module">
      <transition-group tag="div" id="pillarResults" class="cardContainer" name="slide-fade" mode="out-in">
        <FlippableCard :card=result v-for="result in pillarResults.cards" :key="result.title"/>
      </transition-group>
      <transition tag="div" name="slide-fade" mode="out-in">
        <router-link tag="h3" v-if="pillarResults.cards" :to="pillarResults.link" :key="0" style="cursor: pointer;">{{ pillarResults.after }}</router-link>
      </transition>
    </div>
  </div>
</template>

<script>
import ClickableCard from '@/components/cards/ClickableCard.vue'
import FlippableCard from '@/components/cards/FlippableCard'

export default {
  name: 'home',
  components: {
    ClickableCard,
    FlippableCard
  },
  data: function() {
    return {
      pillars: [
        {
          title: "I write stories.",
          image: "/assets/images/emperor.png",
          summary: "",
          cards: [
            {
              title: "Cultist Simulator:<br>Cat Caro",
              image: "/assets/images/headers/catcaro.png",
              link: "stories/cultist_caro",
              excerpt: '"Of course I dreamt it," she answered, as if it was perfectly obvious. As if it was perfectly ordinary to dream of a whole day before living it.',
              summary: "A knife-wielding mercenary and the titular soothsayer explore a rotting house inhabited by a great serpent and a hidden door. These would be impossible obstacles--if Cat Caro hadn't seen it all in her dreams.<br>Characters from <a href='http://weatherfactory.biz/'>Weather Factory</a>'s incredible <a href='https://store.steampowered.com/app/718670/Cultist_Simulator/'>Cultist Simulator</a> game."
            },
            {
              title: "Zelda:<br>Sad Songs",
              image: "/assets/images/headers/malon.jpg",
              link: "stories/sad_songs",
              excerpt: "Maybe if I'd snared you then, when you were still my Wolfy, you'd still be mine and this world of twilight would be a little less dark.",
              summary: "A series of letters and journal entries written by some of the heroines over the Zelda games, expressing their feelings towards the Hero of Time."
            },
            {
              title: "Death is No Escape",
              image: "https://i.imgur.com/OANxEOR.png",
              link: "stories/death_escape",
              excerpt: "I turned away when the Death King pointed his finger at me, and I think I'll always regret that.",
              summary: "The Hero finds himself utterly at a loss when the Lich King is defeated. What is a hero to do when evil has been extinguished? What is he to do but to concern himself with bringing back the souls he's lost?"
            },
          ],
          link: "stories",
          after: "One or two of the stories I'm most proud of. Click me for more.",
          isActive: false
        },
        {
          title: "I code programs.",
          image: "/assets/images/empress.png",
          summary: "",
          cards: [
            {
              title: "Glimmer and Gloom bot",
              image: "/assets/images/headers/glimmer.jpg",
              link: "coding/glimmer_bot",
              excerpt: "A bot that plays Flight Rising's flash game 'Glimmer and Gloom' for you. Coded in <span class='py codelang'>python</span>.",
              summary: "Mostly built on the backs of others' modules, but with some clever avoidance of any logic or objects. Isn't it nice when screen parsing happens this fast?"
            },
            {
              title: "Timeliner",
              image: "/assets/images/headers/timeliner.png",
              link: "coding/timeliner",
              excerpt: "A writing/notetaking organization tool, showing where characters enter and exit. Coded in <span class='js codelang'>Javascript</span> and <span class='p5 codelang'>p5</span>.",
              summary: "One day this utility should be updated to work with Vue as a standalone application. But for now, it exists in posterity."
            },
            {
              title: "Ping Graph",
              image: "/assets/images/headers/pingGraph.png",
              link: "coding/ping_graph",
              excerpt: "A <span class='java codelang'>Java</span> utility for those with unstable internet.",
              summary: "I've spent a long, long time trying to play multiplayer games on less-than-stable internet. Although this utility can't exactly fix poor connection, it can hopefully help you track and diagnose."
            },
          ],
          link: "coding",
          after: "Several of the programs and projects I've cobbled together. Click me for more.",
          isActive: false
        },
        {
          title: "I make games.",
          image: "/assets/images/hermit.png",
          summary: "",
          cards: [
            {
              title: "The Human Reignition Project",
              image: "/assets/images/headers/hrp.jpg",
              link: "games/hrp",
              excerpt: "A mildly dystopic, near-future visual novel about the isolation technology brings.",
              summary: "Initially a writer hired to work on the Hitomi character and storyline, I'm now principal coder and a major writer as well.<br>Mid-2020 release expected."
            },
            {
              title: "Dragon's Teeth",
              image: "https://i.imgur.com/OANxEOR.png",
              link: "games/dragons_teeth",
              excerpt: "A choose-your own adventure (rhythm?) game about a deathless mercenary group and the boy thrust into it.",
              summary: " A boy traveling to become a knight is killed on the road, but is given a second chance at life and a Faustian bargain. A mercenary group takes him in, but they're more than they seem..."
            },
          ],
          link: "games",
          after: "The games I'm working on or plan to quite soon. Click me for more.",
          isActive: false
        },
      ],
      pillarResults: {},
      cardClicked: false
    }
  },
  methods: {
    pillarClick(pillar) {
      this.cardClicked = true;

      let numActives = 0;
      this.pillars.forEach(function(p) {
        if (p != pillar) p.isActive = false;
        else pillar.isActive = !pillar.isActive;
        if (p.isActive) numActives++;
      });

      if (numActives == 0) this.pillarResults = [];
      else this.pillarResults = this.pillars.find(p => p.isActive);
    }
  }
}
</script>

<style scoped>
h3 {
  text-align: center;
  margin-bottom: 0px !important;
}

#pillars, #pillarResults {
  margin-bottom: 10px;
}
</style>