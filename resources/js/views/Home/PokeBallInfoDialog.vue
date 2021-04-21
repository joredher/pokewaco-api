<template>
  <modal-tailwind
      v-model="isOpen"
      :class-modal="{
        'modal-width': true
      }"
      active-close
      @closeModal="() => {
        this.isOpen = false
        this.pokemon = null
      }"
      :title="`INFORMACIÓN DEL POKEMÓN`"
      icon='<svg xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round"
              stroke-linejoin="round" stroke-width="2"
              d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2
              0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2
              0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>'
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
                  <div v-for="(item, index) in pokemon" class="col-span-6" :key="index" v-if="index !== 'id'">
                    <label :for="index" class="block text-sm font-medium text-gray-700"
                           v-text="title(index)"></label>
                    <!--                           v-text="index.charAt(0).toUpperCase() + index.slice(1)"></label>-->
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
import translate from '../../translate/lang_es'

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
    async getPokemon(url) {
      await this.axios.get(url)
          .then(response => {
            if (response.data) {
              // console.log('B', response)
              this.pokemon = response.data
              // console.log('A', this.pokemon)
            }
          }).catch(e => {
            Vue.swal({
              icon: 'error',
              title: 'Error al intentar traer el registro',
              text: (e && e.response && e.response.data ? e.response.data.message : '')
            })
          })
    },
    title(index) {
      const objectTranslate = Object.entries(translate).filter(x => x[0] === index)
      if (objectTranslate.filter(x => x[0] === index).length === 1) {
        return translate[index]
      }
      return  index
      // if (translate[index]) {
      //   return translate[index]
      // }
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