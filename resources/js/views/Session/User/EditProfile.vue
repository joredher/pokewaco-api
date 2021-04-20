<template>
  <modal-tailwind
      :open-modal="isOpen"
      @close.stop="closeModal"
  >
    <template slot="container">
      <form class="mt-8 space-y-6" v-if="waco && waco.id" action="#" method="PUT">
        <div class="mt-10 sm:mt-0">
          <div class="md:grid md:gap-2">
            <div class="col-span-12">
              <label for="name" class="block text-sm font-medium text-gray-700">Nombre</label>
              <input type="text" name="name" id="name"
                     required
                     v-model="waco.name"
                     autocomplete="given-name"
                     :class="styleClass"/>
            </div>

<!--            <div class="col-span-6">-->
<!--              <label for="email_address" class="block text-sm font-medium text-gray-700">Correo-->
<!--                Electrónico</label>-->
<!--              <input type="text" name="email_address" id="email_address" autocomplete="email"-->
<!--                     required-->
<!--                     v-model="waco.email"-->
<!--                     :class="styleClass"/>-->
<!--            </div>-->

<!--            <div class="col-span-6">-->
<!--              <label for="password" v-text="'Contraseña'"/>-->
<!--              <input id="password" name="password" v-model="waco.password"-->
<!--                     type="password" autocomplete="current-password"-->
<!--                     required-->
<!--                     :class="styleClass"-->
<!--                     placeholder="Contraseña"/>-->
<!--            </div>-->

<!--            <div class="col-span-6">-->
<!--              <label for="street_address" class="block text-sm font-medium text-gray-700">Dirección</label>-->
<!--              <input type="text" name="street_address" id="street_address" autocomplete="street-address"-->
<!--                     v-model="waco.address"-->
<!--                     :class="styleClass"/>-->
<!--            </div>-->

<!--            <div class="col-span-6">-->
<!--              <label for="city" class="block text-sm font-medium text-gray-700">Ciudad</label>-->
<!--              <input type="text"-->
<!--                     v-model="waco.city" name="city" id="city"-->
<!--                     :class="styleClass"/>-->
<!--            </div>-->
          </div>
        </div>
      </form>
    </template>
  </modal-tailwind>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: 'EditProfile',
  components: {
    ModalTailwind: () => import('../../../components/ModalTailwind')
  },
  props: ['user'],
  data: () => ({
    isOpen: false,
    pokemon: null,
    waco: null,
    styleClass: "appearance-none rounded-none relative block w-full px-3 py-2 border\n" +
        "border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none\n" +
        "focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm"
  }),
  computed: {
    ...mapGetters([
      'access'
    ])
  },
  mounted () {
    this.formReset()
  },
  methods: {
    open() {
      this.getUser(this.user)
      this.isOpen = true
      console.log('segundo', this.waco)
    },
    async getUser(user) {
      await new Promise(resolve => {
        this.axios.get(`show/${user}`, {
          headers: {authorization: `bearer ${this.access}`},
        }).then(response => {
          console.log('respo', response)
          this.waco = JSON.parse(JSON.stringify(response.data.data))
          resolve(true)
        }).catch(e => {
          this.swal({
            icon: 'error',
            title: 'Error al intentar traer el registro',
            text: (e && e.response && e.response.data ? e.response.data.message : '')
          })
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
        birthdate: null
      }
    },
    closeModal () {
      this.isOpen = false
      this.waco = null
    }
  }
}
</script>

<style scoped>
.modal {
  transition: opacity 0.25s ease;
}

div.modal-active {
  overflow: hidden;
  overflow-y: auto !important;
}

.opacity-95 {
  opacity: .95
}
</style>