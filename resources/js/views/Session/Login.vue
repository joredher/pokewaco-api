<template>
  <div id="app">
    <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-md w-full space-y-8">
        <div>
          <a href="https://www.freeiconspng.com/img/45354"
             title="Image from freeiconspng.com">
            <img src="https://www.freeiconspng.com/uploads/3d-pokeball-pok-mon-go-png-24.png"
                 width="350" alt="3D Pokeball Pokémon Go Png" />
          </a>
          <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900"
              v-text="'Iniciar sesión en su cuenta'"
          />
        </div>
        <form class="mt-8 space-y-6" action="#" method="POST" @submit.prevent="logIn">
          <input type="hidden" name="remember" value="true"/>
          <div class="rounded-md shadow-sm -space-y-px">
            <div>
              <label for="email-address" class="sr-only" v-text="'Correo Electrónico'"/>
              <input id="email-address" name="email" v-model="email" type="email" autocomplete="email"
                     class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm"
                     placeholder="Correo Electrónico"/>
            </div>
            <div>
              <label for="password" class="sr-only" v-text="'Contraseña'" />
              <input id="password" name="password" v-model="password" type="password" autocomplete="current-password"
                     class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm"
                     placeholder="Contraseña"/>
            </div>
          </div>

          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <input id="remember_me" name="remember_me" type="checkbox"
                     class="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"/>
              <label for="remember_me" class="ml-2 block text-sm text-gray-900" v-text="'Recordarme'"/>
            </div>

            <div class="text-sm">
              <a @click="$router.push({name: 'Register'})" class="font-medium text-red-600 hover:text-red-500" v-text="'Registrase'"/>
            </div>
          </div>

          <div>
            <button type="submit"
                    class="group relative w-full flex justify-center py-2 px-4
                    border border-transparent text-sm font-medium rounded-md
                    text-white bg-red-600 hover:bg-red-700 focus:outline-none
                    focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
            </span>
              Ingresar
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Login',
    data: () => ({
      email: null,
      password: null
    }),
    methods: {
      logIn () {
        if (this.email && this.password) {
          this.$store.dispatch('logIn',{email: this.email, password: this.password})
        } else {
          this.swal({
            icon: 'error',
            title: 'DATOS INCORRECTOS',
            text: `El campo ${(!this.email ? 'email' : (!this.password ? 'contraseña' : ''))} se encuentra vacío.`
          })
        }
      }
    }
  }
</script>

<style scoped>

</style>