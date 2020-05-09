<template>
    <vc-view active-panel="main">
        <vc-modal-root :active-modal="activeModal">
            <vc-modal-card name="subscribe">
                <template slot="header">
                    Отправляйте деньги друзьям, используя банковскую карту
                </template
                >
                <template slot="caption">
                    Номер карты получателя не нужен — он сам решит, куда зачислить средства.
                </template>
            </vc-modal-card>
        </vc-modal-root>
        <vc-panel name="main">
            <vc-panel-header><svg width="80px" height="16px" viewBox="0 0 160 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="32px/lamoda-logo/black-Ladoma" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M11.5241995,18.854976 C12.2809116,12.685721 17.206897,8.38921931 23.5485647,9.168394 C25.8050381,9.3986764 27.8429058,10.6184371 29.1125005,12.4996024 L29.1125005,12.4996024 L29.8870794,12.594239 L30.1330108,10.58584 L35.4531171,11.2388326 L32.9055198,32 L27.5854134,31.3459559 L27.8323959,29.3365054 L27.057817,29.2418688 C25.3709796,30.759209 23.0987414,31.4500562 20.8538289,31.1272402 C14.5132122,30.3480655 10.7674874,25.0231794 11.5241995,18.854976 Z M3.43147909,-2.48689958e-14 L9.06793311,0.69295023 L5.63645402,28.649654 L3.64153152e-14,27.9577553 L3.43147909,-2.48689958e-14 Z M64.2728738,0.164141929 L64.2728738,27.8989754 L58.9138809,27.8989754 L58.9138809,25.8748037 L58.132996,25.8748037 C56.6185209,27.5929837 54.4230049,28.5551225 52.1339508,28.5025466 C45.7449887,28.5025466 41.3791804,23.6729254 41.3791804,17.4584552 C41.3791804,11.243985 45.7449887,6.37861213 52.1339508,6.37861213 C54.2410086,6.32520379 56.2563694,7.21530083 57.6361255,8.79624757 L57.8124444,9.00635511 L58.5933292,9.00635511 L58.5933292,0.164141929 L64.2728738,0.164141929 Z M80.1416516,6.37861213 C87.2410824,6.37861213 91.6415733,11.243985 91.6415733,17.4584552 C91.6415733,23.6729254 87.2410824,28.5025466 80.1416516,28.5025466 C73.0432719,28.5025466 68.64173,23.6729254 68.64173,17.4584552 C68.64173,11.243985 73.0432719,6.37861213 80.1416516,6.37861213 Z M153.662052,8.78734064 L153.860122,9.00635511 L154.641007,9.00635511 L154.641007,6.98218335 L160,6.98218335 L160,27.8989754 L154.641007,27.8989754 L154.641007,25.8748037 L153.860122,25.8748037 C152.370871,27.5856231 150.199528,28.5488134 147.932544,28.5025466 C141.543582,28.5025466 137.177774,23.6729254 137.177774,17.4584552 C137.177774,11.243985 141.543582,6.37861213 147.932544,6.37861213 C150.100963,6.33435694 152.181878,7.21272614 153.662052,8.78734064 Z M115.706579,9.45544354 L115.8881,9.68185015 L116.668985,9.68185015 C118.518725,7.56093874 121.2019,6.35484783 124.015398,6.37903274 C128.758935,6.37903274 132.712227,9.6004716 132.849479,15.6744075 L132.853164,16.0025236 L132.853164,27.899396 L127.103203,27.899396 L127.103203,16.9604564 C127.103203,13.2328258 126.039603,11.9541801 122.205595,11.9541801 C118.455963,11.9541801 117.354578,13.1778367 117.308463,16.7208101 L117.306935,16.9604564 L117.306935,27.899396 L111.556974,27.899396 L111.556974,16.9604564 C111.556974,13.2328258 110.492322,11.9541801 106.659365,11.9541801 C102.909734,11.9541801 101.775157,13.1778367 101.7276,16.7208101 L101.726023,16.9604564 L101.726023,27.899396 L96.0107448,27.899396 L96.0107448,6.98260395 L101.370789,6.98260395 L101.370789,9.29068552 L102.151674,9.29068552 C103.877397,7.37482009 106.353528,6.3117356 108.930553,6.37903274 C111.546277,6.31211114 114.041798,7.44977829 115.706579,9.45544354 Z M23.6400007,14.5469076 C19.3771893,14.0232517 17.7901959,15.2945367 17.2668034,19.5594929 C16.7434109,23.8244491 17.979374,25.4080349 22.2421854,25.9316908 C26.5049968,26.4553466 28.0877862,25.2177102 28.6111787,20.9538055 C29.1345712,16.6877978 27.9028121,15.0705634 23.6400007,14.5469076 Z M52.879102,11.7056013 C48.584761,11.7056013 47.1648748,13.1619535 47.1648748,17.4584552 C47.1648748,21.7549569 48.584761,23.1755575 52.879102,23.1755575 C57.1734431,23.1755575 58.5933292,21.7549569 58.5933292,17.4584552 C58.5933292,13.1619535 57.1734431,11.7056013 52.879102,11.7056013 Z M80.1416516,11.7056013 C75.8473106,11.7056013 74.4274244,13.1619535 74.4274244,17.4584552 C74.4274244,21.7549569 75.8473106,23.1755575 80.1416516,23.1755575 C84.4370437,23.1755575 85.8558788,21.7549569 85.8558788,17.4584552 C85.8558788,13.1619535 84.4370437,11.7056013 80.1416516,11.7056013 Z M148.677695,11.7056013 C144.382303,11.7056013 142.963468,13.1619535 142.963468,17.4584552 C142.963468,21.7549569 144.382303,23.1755575 148.677695,23.1755575 C152.972037,23.1755575 154.391923,21.7549569 154.391923,17.4584552 C154.391923,13.1619535 152.972037,11.7056013 148.677695,11.7056013 Z" id="Ladoma-black" fill="#000000"></path></g></svg></vc-panel-header>
            <div class="home-main__banners-main">
                <base-banner :src="bigBanner"/>
            </div>
            <vc-group>
                <vc-header slot="header">Хорошее начало!</vc-header>
                <vc-div>
                    <div class="home-main__banners-row">
                        <base-banner
                                v-for="bannerUrl in banners"
                                :src="bannerUrl"
                                :key="bannerUrl"
                        />
                    </div>
                </vc-div>
            </vc-group>
            <vc-group>
                <vc-header slot="header">Популярное</vc-header>
                <vc-horizontal-scroll>
                    <vc-div>
                        <div class="home-main__carousel-row">
                            <product-card
                                    v-for="(item, index) in popularItems"
                                    :key="index"
                                    :cover="item.cover"
                                    :old-price="item.oldPrice"
                                    :price="item.price"
                                    :product-name="item.productName"
                                    :brand="item.brand"
                                    :sizes="item.sizes"
                            />
                        </div>
                    </vc-div>
                </vc-horizontal-scroll>
            </vc-group>
            <vc-group>
                <vc-header slot="header">Недавно просмотренные</vc-header>
                <vc-horizontal-scroll>
                    <vc-div>
                        <div class="home-main__carousel-row">
                            <product-card
                                    v-for="(item, index) in sawItems"
                                    :key="index"
                                    :cover="item.cover"
                                    :old-price="item.oldPrice"
                                    :price="item.price"
                                    :product-name="item.productName"
                                    :brand="item.brand"
                                    :sizes="item.sizes"
                            />
                        </div>
                    </vc-div>
                </vc-horizontal-scroll>
            </vc-group>
            <vc-group>
                <vc-header slot="header">СКИДКА 10% за подписку</vc-header>
                <vc-form-layout>
                    <vc-input v-model="subscribeMail" top="Ваша почта"/>
                    <vc-button size="xl" mode="secondary">Подписаться</vc-button>
                </vc-form-layout>
            </vc-group>
            <vc-div></vc-div>
            <vc-div></vc-div>
        </vc-panel>
