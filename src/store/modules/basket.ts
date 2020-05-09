export const basket = {
    namespaced: true,
    state: {
        list: [
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
        ]
    },
    getters: {
        list(state: any) {
            return state.list
        }
    }
}
