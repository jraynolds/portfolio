<template>
    <router-link :to="card.link" tag="div" class="place">
        <vue-flip :active-hover="true" width="100%" height="100%" class="card">
            <div slot="front" class="card__front">
                <div class="card__image" v-bind:style="{ backgroundImage: 'url(' + card.image + ')' }"></div>
                <span class="card__title" v-html="card.title"/>
                <span class="card__excerpt" v-html="card.excerpt"/>
            </div>
            <div slot="back" class="card__back">
                <span class="card__summary" v-html="card.summary" @click="click"/>
            </div>
        </vue-flip>
    </router-link>
</template>

<script>
import VueFlip from "vue-flip";

export default {
    props: {
        card: {
            type: Object,
            required: true
        }
    },
    components: {
        VueFlip
    },
    methods: {
        click(e) {
            e.stopPropagation();
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../scss/_variables.scss";

@font-face {
    font-family: "BluuNext-Bold";
    src: url("../assets/fonts/bluunext-bold.ttf") format("ttf");
}

.place {
    width: 300px;
    height: 400px;
    padding: 5px;
    margin-right: 10px;
    margin-bottom: 20px;

    box-sizing: border-box;

    background-color: $base-color;
}

.card {

    width: 100%;
    height: 100%;

    &__front, &__back {    
        width: 100%;
        height: 100%;
        padding: 5px;
        box-sizing: border-box;

        display: flex;
        flex-direction: column;

        background-color: black;
        border: 2px solid $highlight-color;
    }

    &__image {
        flex-grow: 1;
        width: 100%;

        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }

    &__title, &__excerpt {
        text-align: center;
    }

    &__title {
        color: $highlight-color;
        font-size: x-large;
        font-family: "BluuNext-Bold"
    }

    &__excerpt {
        margin-bottom: .5rem;

        color: $mid-text-color;
        font-family:'Arial';
        font-style: italic;
    }

    &__back {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    &__summary {
        margin: 10px;

        text-align: center;

        color: $mid-text-color;
    }
}
</style>