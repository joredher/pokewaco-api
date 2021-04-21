<template>
  <transition
      enter-active-class="ease-out duration-300"
      enter-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="ease-in duration-200"
      leave-class="opacity-100"
      leave-to-class="opacity-0"
  >
    <div class="fixed z-10 inset-0 overflow-y-auto"
         aria-labelledby="modal-title"
         role="dialog" aria-modal="true"
         v-show="isOpenDialog"
    >
      <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

        <!-- This element is to trick the browser into centering the modal contents. -->
        <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

        <transition
            enter-active-class="ease-out duration-300"
            enter-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enter-to-class="opacity-100 translate-y-0 sm:scale-100"
            leave-active-class="ease-in duration-200"
            leave-class="opacity-100 translate-y-0 sm:scale-100"
            leave-to-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        >
          <div v-show="isOpenDialog" class="modal-width inline-block align-bottom bg-white rounded-lg text-left
          overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
            <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div class="sm:flex sm:items-start">
                <div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                  <!-- Heroicon name: outline/exclamation -->
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-red-500"
                       fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div class="text-center sm:mt-0 sm:ml-4 sm:text-left sm:mt-2">
                  <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-title" v-text="titleUser"></h3>
                </div>
              </div>
            </div>
            <div class="container mx-auto p-6 pt-0">
              <form class="space-y-6" v-if="waco && waco.id" action="#" @submit.prevent="updateUser">
                <div class="md:grid md:grid-cols-2 md:gap-2">
                  <div class="col-span-6">
                    <label for="name" class="block text-sm font-medium text-gray-700">Nombre</label>
                    <input type="text" name="name" id="name"
                           required
                           v-model="waco.name"
                           autocomplete="given-name"
                           :class="styleClass"/>
                  </div>
                  <div class="col-span-6">
                    <label for="email_address" class="block text-sm font-medium text-gray-700">Correo Electrónico</label>
                    <input type="text" name="email_address" id="email_address" autocomplete="email"
                           required
                           disabled
                           v-model="waco.email"
                           :class="styleClass"/>
                  </div>

                  <div class="col-span-6">
                    <label for="birthdate" class="block text-sm font-medium text-gray-700">Fecha Nacimiento</label>
                    <input type="text" :class="styleClass" id="birthdate" name="birthdate" v-model="waco.birthdate"/>
                  </div>

                  <div class="col-span-6">
                    <label for="password" v-text="'Contraseña'"/>
                    <input id="password" name="password" v-model="waco.password"
                           type="password" autocomplete="current-password"
                           :class="styleClass"
                           placeholder="Contraseña"/>
                  </div>

                  <div class="col-span-6">
                    <label for="street_address" class="block text-sm font-medium text-gray-700">Dirección</label>
                    <input type="text" name="street_address" id="street_address" autocomplete="street-address"
                           v-model="waco.address"
                           :class="styleClass"/>
                  </div>

                  <div class="col-span-6">
                    <label for="city" class="block text-sm font-medium text-gray-700">Ciudad</label>
                    <input type="text"
                           v-model="waco.city" name="city" id="city"
                           :class="styleClass"/>
                  </div>
                </div>
                <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button type="submit"
                          class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4
                      py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2
                      focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm" v-text="'Actualizar'"/>
                  <button type="button"
                          class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4
                      py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2
                      focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                          @click="isOpenDialog = !isOpenDialog"
                          v-text="'Cancel'">
                  </button>
                </div>
              </form>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </transition>
</template>

<script>
import Vue from 'vue'
import {mapGetters} from 'vuex'
export default {
  name: 'EditProfile',
  components: {
    VueTailwindPicker: () => import('vue-tailwind-picker')
  },
  props: ['user'],
  data: () => ({
    isOpenDialog: false,
    pokemon: null,
    waco: null,
    birthdateTemp: '',
    styleClass: "appearance-none rounded-none relative block w-full px-3 py-2 border\n" +
        "border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none\n" +
        "focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm"
  }),
  computed: {
    ...mapGetters(['access']),
    titleUser () {
      return 'Edición de Usuario'
    }
  },
  watch: {
    'isOpenDialog': {
      handler(val) {
        if (!val) {
          let data = this.waco ?  this.waco : null
          this.waco = null
          this.$emit('stopModal', data)
        }
      },
      immediate: false
    },
    'birthdateTemp': {
      handler (val) {
        this.waco.birthdate = val
      },
      immediate: false
    }
  },
  created() {
    this.formReset()
  },
  methods: {
    open () {
      this.isOpenDialog = true
      this.getUser(this.user)
    },
    getUser(user) {
      this.axios.get(`show/${user}`, {
        headers: {authorization: `bearer ${this.access}`},
      }).then(response => {
        this.waco = JSON.parse(JSON.stringify(response.data.data))
      }).catch(e => {
        Vue.swal({
          icon: 'error',
          title: 'Error al intentar traer el registro',
          text: (e && e.response && e.response.data ? e.response.data.message : '')
        })
      })
    },
    updateUser() {
      this.axios.put(`user/${this.user}`,this.waco,
          {
            headers: {authorization: `bearer ${this.access}`}
          })
          .then(response => {
            Vue.swal({
              icon: 'success',
              title: 'Actualización.',
              text: (response.data !== '' ? response.data.message : '')
            })
            this.isOpenDialog = false
          }).catch(e => {
            Vue.swal({
              icon: 'error',
              title: 'Error al actualizar la información.',
              text: (e && e.response && e.response.data ? e.response.data.message : '')
            })
      })
    },
    formReset() {
      this.waco = {
        id: null,
        name: null,
        email: null,
        password: null,
        address: null,
        city: null,
        email_verified_at: null,
        birthdate: null
      }
      this.isOpenDialog = false
      this.birthdateTemp = ''
    }
  }
}
</script>

<style scoped>
.modal-width {
  width: 700px;
  max-width: none;
}
</style>