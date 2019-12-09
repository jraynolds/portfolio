<template>
    <div class="LayoutDefault">
        <Navbar/>
        <div class="LayoutDefault__main">
            <div class="LayoutDefault__main__title">
                <h1>{{ title }}</h1>
            </div>
            <main class="LayoutDefault__main__content">
                <slot/>
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
    name: `LayoutDefault`,
    components: {
        Navbar,
        Foot
    },
    props: {
        title: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            user: null,
        };
    },
    created() {
        // Simulate fetching user data.
        setTimeout(() => {
            this.user = { name: `John Doe` };
        }, 2000);
    }
};
</script>

<style lang="scss">
@import "../scss/_variables.scss";

@font-face {
    font-family: "BebasNeue";
    src: url("../assets/fonts/BebasNeue-Regular.ttf") format("ttf");
}
@font-face {
    font-family: "BluuNext-Bold";
    src: url("../assets/fonts/bluunext-bold.ttf") format("ttf");
}
@font-face {
    font-family: "BluuNext-BI";
    src: url("../assets/fonts/bluunext-bolditalic.ttf") format("ttf");
}
@font-face {
    font-family: "BluuNext-Title";
    src: url("../assets/fonts/BluuNext-Titling.ttf") format("ttf");
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

.LayoutDefault {
    margin-right: auto;
    margin-left: auto;
    min-height: 100vh;

    display: flex;
    flex-direction: column;

    &__main {
        margin-left: auto;
        margin-right: auto;
        min-width: 60vw;
        max-width: 1280px;

        display: flex;
        flex-grow: 1;
        flex-direction: column;

        color: gray;

        &__title {
            margin-top: 2em;
            margin-bottom: 2em;       

            text-align: center;
            font-size: xx-large;

            color: $highlight-color;
        }

        &__content {
            margin-bottom: 3em;
            margin-left: 2em;
            margin-right: 2em;

            display: flex;

            background-color: black;
            box-shadow: 0 10px 10px 20px black;

            &>div {
                width: 100%;

                display: flex;
                flex-direction: column;
            }

            h2 {
                margin-top: 20px;
                color: $highlight-color;
            }

            h3 {
                margin-bottom: 20px;
            }

            .cardContainer {
                display: flex;
                flex-wrap: wrap;
                justify-content: space-evenly;

                margin-right: -20px;
                margin-bottom: -20px;
            }
        }
    }

    &__spacer {
        display: flex;
        flex-grow: 1;
    }

    &__footer {
        padding-top: 1em;
        padding-bottom: 1em;

        border-top: 1px solid $base-color;
        background-color: black;
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

