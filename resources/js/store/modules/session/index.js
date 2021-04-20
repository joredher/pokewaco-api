import Vue from 'vue'
import router from '../../../router'

// state
const state = {
    access_token: JSON.parse(localStorage.getItem('access_token')),
    user: JSON.parse(localStorage.getItem('user'))
}

// getters
const getters = {
    user: state => {
        return state.user
    },
    access: state => {
        return state.access_token
    }
}

// actions
const actions = {
    async logIn(context, user) {
        await new Promise(resolve => {
            Vue.axios.post('auth/login', user)
                .then(response => {
                    setTimeout(() => {
                        context.commit('loginUserSuccess', response.data)
                        context.commit('assignTokenAxios')
                        resolve(true)
                    }, 500)
                })
                .catch(e => {
                    Vue.swal({
                        icon: 'error',
                        title: 'Error de autenticación.',
                        text: (e && e.response && e.response.data ? e.response.data.message : '')
                    })
                    resolve(false)
                })
        })
    }
}

// mutations
const mutations = {
    loginUserSuccess(state, data) {
        state.user = data.user
        state.access_token = data.access_token
        localStorage.setItem('user', JSON.stringify(state.user))
        localStorage.setItem('access_token', JSON.stringify(state.access_token))
        router.push({name: 'Home', params: {userId: state.user.id}})
    },
    assignTokenAxios() {
        this.axios.defaults.headers.common['Authorization'] = `Bearer ${state.access_token}`
    },
    logoutUser (state) {
        setTimeout(() => {
            router.push({name: 'Login'})
            localStorage.removeItem('user')
            localStorage.removeItem('access_token')
            state.user = null
            state.access_token = null
        }, 500)
    }
}


export default {
    state,
    getters,
    actions,
    mutations
}