import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
// import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
// import 'swiper/dist/css/swiper.css'

import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'

// import style (>= Swiper 6.x)
// import 'swiper/swiper-bundle.css'

import swiper from 'swiper'
// import style (<= Swiper 5.x)
import 'swiper/dist/css/swiper.css'

// Vue.use(VueAwesomeSwiper, /* { default options with global component } */)

//import ElementPlus from 'element-plus';
import { ElPagination } from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
//import locale from 'element-plus/lib/locale/lang/zh-cn'
import lang from 'element-plus/lib/locale/lang/zh-cn'
import locale from 'element-plus/lib/locale'

axios.defaults.baseURL = "/api"

// 使用中文语言
locale.use(lang)

//createApp(App).use(store).use(router).use(VueAxios, axios).use(ElementPlus,{ locale }).mount('#app')
createApp(App).use(store).use(router).use(VueAxios, axios).use(ElPagination, { locale }).mount('#app')

