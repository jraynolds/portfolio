<template>
    <div class="about">
        <div class="avatar">
            <div id="aboutCard" class="cardContainer">
                <Card :card=aboutCard v-bind="aboutCard.id"/>
            </div>
        </div>
        <div class="writeup">
            <h3>My name is Jasper Raynolds.</h3>
            <p>I'm a writer, coder and game developer with a B.A. in Psychology. I think people and their stories are fascinating--and that's why every aspect of my creations is designed to facilitate exploring those stories.</p>
            <p>You're welcome to contact me if you have writing, coding, game creation or web design that you need. You can use the social media icons above, or you can contact me via email at <a href="mailto: jasperraynolds@gmail.com">jasperraynolds@gmail.com</a>.</p>
        </div>
    </div>
</template>

<script>
import Card from "@/components/Card.vue";

export default {
    name: `about`,
    components: {
        Card
    },
    data: function() {
        return {
        aboutCard: 
            {
            image: "/assets/images/headers/catcaro.png",
            reverseImage: "/assets/images/headers/americanwest.jpg"
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.about {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    flex-direction: row;

    & .avatar, & .writeup {
        max-width: 500px;
        flex-grow: 1;
    }

    h3 {
        margin-top: 20px;
    }
}
</style>