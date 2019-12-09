<template>
  <layout-default title="Fractal Tree Generator">
    <div class="story">
        <p>What’s fun? Fractal, recursively-made objects. What’s more fun than that? Fractal, recursively-made objects that unfold randomly. What’s more fun than even that? Objects that don’t just unfold randomly–they grow in unpredictable but organic ways that the eye finds pleasing. This fun little Java application does just that.</p>

        <img src="/assets/images/fractalTree.png">

        <p>It’s in the very early stages, and it’s not much of an application at all. But if you like it, <a href="">come on by</a> and check it out. If nothing else, it sure is relaxing to look at.</p>
    </div>
  </layout-default>
</template>

<script>
import LayoutDefault from '@/layouts/LayoutDefault.vue';

export default {
  name: `Fractal_generator`,
  components: {
    LayoutDefault,
  },
};
</script>

<style lang="scss">
</style>