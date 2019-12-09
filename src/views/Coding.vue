<template>
  <layout-default title="Coding" nav="coding">
    <div class="coding">
      <h2 style="text-align: center;">I specialize in Java-based languages:</h2>
			<h3 style="font-style: italic; text-align: center;"><span class="java codelang">Java</span>, <span class="js codelang">Javascript</span>, <span class="vue codelang">Vue</span>, <span class="csharp codelang">C#</span>, as well as <span class="python codelang">python</span> and <span class="p5 codelang">p5</span>.<br>This website is coded in <span class="vue codelang">Vue</span>!</h3>
      <h3 style="font-style: italic; text-align: center;">Here are some individual projects I'm particularly proud of.</h3>

      <div id="finalized" class="cardContainer" style="margin-bottom: 10px;">

        <card :card=code v-for="code in codes" v-bind:key="code.id"></card>

			</div>
      
      <h3>For more, come visit my <a href="">github!</a></h3>

    </div>
  </layout-default>
</template>

<script>
import LayoutDefault from '../layouts/LayoutDefault.vue';
import Card from "../components/Card.vue";

export default {
  name: `coding`,
  components: {
    LayoutDefault,
    Card
  },
  data: function() {
    return {
      codes: [
        {
          title: "Timeliner",
          image: "https://i.imgur.com/OANxEOR.png",
          link: "coding/fractal_generator",
          excerpt: "A writing/notetaking organization tool, showing where characters enter and exit. Coded in <span class='js codelang'>Javascript</span> and <span class='p5 codelang'>p5</span>.",
          summary: "One day this utility should be updated to work with Vue as a standalone application. But for now, it exists in posterity."
        },
        {
          title: "Ping Graph",
          image: "https://i.imgur.com/OANxEOR.png",
          link: "coding/fractal_generator",
          excerpt: "A <span class='java codelang'>Java</span> utility for those with unstable internet.",
          summary: "I've spent a long, long time trying to play multiplayer games on less-than-stable internet. Although this utility can't exactly fix poor connection, it can hopefully help you track and diagnose."
        },
        {
          title: "Fractal Tree Generator",
          image: "https://i.imgur.com/OANxEOR.png",
          link: "coding/fractal_generator",
          excerpt: "A fractal tree generator utility coded in <span class='java codelang'>Java</span>.",
          summary: "It’s in the very early stages, and it’s not much of an application at all. But if you like it, come on by and check it out. If nothing else, it sure is relaxing to look at."
        },
      ]
    }
  },
  // filters: {
  //   brokentitles(titles) {
  //     return titles.join("<br>");
  //   },
  //   returnAsArray(stringOrArray) {
  //     if (Array.isArray(stringOrArray)) return stringOrArray;
  //     return [stringOrArray];
  //   }
  // }
};
</script>

<style lang="scss" scoped>

  .codelang {
    color: darkred;
  }

</style>