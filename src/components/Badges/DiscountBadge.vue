<template>
    <span class="discount-badge" :class="{'discount-badge_big': big}">
        <slot></slot>
    </span>
</template>

<script>
    export default {
        name: "DiscountBadge",
        props: {
            big: {
                required: false,
                type: Boolean,
                default: false
            }
        }
    }
</script>

<style scoped lang="sass">
.discount-badge
    text-transform: uppercase
    vertical-align: middle
    white-space: nowrap
    font-size: 9px
    letter-spacing: .3px
    padding: 5px
    -webkit-border-radius: 3px
    -moz-border-radius: 3px
    border-radius: 3px
    color: #ffffff
    background-color: #f93c00
    &_big
        height: 16px
        line-height: 16px
        font-weight: 600
</style>