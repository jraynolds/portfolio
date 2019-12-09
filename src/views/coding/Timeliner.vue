<template>
  <layout-default title="Timeliner">
    <div class="article">
        <p>Not so long ago, I inherited La Morte D’Arthur from my grandfather, rest his soul. Besides being an account of Arthur’s life, it also refers to the people who surrounded him: his father, his mother, his opponents and so on.</p>

        <p>Here’s the problem. Entire chapters are devoted to confusing battle descriptions and events happen that seem impossible to reconcile with each other. The Lady of the Lake gets her head chopped off… then comes back?</p>

        <p>A long time ago, reading <em>The Making of the Atomic Bomb</em>, I discovered there are no good programs or utilities for word processing that handle character-based tracking or timelining. Let’s say I wanted to know about only Feynman’s contributions to Atomic Bomb development in the book: would I be able to do something more nuanced than Ctrl+F in Word? Evernote? LibreOffice? OpenOffice? Not so likely.</p>

        <p>So I made something that can handle that. It’s coded in Javascript and the code is available for you to take a look at if you like. One day it'll be a single-page app with Vue... one of these days.</p>

        <img src="/assets/images/headers/timeliner.png">

        <p>If you want to try it out for yourself, be my guest. Just don’t try to put a whole book in there. It’s fast, but not that fast.</p>

        <p>I’ll continue to update the application. Feel free to follow along on <a href="https://github.com/jraynolds/timeliner">Github</a>, or play with it <a href="https://jraynolds.github.io/timeliner/">online</a>.</p>
    </div>
  </layout-default>
</template>

<script>
import LayoutDefault from '@/layouts/LayoutDefault.vue';

export default {
  name: `Timeliner`,
  components: {
    LayoutDefault,
  },
};
</script>

<style lang="scss">
</style>