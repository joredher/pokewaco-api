<template>
  <modal-tailwind
      :open-modal="isOpen"
      @close="() => {
          this.isOpen = false
          this.pokemon = null
        }"
  >
    <template slot="container">
      <div class="mt-10 sm:mt-0">
        <div class="md:grid md:gap-2">
          <div class="md:col-span-12">
            <div class="px-4 sm:px-0 content-center text-center" v-if="pokemon">
              <img v-if="pokemon"
                   class="rounded-full border mx-auto mb-2 xs:w-16 xs:h-16 sm:w-16 sm:h-16 md:w-24 md:h-24"
                   :src="`${imgURL}/${pokemon.id}.png`"
                   :alt="pokemon.name"
              />
              <h3 class="text-lg font-medium leading-6 mt-6 pl-4 text-gray-900"
                  v-html="`Pokémon: <b>${pokemon.name}</b>`"></h3>
            </div>
          </div>
          <div class="mt-5 md:mt-0 md:col-span-12">
            <div class="shadow overflow-hidden sm:rounded-md">
              <div class="px-4 py-5 bg-white sm:p-6">
                <div class="grid grid-cols-6 gap-6">
                  <div v-for="(item, index) in pokemon" class="col-span-6" :key="index">
                    <label :for="index" class="block text-sm font-medium text-gray-700"
                           v-text="index.charAt(0).toUpperCase() + index.slice(1)"></label>
                    <!--            <input :name="index" :id="index"-->
                    <!--                   readonly-->
                    <!--                   v-model="item"-->
                    <!--                   :class="styleClass"/>-->
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </template>
  </modal-tailwind>
</template>

<script>
import Vue from "vue"

export default {
  name: 'PokeBallInfoDialog',
  components: {
    ModalTailwind: () => import('../../components/ModalTailwind')
  },
  data: () => ({
    isOpen: false,
    pokemon: null,
    styleClass: "appearance-none rounded-none relative block w-full px-3 py-2 border\n" +
        "border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none\n" +
        "focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm",
    imgURL: "https://pokeres.bastionbot.org/images/pokemon/"
  }),
  methods: {
    open(url) {
      this.isOpen = true
      this.getPokemon(url)
    },
    getPokemon(url) {
      this.axios.get(url)
          .then(response => {
            if (response.data) {
              console.log('B', response)
              this.pokemon = response.data
              console.log('A', this.pokemon)
            }
          }).catch(e => {
        Vue.swal({
          icon: 'error',
          title: 'Error al intentar traer el registro',
          text: (e && e.response && e.response.data ? e.response.data.message : '')
        })
      })
    }
  }
}
</script>

<style scoped>
</style>