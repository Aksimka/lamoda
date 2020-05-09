<template>
    <div id="app">
        <vc-epic :active-story="activeStory">
            <vc-tabbar slot="tabbar">
                <vc-tabbar-item
                    text="Главная"
                    :selected="activeStory === 'home'"
                    @click="setActiveStory('home')"
                ></vc-tabbar-item>
                <vc-tabbar-item
                    text="Мужчинам"
                    :selected="activeStory === 'men'"
                    @click="setActiveStory('men')"
                ></vc-tabbar-item>
            </vc-tabbar>
            <home name="home" />
            <men name="men" />
            <products-list name="products-list" />
        </vc-epic>
        <!--        <vc-root active-view="main">-->
        <!--            <vc-view name="main" active-panel="home">-->
        <!--                <vc-panel name="home">-->
        <!--                    <home></home>-->
        <!--                </vc-panel>-->
        <!--            </vc-view>-->
        <!--        </vc-root>-->
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Home from './views/Home.vue'
import '@fireworksx/vc_ui/dist/vc.css'
import { mapGetters } from 'vuex'
import Men from './views/Men.vue'

export default Vue.extend({
    name: 'App',
    components: {
        Men,
        Home,
    },
    computed: {
        ...mapGetters(['activeStory']),
    },
    methods: {
        setActiveStory(story: string) {
            this.$store.commit('setActiveStory', story)
        },
    },
})
</script>

<style lang="scss">
body {
    margin: 0;
    padding: 0;
}
#app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
</style>
