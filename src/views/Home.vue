<template>
    <div>
        <div style="display: flex">
            <product-card
                old-price="2999"
                price="2399 ₽"
                product-name="Рубашка"
                brand="Armani"
                sizes="46/48 48/50 50/52"
            >
                <span slot="top-right"> icon</span>
                <span slot="bottom-left">
                    <span class="badge-wrapper">
                        <discount-badge big>-20%</discount-badge>
                    </span>
                </span>
            </product-card>
            <product-card
                old-price="2999"
                price="2399 ₽"
                product-name="Рубашка"
                brand="Armani"
                sizes="46/48 48/50 50/52"
            >
                <span slot="top-right"> icon</span>
                <span slot="bottom-left">
                    <span class="badge-wrapper">
                        <discount-badge big>-20%</discount-badge>
                    </span>
                </span>
            </product-card>
            <product-card
                old-price="2999"
                price="2399 ₽"
                product-name="Рубашка"
                brand="Armani"
                sizes="46/48 48/50 50/52"
            >
                <span slot="top-right"> icon</span>
                <span slot="bottom-left">
                    <span class="badge-wrapper">
                        <discount-badge big>-20%</discount-badge>
                    </span>
                </span>
            </product-card>
        </div>
        <div>
            <product-card
                old-price="2999"
                price="2399 ₽"
                product-name="Рубашка"
                brand="Armani"
                sizes="46/48 48/50 50/52"
            >
                <span slot="top-right"> icon</span>
                <span slot="bottom-left">
                    <span class="badge-wrapper">
                        <discount-badge big>-20%</discount-badge>
                    </span>
                </span>
            </product-card>
        </div>
    </div>
</template>

<script>
import ProductCard from '../components/Cards/ProductCard'
import DiscountBadge from '../components/Badges/DiscountBadge'
export default {
    name: 'Home',
    components: {
        DiscountBadge,
        ProductCard,
    },
}
</script>

<style scoped lang="sass">
.badge-wrapper
    position: relative
    left: 10px
    top: 7px
</style>
