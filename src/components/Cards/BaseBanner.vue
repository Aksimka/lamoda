<template>
    <div class="base-banner">
        <img class="base-banner__img" :src="src" alt="">
    </div>
</template>

<script>
    export default {
        name: 'BaseBanner',
        props: {
            src: {type: String, required: true}
        }
    }
</script>

<style lang="sass">

.base-banner
    width: 100%
    height: 290px

.base-banner__img
    object-fit: cover
    width: 100%
    height: 100%
    max-height: 100%

</style>
