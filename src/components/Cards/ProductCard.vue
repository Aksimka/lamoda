<template>
    <div class="product-card">
        <a :href="link || ''" class="product-card-link">
            <div class="product-card__pic">
                <img
                    src="//a.lmcdn.ru/product/H/E/HE002EMIRLU2_10557987_1_v1.jpg"
                    class="product-card__pic-img"
                />
                <div class="product-card__overlay-top-left">
                    <slot name="top-left"></slot>
                </div>
                <div class="product-card__overlay-top-right">
                    <slot name="top-right"></slot>
                </div>
                <div class="product-card__overlay-bottom-left">
                    <slot name="bottom-left"></slot>
                </div>
                <div class="product-card__overlay-bottom-right">
                    <slot name="bottom-right"></slot>
                </div>
            </div>
            <div class="product-card__desc">
                <div class="product-card-price" v-if="price">
                    <span class="product-card-price__old" v-if="oldPrice">
                        {{ oldPrice }}
                    </span>
                    <span
                        class="product-card-price__now"
                        :class="{ 'product-card-price__now_new': oldPrice }"
                    >
                        {{ price }}
                    </span>
                </div>
                <div class="product-card__brand-name product-card__desc-item">
                    {{ brand || '\u2014' }}
                </div>
                <div class="product-card__product-name product-card__desc-item">
                    {{ productName || '\u2014' }}
                </div>
                <div class="product-card__sizes product-card__desc-item">
                    {{ sizes }}
                </div>
            </div>
        </a>
    </div>
</template>

<script>
export default {
    name: 'ProductCard',
    props: {
        link: {
            required: false,
            type: String,
        },
        price: {
            required: false,
            type: String,
        },
        oldPrice: {
            required: false,
            type: String,
        },
        brand: {
            required: false,
            type: String,
        },
        productName: {
            required: false,
            type: String,
        },
        sizes: {
            required: false,
            type: String,
            default: 'Нет данных о размерах'
        }
    },
    mounted() {
        console.log(this.price, 'price')
    },
}
</script>

<style scoped lang="sass">
.product-card
    transition: opacify .3s

.product-card-link
    text-decoration: none
    color: #000000

.product-card__pic
    position: relative
    &-img
        width: 100%

.product-card__desc
    padding: 12px 10px 8px

.product-card-price
    &__old
        font-size: 11px
        font-weight: 400
        text-decoration: line-through
        display: inline-flex
        align-items: center
        justify-content: center
    &__now
        white-space: nowrap
        font-weight: 700
        font-size: 13px
        &_new
            color: #f93c00

.product-card__desc-item
    white-space: nowrap
    text-overflow: ellipsis
    overflow: hidden
    margin-top: 5px
    font-size: 13px
.product-card__sizes
    height: 16px


.product-card__overlay-top-left
    position: absolute
    top: 0
    left: 0
.product-card__overlay-top-right
    position: absolute
    top: 0
    right: 0
.product-card__overlay-bottom-left
    position: absolute
    bottom: 0
    left: 0
.product-card__overlay-bottom-right
    position: absolute
    bottom: 0
    right: 0
</style>
