<template>
  <div class="flex flex-col">
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
            <tr>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Nombre Pokemon
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Más Info
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Favorito
              </th>
            </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
            <tr v-for="(poke, index) in pokeMons" :key="index">
              <td class="px-6 py-4 whitespace-nowrap">
                {{ poke.name }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <button @click.prevent="getPokeMonInfo(poke.url)"
                        :class="buttonClass">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                       stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </button>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div @click="markFavorite(poke)">
                  <div class="w-16 h-10 flex items-center bg-gray-300 rounded-full p-1 duration-300 ease-in-out"
                       :class="{ 'bg-green-400': poke.toggleActive}">
                    <div class="bg-white w-8 h-8 rounded-full shadow-md transform duration-300 ease-in-out"
                         :class="{ 'translate-x-6': poke.toggleActive,}"></div>
                  </div>
                </div>
                <!--                  <span-->
                <!--                      class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">-->
                <!--                    Active-->
                <!--                  </span>-->
              </td>
            </tr>
            </tbody>
          </table>
          <div class="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
            <div class="flex-1 flex justify-between sm:hidden">
              <a href="#"
                 class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:text-gray-500">
                Previous
              </a>
              <a href="#"
                 class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:text-gray-500">
                Next
              </a>
            </div>
            <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
              <div>
                <p class="text-sm text-gray-700">
                  Muestra de
                  {{ ' ' }}
                  <span class="font-medium">1</span>
                  {{ ' ' }}
                  a
                  {{ ' ' }}
                  <span class="font-medium">15</span>
                  {{ ' ' }}
                  de
                  {{ ' ' }}
                  <span class="font-medium">{{ totalItems }}</span>
                  {{ ' ' }}
                  resultados,
                  {{ ' ' }}
                  <span class="font-medium" v-text="`página: ${page}`"></span>
                </p>
              </div>
              <div>
                <nav class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                  <a v-on:click="changePage(page - 1)" class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-red-300
                  bg-white text-sm font-medium text-gray-500 hover:bg-red-50">
                    <span class="sr-only">Previous</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
                    </svg>
                  </a>
                  <a v-on:click="changePage(page)"
                     class="relative inline-flex items-center px-4 py-2
                     border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                    {{ page }}
                  </a>
                  <a v-on:click="changePage(page + 1)" class="relative inline-flex items-center px-2 py-2 rounded-r-md
                  border border-red-300 bg-white text-sm font-medium text-gray-500 hover:bg-red-50">
                    <span class="sr-only">Next</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                    </svg>
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <poke-ball-info-dialog ref="pokeBallInfo"></poke-ball-info-dialog>
  </div>
</template>

<script>
import Vue from 'vue'
import {mapGetters} from 'vuex'
import PokeBallInfoDialog from './PokeBallInfoDialog'

export default {
  name: 'Home',
  components: {PokeBallInfoDialog},
  data: () => ({
    pokeMons: [],
    totalItems: null,
    page: 1,
    pages: 15,
    buttonClass: "inline-flex justify-center py-1 px-2 border border-transparent\n" +
        "                          shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700\n" +
        "                          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500",
    favorites: []
  }),
  computed: {
    ...mapGetters([
      'access',
      'user'
    ])
  },
  beforeMount() {
    this.getFavorites()
  },
  mounted () {
    this.getPokeMons()
  },
  methods: {
    async changePage(page) {
      this.page = (page <= 0 || page > this.pages) ? this.page : page
      // console.log('AS', page)
      // this.getFavorites()
      await this.getPokeMons()
    },
    async getPokeMons() {
      const params = {
        offset: this.page,
        limit: this.pages
      }
      this.getFavorites()
      // console.log('PRUEBA DE INGRESO', this.access, params)
      await this.axios.get('pokeBalls',
          {
            headers: {authorization: `bearer ${this.access}`},
            params: params
          })
          .then(response => {
            if (response.data != null) {
              let data = JSON.parse(JSON.stringify(response.data.data && response.data.data.results.length ? response.data.data.results : null))
              data.map(x => {
                let exists = this.favorites.find((z) => (z.ref_api === x.url))
                let boolTo = false
                if (exists) {
                  // console.log('SI SON', exists.ref_api, x.url)
                  x.toggleActive = !boolTo
                } else {
                  x.toggleActive = boolTo
                  // console.log('NO SON', x.url)
                }
              })
              this.pokeMons = data
              this.totalItems = (response.data.data ? response.data.data.count : null)
            }
          }).catch(e => {
            Vue.swal({
              icon: 'error',
              title: 'Error al traer los registros.',
              text: (e && e.response && e.response.data ? e.response.data.message : '')
            })
          })
    },
    markFavorite(poke) {
      poke.toggleActive = !poke.toggleActive
      this.axios.patch(`favoritePokemon/user/${this.user ? this.user.id : null}`, {
        name: poke.name,
        ref_api: poke.url
      }, {headers: {authorization: `bearer ${this.access}`}}).then(response => {
        Vue.swal({
          icon: 'success',
          title: response.data.message
        })
        this.getPokeMons()
      }).catch(e => {
        Vue.swal({
          icon: 'error',
          title: 'Error al marcarcar como favorito.',
          text: (e && e.response && e.response.data ? e.response.data.message : '')
        })
      })

    },
    getFavorites() {
      this.axios.get(`user_favorites/${this.user ? this.user.id : null}`, {
        headers: {authorization: `bearer ${this.access}`},
      }).then(response => {
        if (response.data && response.data.data) {
          this.favorites = response.data.data
        }
      }).catch(e => {
        Vue.swal({
          icon: 'error',
          title: 'Se presento un error al traer los favoritos del usuario.',
          text: (e && e.response && e.response.data ? e.response.data.message : '')
        })
      })
    },
    getPokeMonInfo(url) {
      console.log('URL', url)
      this.$refs.pokeBallInfo.open(url)
    }
  }
}
</script>

<style scoped>

</style>