<!--        <div style="display: flex">-->
<!--            <product-card-->
<!--                old-price="2999"-->
<!--                price="2399 ₽"-->
<!--                product-name="Рубашка"-->
<!--                brand="Armani"-->
<!--                sizes="46/48 48/50 50/52"-->
<!--            >-->
<!--                <span slot="top-right"> icon</span>-->
<!--                <span slot="bottom-left">-->
<!--                    <span class="badge-wrapper">-->
<!--                        <discount-badge big>-20%</discount-badge>-->
<!--                    </span>-->
<!--                </span>-->
<!--            </product-card>-->
<!--            <product-card-->
<!--                old-price="2999"-->
<!--                price="2399 ₽"-->
<!--                product-name="Рубашка"-->
<!--                brand="Armani"-->
<!--                sizes="46/48 48/50 50/52"-->
<!--            >-->
<!--                <span slot="top-right"> icon</span>-->
<!--                <span slot="bottom-left">-->
<!--                    <span class="badge-wrapper">-->
<!--                        <discount-badge big>-20%</discount-badge>-->
<!--                    </span>-->
<!--                </span>-->
<!--            </product-card>-->
<!--            <product-card-->
<!--                old-price="2999"-->
<!--                price="2399 ₽"-->
<!--                product-name="Рубашка"-->
<!--                brand="Armani"-->
<!--                sizes="46/48 48/50 50/52"-->
<!--            >-->
<!--                <span slot="top-right"> icon</span>-->
<!--                <span slot="bottom-left">-->
<!--                    <span class="badge-wrapper">-->
<!--                        <discount-badge big>-20%</discount-badge>-->
<!--                    </span>-->
<!--                </span>-->
<!--            </product-card>-->
<!--        </div>-->
<!--        <div>-->
<!--            <product-card-->
<!--                old-price="2999"-->
<!--                price="2399 ₽"-->
<!--                product-name="Рубашка"-->
<!--                brand="Armani"-->
<!--                sizes="46/48 48/50 50/52"-->
<!--            >-->
<!--                <span slot="top-right"> icon</span>-->
<!--                <span slot="bottom-left">-->
<!--                    <span class="badge-wrapper">-->
<!--                        <discount-badge big>-20%</discount-badge>-->
<!--                    </span>-->
<!--                </span>-->
<!--            </product-card>-->
<!--        </div>-->
    </vc-view>
