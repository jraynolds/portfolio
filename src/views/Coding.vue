<template>
  <div class="coding">
    <h2>I specialize in Java-based languages:</h2>
    <h3><em><span class="java codelang">Java</span>, <span class="js codelang">Javascript</span>, <span class="csharp codelang">C#</span>, as well as <span class="python codelang">python</span> and <span class="p5 codelang">p5</span>.<br>This website is coded in <span class="vue codelang">Vue</span>!</em></h3>
    <h3><em>Here are some individual projects I'm particularly proud of.</em></h3>

    <div id="finalized" class="cardContainer" style="margin-bottom: 10px;">

      <card :card=code v-for="code in codes" v-bind:key="code.id"></card>

    </div>
    
    <h3>For more, come visit my <a href="https://github.com/jraynolds">github!</a></h3>

  </div>
</template>

<script>
import Card from "../components/Card.vue";

export default {
  name: `coding`,
  components: {
    Card
  },
  data: function() {
    return {
      codes: [
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
        {
          title: "Fractal Tree Generator",
          image: "/assets/images/headers/fractalTree.png",
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
@import "@/scss/_variables.scss";

.coding {
  text-align: center;
}

.codelang {
  color: $highlight_color;
}

</style>