<template>
  <div id="app">
    <div class="container mx-auto mt-6">
      <div class="bg-gray-800 border-1 border-r-4">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex items-center justify-between h-16">
            <div class="flex items-center">
              <a href="https://www.freeiconspng.com/img/45354"
                 title="Image from freeiconspng.com">
                <img class="w-20" src="https://www.freeiconspng.com/uploads/3d-pokeball-pok-mon-go-png-24.png"
                     width="350" alt="3D Pokeball Pokémon Go Png"/>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-10 sm:mt-0">
        <div class="md:grid md:grid-cols-3 md:gap-6">
          <div class="md:col-span-1">
            <div class="px-4 sm:px-0">
              <h3 class="text-lg font-medium leading-6 mt-6 pl-4 text-gray-900">Registrar Información</h3>
              <p class="mt-1 pl-4 text-sm text-gray-600">
                Utilice una dirección permanente donde pueda recibir correo.
              </p>
            </div>
          </div>
          <div class="mt-5 md:mt-0 md:col-span-2">
            <form class="mt-8 space-y-6" action="#" method="POST" @submit.prevent="register">
              <div class="shadow overflow-hidden sm:rounded-md">
                <div class="px-4 py-5 bg-white sm:p-6">
                  <div class="grid grid-cols-6 gap-6">
                    <div class="col-span-12">
                      <label for="name" class="block text-sm font-medium text-gray-700">Nombre</label>
                      <input type="text" name="name" id="name"
                             required
                             v-model="waco.name"
                             autocomplete="given-name"
                             :class="styleClass"/>
                    </div>

                    <div class="col-span-6">
                      <label for="email_address" class="block text-sm font-medium text-gray-700">Correo
                        Electrónico</label>
                      <input type="text" name="email_address" id="email_address" autocomplete="email"
                             required
                             v-model="waco.email"
                             :class="styleClass"/>
                    </div>

                    <div class="col-span-6">
                      <label for="password" v-text="'Contraseña'"/>
                      <input id="password" name="password" v-model="waco.password"
                             type="password" autocomplete="current-password"
                             required
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
                </div>
                <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button type="submit"
                          :class="buttonClass" v-text="'Enviar'">
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div class="hidden sm:block" aria-hidden="true">
        <div class="py-5">
          <div class="border-t border-gray-200"/>
        </div>
      </div>
      <button @click="homeReturn"
              :class="buttonClass" v-text="'Retornar'">
      </button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Register',
    data: () => ({
      styleClass: "appearance-none rounded-none relative block w-full px-3 py-2 border\n" +
          "border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none\n" +
          "focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm",
      buttonClass: "inline-flex justify-center py-2 px-4 border border-transparent\n" +
          "                          shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700\n" +
          "                          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500",
      waco: {
        name: null,
        email: null,
        password: null,
        address: null,
        city: null,
      }
    }),
    methods: {
      homeReturn () {
        this.$router.push({name: 'Login'})
      },
      register() {
        this.axios.post('auth/register', this.waco)
            .then(response => {
              Vue.swal({
                icon: 'success',
                title: response.data.message,
                text: 'Ya es posible iniciar sesión.'
              })
              this.homeReturn()
            }).catch(e => {
              this.swal({
                icon: 'error',
                title: 'Error el registro.',
                text: (e && e.response && e.response.data ? e.response.data.message : '')
              })
        })
      }
    }
  }
</script>

<style scoped>

</style>