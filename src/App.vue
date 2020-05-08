<template>
    <div id="app">
        <vc-root active-view="main">
            <vc-view name="main" active-panel="home">
                <vc-panel name="home">
                    <home></home>
                </vc-panel>
            </vc-view>
        </vc-root>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Home from './views/Home.vue'
import '@fireworksx/vc_ui/dist/vc.css'

export default Vue.extend({
    name: 'App',
    components: {
        Home,
    },
})
</script>

<style lang="scss">
* {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}
body {
    margin: 0;
    padding: 0;
}
#app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 2000px;
}
</style>
