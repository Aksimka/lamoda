<template>
    <vc-view active-panel="main">
        <vc-modal-root
            slot="modal"
            :active-modal="activeModal"
            @close="activeModal = null"
        >
            <vc-modal-card
                name="subscribe"
                :actions="subscribeActions"
                @close="activeModal = null"
            >
                <vc-icon-56-mention-outline slot="icon" />
                <template slot="header">
                    Подписаться на рассылку
                </template>
                <template slot="caption">
                    Мы будем отправлять вам только самые выгодные предложения
                </template>
            </vc-modal-card>
            <vc-modal-page name="categories" @close="activeModal = null">
                <vc-modal-page-header slot="header"
                    >Категории</vc-modal-page-header
                >
                <vc-group>
                    <vc-cell
                        v-for="(item, index) in categories"
                        expandable
                        :indicator="item.count"
                        :key="'categories_' + index"
                    >
                        <vc-avatar
                            slot="before"
                            :src="item.cover"
                            :size="40"
                            mode="app"
                        />
                        {{ item.title }}
                    </vc-cell>
                </vc-group>
                <vc-div />
            </vc-modal-page>
        </vc-modal-root>
        <vc-panel name="main">
            <vc-panel-header>Мужчинам</vc-panel-header>
            <vc-fixed-layout vertical="bottom">
                <vc-div class="men-fixed-layout">
                    <vc-button
                        mode="secondary"
                        size="xl"
                        @click="activeModal = 'categories'"
                        >Категории</vc-button
                    >
                    <vc-button size="xl">Фильтры</vc-button>
                </vc-div>
            </vc-fixed-layout>
            <div class="men-products-list">
                <product-card
                    v-for="(product, index) in products"
                    :key="index"
                    :cover="product.img"
                    :price="product.price"
                    :brand="product.brand"
                    :product-name="product.name"
                    :sizes="product.sizes"
                />
            </div>
            <vc-footer>
                40 элементов
            </vc-footer>
            <vc-group>
                <vc-header slot="header">СКИДКА 10% за подписку</vc-header>
                <vc-form-layout tag="div">
                    <vc-input
                        v-model="subscribeMail"
                        top="Ваша почта"
                        placeholder="Введите ваш email"
                    />
                    <vc-button
                        size="xl"
                        mode="secondary"
                        @click="activeModal = 'subscribe'"
                        >Подписаться</vc-button
                    >
                </vc-form-layout>
            </vc-group>
            <vc-div></vc-div>
            <vc-div></vc-div>
            <vc-div></vc-div>
            <vc-div></vc-div>
        </vc-panel>
    </vc-view>
</template>

<script>
import ProductCard from '../components/Cards/ProductCard'
export default {
    name: 'Men',
    components: { ProductCard },
    data: () => ({
        isRootSection: false,
        activeModal: null,
        subscribeActions: [
            {
                mode: 'primary',
                title: 'Погнали',
                action: () => {
                    this.activeModal = null
                },
            },
        ],
        products: [
            {
                img:
                    '//a.lmcdn.ru/img236x341/I/X/IX001XM006X5_10626175_1_v1.jpeg',
                price: '2 999 ₽',
                brand: 'Pull&Bear',
                name: 'Кросовки',
                sizes: '39 49 41 42 43 44 45',
            },
            {
                img:
                    '//a.lmcdn.ru/img236x341/I/X/IX001XM006LL_10422890_1_v1.jpeg',
                price: '2 999 ₽',
                brand: 'Pull&Bear',
                name: 'Кросовки',
                sizes: '39 49 41 42 43 44 45',
            },
            {
                img:
                    '//a.lmcdn.ru/img236x341/M/P/MP002XM1RGO0_11126778_1_v1.jpg',
                price: '2 999 ₽',
                brand: 'Pull&Bear',
                name: 'Кросовки',
                sizes: '39 49 41 42 43 44 45',
            },
            {
                img:
                    '//a.lmcdn.ru/img236x341/M/P/MP002XM1Q0HG_10915657_1_v1.jpg',
                price: '2 999 ₽',
                brand: 'Pull&Bear',
                name: 'Кросовки',
                sizes: '39 49 41 42 43 44 45',
            },
        ],
        categories: [
            {
                title: 'Ботинки',
                cover:
                    '//a.lmcdn.ru/img236x341/M/P/MP002XM1GVZ8_9051882_1_v1.jpg',
                count: 250,
            },
            {
                title: 'Домашняя обувь',
                cover:
                    '//a.lmcdn.ru/img236x341/T/O/TO263AMHLDN4_10017263_1_v1.jpg',
                count: 441,
            },
            {
                title: 'Кроссовки и кеды',
                cover:
                    '//a.lmcdn.ru/img236x341/T/O/TO263AMHLDN4_10017263_1_v1.jpg',
                count: 104,
            },
            {
                title: 'Туфли',
                cover:
                    '//a.lmcdn.ru/img236x341/M/P/MP002XM0QTH6_10329489_1_v1.jpg',
                count: 13,
            },
        ],
    }),
}
</script>

<style scoped lang="sass">
.men-fixed-layout
    display: grid
    grid-template-columns: 1fr 1fr
    grid-gap: 10px
    background: #fff
.men-products-list
    display: grid
    grid-template-columns: 1fr 1fr
    grid-gap: 2px
</style>
