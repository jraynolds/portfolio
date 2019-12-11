<template>
  <div class="songs">
    <h3 style="font-style: italic; text-align: center;">These are vignettes from the perspectives of leading girls from video game franchise Legend of Zelda.</h3>
    <div id="songs" class="cardContainer">
        <card :card=song v-for="song in songs" v-bind:key="song.id"></card>
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";

export default {
  name: `sad_songs`,
  components: {
    Card
  },
  data: function() {
    return {
      songs: [
        {
          title: "Saria: Minuet",
          image: "/assets/images/headers/saria.jpg",
          link: "saria_minuet",
          excerpt: "Now I don’t think I’d care how many chains it would take to keep you here, just as long as you did stay.",
          summary: "Saria, Link's earliest friend and the loneliest member of the Kokiri in their isolated forest.<br/><br/><em>Why would he want me, anyway? He's a hero and I'm young, immature, undeveloped. Naive.</em>"
        },
        {
          title: "Malon: Song",
          image: "/assets/images/headers/malon.jpg",
          link: "malon_song",
          excerpt: "Climbing past those guards, darting past and into the castle... it’s enough to set a young maid’s heart a-flutter.",
          summary: "Malon, Link's first friend in the fields of Hyrule, irrepressible farm girl and cheery worker.<br/><br/><em>It was a nice dream while it lasted. But he's a hero and I'm just Malon the farm girl. Dirty, ugly, worn down. Used goods.</em>"
        },
        {
          title: "Ruto: Serenade",
          image: "/assets/images/headers/ruto.jpg",
          link: "ruto_serenade",
          excerpt: "It’s not every day a princess offers to marry you, you know. It’s a once-in-a-lifetime opportunity!",
          summary: "Ruto, Link's self-proclaimed fiancee, princess to the Zora. Snooty and self-centered as a girl, commanding as a woman.<br/><br/><em>It's not fair, not even a little bit--although I know better now. I forced you into it. But you </em>did<em> promise.</em>"
        },
        {
          title: "Nabooru: Requiem",
          image: "/assets/images/headers/nabooru.png",
          link: "nabooru_requiem",
          excerpt: "You were cute back then, seven years ago. A little boy determined to knock down all the obstacles in his path.",
          summary: "Nabooru, Link's flirtatious and confident ally through the passage of time. Of the Gerudo, molded by the desert.<br/><br/><em>I'm used to being the one in control at all moments in my life--but around you, I seem helpless. I have many secrets, and if you choose me I'll tell you one.</em>"
        },
        {
          title: "Midna: Lament",
          image: "/assets/images/headers/midna.jpg",
          link: "midna_lament",
          excerpt: "Maybe if I'd snared you when you were still my Wolfy, you'd still be mine and this twilight would be a little less dark.",
          summary: "Midna, of the Twili and possessed of a devilish wit. All charm and all coyness, and yet?<br/><br/><em>It was over before I knew it, and of course I could never blame you for choosing who you did. But just because I can't blame you doesn't mean it can't hurt.</em>"
        },
        {
          title: "Zelda: Lullaby",
          image: "/assets/images/headers/zelda.jpg",
          link: "zelda_lullaby",
          excerpt: "I don’t know what sorts of stories you’ve heard about princesses, but I can assure you I’m a very poor example of one.",
          summary: "Zelda, Link's ineffable and powerful princess. His destination and his goal... uncertain of herself.<br/><br/><em>I know you've chosen me, and I know I should be happy. I am, more than I've ever been, luckier than I've ever known. But I'm not who you think I am.</em>"
        },
      ]
    }
  }
};
</script>

<style lang="scss" scoped>

</style>