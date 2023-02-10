import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./assets/base.css"
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/default.css'

createApp(App)
    .use(store)
    .use(router)
    .mount('#app')
    .component('VueSlider', VueSlider)
