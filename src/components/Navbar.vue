<template>
    <nav class="nav">
        <div class="nav__left">
            <router-link to="/stories" tag="div" id="nav_stories">Stories</router-link>
            <router-link to="/coding" tag="div" id="nav_coding">Coding</router-link>
            <router-link to="/games" tag="div" id="nav_games">Games</router-link>
        </div>
        <div class="nav__iconwrapper" style="flex-grow: 0;">
            <router-link to="/" tag="div" id="nav_icon">
                <img src="\assets\images\icon.png">
            </router-link>
        </div>
        <div class="nav__right">
            <router-link to="/about" tag="div" id="nav_about">About</router-link>
            <div id="nav_social">[][][]</div>
            <router-link to="/extras" tag="div" id="nav_extras">Extras</router-link>
        </div>
    </nav>
</template>

<script>
export default {
    name: "Navbar"
}
</script>

<style lang="scss" scoped>
    .nav {
        height: 80px;
        padding-right: 1em;
        padding-left: 1em;

        display: flex;
        justify-content: center;
        align-items: center;
        
        background-color: black;
        border-bottom: 1px solid gray;

        &>div {
            height: 100%;
            display: flex;
            flex: 1;

            cursor: pointer;

            &>div {

                font-size: xx-large;
                font-family: 'BluuNext-Bold';
                font-style: bold;

                justify-content: center;
                align-items: center;

                height: 100%;
                display: flex;
                flex: 1;

                transition: color 1s, background-color 1s;

                &:hover {
                    background-color: gray;
                    color: gold;
                }
            }
        }

        &__iconwrapper {
            height: 100%;
            width: 80px;

            flex-grow: 0;
        }
    }

    #nav_icon {
        height: 100%;
        width: 80px;
        position: relative;
        transition: background-color 1s;

        &:before {
            display: block;
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            box-shadow: inset 0px 0px 3px 3px black;
        }

        &>img {
            max-width: 80px;
        }

        &:hover {
            background-color: #ffc367 !important;
        }
    }

    .router-link-active {
        color: #ffc367;
    }
</style>