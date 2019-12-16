<template>
    <div class="holder" @click="$emit('cardClick')">
    <!-- <div class="holder" @click="card.isActive = !card.isActive"> -->
        <div class="place">
            <vue-flip :active-click="false" width="100%" height="100%" class="card" :class="{hover: card.isActive, faded: !card.isActive}">
                <div slot="front" class="card__front">
                    <div v-if="card.image != null" class="card__image" v-bind:style="{ backgroundImage: 'url(' + card.image + ')' }"></div>
                    <span v-if="card.title != null" class="card__title" v-html="card.title"/>
                    <span v-if="card.excerpt != null" class="card__excerpt" v-html="card.excerpt" @click="hrefClick"/>
                </div>
                <div slot="back" class="card__back">
                    <div v-if="card.reverseImage != null" class="card__image" v-bind:style="{ backgroundImage: 'url(' + card.reverseImage + ')' }"></div>
                    <span class="card__summary" v-if="card.summary" v-html="card.summary" @click="hrefClick"/>
                </div>
            </vue-flip>
        </div>
    </div>
</template>

<script>
import VueFlip from "vue-flip";

export default {
    props: {
        card: {
            type: Object,
            required: true
        },
        cards: {
            type: Array,
            required: false
        }
    },
    components: {
        VueFlip
    },
    methods: {
        hrefClick(e) {
            if (e.target.tagName == "A") e.stopPropagation();
        }
    }
}
</script>

<style lang="scss" scoped>
@import "@/scss/_variables.scss";

@font-face {
    font-family: "BluuNext-Bold";
    src: url("../../assets/fonts/bluunext-bold.ttf") format("ttf");
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

.card.faded:after {
    opacity: 0.8;
}

.card.faded:hover:after {
    opacity: 0;
}

.card:after {
    content:'\A';
    position:absolute;
    width:100%; height:100%;
    top:0; left:0;
    background:rgba(0,0,0,0.6);
    opacity:0;
    transition: all 0.5s;
    -webkit-transition: all 0.5s;
}

.card {

    width: 100%;
    height: 100%;

    transition: opacity 1s;

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