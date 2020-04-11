<template>
	<v-app-bar
		app
		color="black"
		dark
		height="80"
	>
		<v-row 
			id="navRow" 
			class="justify-space-around" 
			style="color: gray;"
		>
			<v-col 
				v-for="(link, index) of navlinks" 
				:key="index" 
				align="center"
				class="navCol pa-0"
			>
				<router-link 
					v-if="link" 
					tag="div" 
					class="navLink d-flex justify-center align-center"
					style="height: 100%;" 
					:key="link" 
					:to="'/' + link"
				>{{ link.slice(0,1).toUpperCase() + link.slice(1) }}
				</router-link>
				<router-link 
					v-else-if="index == 3"
					to="/"
				> 
					<v-img 
						id="navImg"
						:src="'/images/icon.png'"
						height="78"
						width="75"
						style="box-shadow: inset 0px 0px 3px 3px black !important"
					/>
				</router-link>
				<a 
					v-else-if="index == 5"
					href="https://twitter.com/jasper_raynolds"
				> 
					<img
						id="navSocial"
						:src="'/images/icons/twitter.png'" 
						style="margin-top: 20px;"
						height="40"
						width="40"
					/>
				</a>
			</v-col>
		</v-row>
	</v-app-bar>
</template>

<script>
export default {
  data: () => ({
		navlinks: [
			"stories",
			"coding",
			"games",
			"",
			"websites",
			"",
			"about"
		]
  })
}
</script>

<style>
.v-toolbar__content {
	border-bottom: 2px solid lightgray !important;
	padding-top: 0px !important;
	padding-bottom: 0px !important;
}

#navImg .v-image__image {
	box-shadow: inset 0px 0px 3px 3px black !important
}
</style>

<style scoped>
#navRow {
	height: 100%;
	color: gray;
	font-size: 2em;
	font-family: 'BluuNext-Bold';
	user-select: none;
}

.navLink, #navImg {
	transition: background 1s, color 1.2s;
}

.navLink:hover {
	cursor: pointer;
	background: gray;
	color: gold;
}

#navImg {
	cursor: pointer;
}

#navImg:hover {
	background-color: gold;
}

.navCol:nth-child(4) {
	max-width: 80px;
}

#navSocial {
	transition: filter 1s;
	height: 40px;
	filter: grayscale(100%)
}

#navSocial:hover {
	filter: grayscale(0%) saturate(100) hue-rotate(235deg);
}
</style>