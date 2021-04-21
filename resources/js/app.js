import Vue from 'vue'
import VueAxios from 'vue-axios'
import router from './router'
import axios from 'axios'
import App from './App.vue'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
import VueTailwindPicker from 'vue-tailwind-picker'

const optionsSweetalert2 = {
    showConfirmButton: false,
    timerProgressBar: true,
    timer: 6000
}

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

axios.defaults.baseURL = `${window.location.origin}/api`

axios.interceptors.response.use(undefined, (error) => {
    if (error.response.status === 401) {
        router.push({name: 'Login'})
    }
    return Promise.reject(error)
})

import {store} from './store/store'

Vue.mixin({
    methods: {
        compareObject (object, objectCompare) {
            if (typeof object === 'object') {
                let sortObject = Object.keys(object).sort()
                let sortObjectCompare = Object.keys(objectCompare).sort()
                let response = null
                if (sortObject.join('') !== sortObjectCompare.join('')) {
                    response = 'No es igual'
                }
                let data = {}
                if (response === null) {
                    for (let i = 0; i < sortObject.length; i++) {
                        if ((sortObject[i] === sortObjectCompare[i])
                            && (object[sortObject[i]] !== objectCompare[sortObjectCompare[i]])
                            && (object[sortObject[i]] !== null)) {
                            data[sortObject[i]] = object[sortObject[i]]
                        }
                    }
                }
                let bo = false
                return (response !== null) ? response : (Object.entries(data).length > 0 ? true : (bo))
            }
        }
    }
})

Vue.use(VueAxios, axios)
Vue.use(VueSweetalert2, optionsSweetalert2)
Vue.use(VueTailwindPicker)

new Vue({
    store,
    router,
    render: h => h(App),
    components: {App}
}).$mount('#app')