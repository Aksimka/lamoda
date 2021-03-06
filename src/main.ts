import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import '@/assets/styles/reset.css'

// @ts-ignore
import VC from '@fireworksx/vc_ui/dist/vc.umd.js'
// @ts-ignore
import VCIcons from '@fireworksx/vc_ui/dist/vc-icons.umd.js'

Vue.config.productionTip = false;

Vue.use(VC);
Vue.use(VCIcons);

new Vue({
    router,
    store,
    render: h => h(App),
    mounted() {
        VC.lockDomZoom()
    }
}).$mount('#app');
