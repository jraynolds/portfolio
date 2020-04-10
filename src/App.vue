<template>
  <v-app>
    <Head/>

    <v-content>
			<router-view>
			</router-view>
    </v-content>
  </v-app>
</template>

<script>
import Head from "@/components/Head.vue"

export default {
  name: 'App',

  components: {
		Head
  },

  data: () => ({
  })
};
</script>

<style>
main {
	background: url('assets/images/space.png');
}

.gold {
	color: #ffc367 !important;
}

a {
	color: #ffc367 !important;
}

.darkbackground {
	background: black;
	box-shadow: 0 10px 10px 20px black;
	color: gray;
}

.article {
	max-width: 1280px;
	margin-left: auto;
	margin-right: auto;
	margin-bottom: 20px;
}
</style>