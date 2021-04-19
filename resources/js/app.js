import Vue from 'vue'
import VueAxios from 'vue-axios'
import router from './router'
import axios from 'axios'
import App from './App.vue'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

const optionsSweetalert2 = {
    showConfirmButton: false,
    timerProgressBar: true,
    timer: 6000
}

Vue.use(VueAxios, axios)
Vue.use(VueSweetalert2, optionsSweetalert2)

router.beforeEach((to,from,next) => {
    if (to.matched.some(record => record.meta.requiredAuth)) {
        if (localStorage.getItem('user') === null) {
            next({name: 'Login'})
        } else {
            next()
        }
    } else {
        next()
    }
})

axios.defaults.baseURL = `${window.location.origin}/`

axios.interceptors.response.use(undefined, (error) => {
    if (error.response.status === 401) {
        router.push({name: 'Login'})
    }
    return Promise.reject(error)
})

import {store} from './store/store'

new Vue({
    store,
    router,
    render: h => h(App),
}).$mount('#app')