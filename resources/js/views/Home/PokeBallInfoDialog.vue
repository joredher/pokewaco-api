<template>
  <div class="modal opacity-0 pointer-events-none fixed w-full h-full top-0 left-0 flex items-center justify-center">
    <div class="modal-overlay absolute w-full h-full bg-white opacity-95"></div>
    <div class="modal-container fixed w-full h-full z-50 overflow-y-auto ">

      <a @click.prevent="closeModal" class="modal-close absolute top-0 right-0 cursor-pointer flex flex-col items-center mt-4 mr-4 text-black text-sm z-50">
        <svg class="fill-current text-black" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
          <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
        </svg>
      </a>

      <!-- Add margin if you want to see grey behind the modal-->
      <div class="modal-content container mx-auto h-auto text-left p-4">
        <div class="mt-10 sm:mt-0">
          <div class="md:grid md:gap-2">
            <div class="md:col-span-12">
              <div class="px-4 sm:px-0 content-center text-center" v-if="pokemon">
                <img v-if="pokemon"
                     class="rounded-full border mx-auto mb-2 xs:w-16 xs:h-16 sm:w-16 sm:h-16 md:w-24 md:h-24"
                     :src="`${imgURL}/${pokemon.id}.png`"
                     :alt="pokemon.name"
                />
                <h3 class="text-lg font-medium leading-6 mt-6 pl-4 text-gray-900" v-html="`Pokémon: <b>${pokemon.name}</b>`"></h3>
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


        <!--Footer-->
        <div class="flex justify-end pt-2">
          <button class="modal-close px-4 bg-red-500 p-3 rounded-lg text-white hover:bg-red-400" @click="closeModal">Cerrar</button>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  import Vue from "vue"

  export default {
    name: 'PokeBallInfoDialog',
    data: () => ({
      isOpen: false,
      pokemon: null,
      styleClass: "appearance-none rounded-none relative block w-full px-3 py-2 border\n" +
          "border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none\n" +
          "focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm",
      imgURL : "https://pokeres.bastionbot.org/images/pokemon/"
    }),
    methods: {
      open (url) {
        this.getPokemon(url)
        this.toggleModal()
      },
      getPokemon(url) {
        this.axios.get(url)
            .then(response => {
              // console.log('response pokeball', response)
              if (response.data) {
                this.pokemon = response.data
              }
            }).catch(e => {
              Vue.swal({
                icon: 'error',
                title: 'Error al intentar traer el registro',
                text: (e && e.response && e.response.data ? e.response.data.message : '')
              })
        })
      },
      toggleModal () {
        const body = document.querySelector('body')
        const modal = document.querySelector('.modal')
        modal.classList.toggle('opacity-0')
        modal.classList.toggle('pointer-events-none')
        body.classList.toggle('modal-active')
      },
      closeModal () {
        this.pokemon = null
        this.toggleModal()
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
  .opacity-95 {opacity: .95}
</style>