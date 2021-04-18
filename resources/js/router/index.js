import Vue from 'vue'
import VueRouter from 'vue-router'

const Layout = () => import('../views/Layout.vue')
const Home = () => import('../views/Home/Home.vue')
const Login = () => import('../views/Session/Login.vue')
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: Layout,
        redirect: {name: 'Home'},
        children: [
            {
                path: '/home',
                name: 'Home',
                meta: { requiredAuth: true },
                component: Home
            }
        ]
    },
    {
        path: '/session/login',
        component: Login,
        name: 'Login'
    },
    {
        path: '*',
        component: Home,
        redirect: {name: 'Home'}
    }
]

const router = new VueRouter({
    base: process.env.BASE_URL,
    routes
})

export default router