<template>
	<div id="app">
		<Navbar/>
		<div class="main">
			<transition name="slide-fade" mode="out-in">
				<div class="title" :key="pageTitle">
					<h1>{{ pageTitle }}</h1>
				</div>
			</transition>
			<main class="content">
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

.slide-fade-enter-active {
  transition: all .5s ease;
}
.slide-fade-leave-active {
  transition: all .5s cubic-bezier(1.0, 1, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

@font-face {
	font-family: "BebasNeue";
	src: url("assets/fonts/BebasNeue-Regular.ttf") format("ttf");
}
@font-face {
	font-family: "BluuNext-Bold";
	src: url("assets/fonts/bluunext-bold.ttf") format("ttf");
}
@font-face {
	font-family: "BluuNext-BI";
	src: url("assets/fonts/bluunext-bolditalic.ttf") format("ttf");
}
@font-face {
	font-family: "BluuNext-Title";
	src: url("assets/fonts/BluuNext-Titling.ttf") format("ttf");
}

body {
	margin: 0;
	min-height: 100vh;
	background-image: url('/assets/images/space.png');
	background-attachment: fixed;

	color: $base_color;
}

h1, h2, h3, h4 {
	font-family: 'BluuNext-Bold';
}

.App {
	min-height: 100vh;
}

.main {
	margin-left: auto;
	margin-right: auto;
	min-width: 60vw;
	max-width: 1280px;

	display: flex;
	flex-grow: 1;
	flex-direction: column;

	color: gray;
}

.title {
	text-align: center;
	font-size: xx-large;

	color: $highlight-color;
}

.content {
	margin-bottom: 3em;
	margin-left: 2em;
	margin-right: 2em;
	padding: 20px;
	padding-bottom: 10px;

	display: flex;

	background-color: black;
	box-shadow: 0 10px 10px 20px black;

	&>div {
		width: 100%;

		display: flex;
		flex-direction: column;
	}

	h2:first-child {
		margin-top: 0px;
	}

	h2 {
		margin-top: 20px;
		color: $highlight-color;
	}

	h3 {
		margin-top: 0px;
		margin-bottom: 20px;
	}

	.cardContainer {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-evenly;

		margin-right: -20px;
		margin-bottom: -20px;
	}

	.article img, .story img {
		margin-left: auto;
		margin-right: auto;
		
		width: fit-content;
	}

	.article p:first-child, .story p:first-child {
		margin-top: 0px;
	}
}

.slots {
		display: flex;
		flex-grow: 1;
}

.slot {
	padding: 8px;
	background-color: $base_color;
}

.story {
		&>h3 {
				margin-top: 20px;
				margin-bottom: 0px;
		}

		&img {
				max-width: 100%;
		}
}

a {
		color: $highlight-color;
		text-decoration: none;
}

</style>