</template>

<script>
import ProductCard from '../components/Cards/ProductCard'
import DiscountBadge from '../components/Badges/DiscountBadge'
import BaseBanner from '../components/Cards/BaseBanner'
export default {
    name: 'Home',
    components: {
        BaseBanner,
        // DiscountBadge,
        ProductCard,
    },
    computed: {
        popularItems() {
            return this.shuffle(this.items)
        },
        sawItems() {
            return this.shuffle(this.items)
        },
    },
    data() {
        return {
            banners: [
                'https://a.lmcdn.ru/bs2/1/77/mobtiz_m_sport_ss20_2153_tm_2116_tm.jpg',
                'https://a.lmcdn.ru/bs2/1/10/mob_m_2760_tm.jpg'
            ],
            bigBanner: 'https://a.lmcdn.ru/bs2/1/88/app_9may_2768_tm.gif',
            items: [
                {
                    oldPrice: 2500,
                    price: 2400,
                    cover: 'https://a.lmcdn.ru/img236x341/A/A/AA002EMJGLJ9_11197488_1_v1_2x.jpg',
                    productName: "Костюм спортивный",
                    brand: "Aarhon",
                    sizes: "46/48 48/50 50/52"
                },
                {
                    price: 3000,
                    cover: 'https://a.lmcdn.ru/img236x341/U/N/UN001EMCYUO5_7870092_1_v1.jpg',
                    productName: "Пуховик",
                    brand: "Under Armour",
                },
                {
                    price: 2700,
                    cover: 'https://a.lmcdn.ru/img236x341/M/P/MP002XM1Q0ZK_10362611_1_v5.jpeg',
                    productName: "Джинсы",
                    brand: "oodji",
                },
                {
                    price: 2500,
                    cover: 'https://a.lmcdn.ru/img236x341/M/P/MP002XM1K74R_10940278_1_v1_2x.jpg',
                    productName: "Джинсы",
                    brand: "Befree",
                },
                {
                    price: 2599,
                    cover: 'https://a.lmcdn.ru/img236x341/M/P/MP002XM1K74J_10940270_1_v1_2x.jpg',
                    productName: "Джинсы",
                    brand: "Befree",
                },
                {
                    price: 1610,
                    oldPrice: 1700,
                    cover: 'https://a.lmcdn.ru/img236x341/P/A/PA050AMISNR9_10602107_1_v1.jpg',
                    productName: "Слипоны",
                    brand: "Patrol",
                },
                {
                    price: 1130,
                    oldPrice: 1200,
                    cover: 'https://a.lmcdn.ru/img236x341/O/N/ON013EMHXDC4_10404867_1_v1.jpg',
                    productName: "Футболка",
                    brand: "Only & Sons",
                },
                {
                    price: 1530,
                    cover: 'https://a.lmcdn.ru/img236x341/O/N/ON013EMHXDC5_10987641_1_v1_2x.jpg',
                    productName: "Футболка",
                    brand: "Only & Sons",
                },
                {
                    price: 2130,
                    cover: 'https://a.lmcdn.ru/img236x341/M/N/MN001EMJHXX4_11187982_1_v1_2x.jpg',
                    productName: "Костюм спортивный",
                    brand: "M&2",
                },
                {
                    price: 600,
                    cover: 'https://a.lmcdn.ru/img236x341/A/D/AD002EMIYPJ5_10728957_1_v1_2x.jpg',
                    productName: "Футболка",
                    brand: "adidas",
                },
            ],
            subscribeMail: '',
            activeModal: null
        }
    },
    methods: {
        shuffle(a) {
            for (let i = a.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [a[i], a[j]] = [a[j], a[i]];
            }
            return a;
        }
    }
}
</script>

<style lang="sass">

.badge-wrapper
    position: relative
    left: 10px
    top: 7px

.home-main__banners-row
    display: grid
    grid-template-columns: 1fr 1fr
    grid-gap: 10px

.home-main__carousel-row
    display: grid
    grid-template-columns: repeat(10, 170px)
    grid-gap: 5px
    .product-card__pic-img
        height: 235px


</style>
