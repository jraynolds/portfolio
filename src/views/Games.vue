<template>
  <div class="games">
      <h2 style="text-align: center;">Current Projects</h2>
      <h3 style="font-style: italic; text-align: center;">These are ongoing games in the middle of production.</h3>
      <div id="current" class="cardContainer">
          <card :card=going v-for="going in ongoing" v-bind:key="going.id"></card>
      </div>

      <h2 style="text-align: center;">Future Projects</h2>
      <h3 style="font-style: italic; text-align: center;">These are games as of yet merely planned to be made.</h3>
      <div id="future" class="cardContainer">
          <card :card=future v-for="future in futures" v-bind:key="future.id"></card>
      </div>
  </div>
</template>

<script>
import Card from "../components/Card.vue";

export default {
  name: `stories`,
  components: {
    Card
  },
  data: function() {
    return {
      ongoing: [
        {
          title: "The Human Reignition Project",
          image: "/assets/images/headers/hrp.jpg",
          link: "games/hrp",
          excerpt: "A mildly dystopic, near-future visual novel about the isolation technology brings.",
          summary: "Initially a writer hired to work on the Hitomi character and storyline, I'm now principal coder and a major writer as well.<br>Mid-2020 release expected."
        },
      ],
      futures: [
        {
          title: "Dragon's Teeth",
          image: "https://i.imgur.com/OANxEOR.png",
          link: "games/dragons_teeth",
          excerpt: "A choose-your own adventure (rhythm?) game about a deathless mercenary group and the boy thrust into it.",
          summary: " A boy traveling to become a knight is killed on the road, but is given a second chance at life and a Faustian bargain. A mercenary group takes him in, but they're more than they seem..."
        },
      ]
    }
  },
};
</script>

<style lang="scss" scoped>

</style>