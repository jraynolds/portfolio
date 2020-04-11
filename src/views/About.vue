<template>
	<v-row class="pa-6 px-8 article">
		<v-row class="darkbackground">
			<v-col cols="4">
				<v-img
					:src="'/images/about.jpg'" 
				/>
			</v-col>
			<v-col cols="8">
				<h1 class="gold">My name is Jasper Raynolds.</h1>
				<p>I'm a writer, coder and game developer with a B.A. in Psychology. I think people and their stories are fascinating--and that's why every aspect of my creations is designed to facilitate exploring those stories.</p>
				<p>You're welcome to contact me if you have writing, coding, game creation or web design that you need. You can use the social media icon above, or you can contact me via email at <a href="mailto:jasperraynolds@gmail.com">jasperraynolds@gmail.com.</a></p>
			</v-col>
		</v-row>
	</v-row>
</template>

<script>
export default {

}
</script>

<style scoped>
.darkbackground {
	background: black;
	box-shadow: 0 10px 10px 20px black;
	color: gray;
}

p:last-child {
	margin-bottom: -20px;
}
</style>