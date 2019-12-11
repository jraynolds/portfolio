<template>
  <div id="app">
    <Navbar/>
    <div class="LayoutDefault__main">
        <div class="LayoutDefault__main__title">
            <h1>{{ pageTitle }}</h1>
        </div>
        <main class="LayoutDefault__main__content">
            <transition name="fade" mode="out-in">
              <router-view/>
            </transition>
        </main>
    </div>
    <div class="LayoutDefault__spacer"></div>
    <Foot/>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue"
import Foot from "@/components/Foot.vue"

export default {
  name: `app`,
  components: {
    Navbar,
    Foot
  },
  props: {
    title: {
      type: String,
      required: false
    }
  },
  computed: {
    pageTitle: function() {
      return this.$route.meta.title;
    }
  }
}
</script>

<style lang="scss">
@import "@/scss/_variables.scss";

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}
</style>
