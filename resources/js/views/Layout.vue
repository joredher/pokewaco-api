<template>
  <div>
    <nav class="bg-gray-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center">
            <a href="https://www.freeiconspng.com/img/45354"
               title="Image from freeiconspng.com">
              <img class="w-20" src="https://www.freeiconspng.com/uploads/3d-pokeball-pok-mon-go-png-24.png"
                   width="350" alt="3D Pokeball Pokémon Go Png"/>
            </a>
          </div>
          <div class="hidden md:block">
            <div class="ml-10 flex items-baseline space-x-4">
              <div v-for="(item, itemIdx) in navigations" :key="itemIdx">
                <a :to="{routeName: item.routeName}"
                   :key="itemIdx"
                   class="bg-gray-900 text-white px-3 py-2
                   cursor-pointer
                   rounded-md text-sm font-medium">
                  <template>
                    <div v-html="item.iconTemplate" class="inline-block align-middle"></div>
                  </template>
                  <span v-text="item.text"></span>
                </a>
              </div>
            </div>
          </div>
          <div class="hidden md:block">
            <div class="ml-4 flex items-center md:ml-6">
              <div class="ml-3 flex relative">
                <div class="md:ml-3">
                  <div class="flex relative">
                    <div class="md:ml-2">
                      <a class="bg-green-500 text-white px-3 py-2 rounded-md text-sm font-medium">
                        {{
                          (user && user.id ? user.name : null)
                        }}
                      </a>
                    </div>
                  </div>
                </div>
                <div class="md:ml-4">
                  <button @click="editUser('open')" class="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none
                              focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                    <span class="sr-only">Abrir edición de usuario</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                  </button>
                </div>
                <div class="md:ml-4">
                  <button @click="logoutUser" class="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none
                  focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                    <span class="sr-only">Cerrar Sesión</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <header class="bg-white shadow">
      <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold text-gray-900" v-text="'API POKÉMON'"/>
      </div>
    </header>
    <main>
      <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <!-- Replace with your content -->
        <div class="px-4 py-6 sm:px-0">
          <div class="border-4 border-dashed border-gray-200 rounded-lg h-auto">
            <router-view/>
          </div>
        </div>
      </div>
    </main>
    <edit-profile ref="refEditProfile" :user="user ? user.id : null" @stopModal="item => editUser(item)"></edit-profile>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import EditProfile from './Session/User/EditProfile'
import Vue from "vue";

export default {
  name: 'Layout',
  components: {
    EditProfile
  },
  data: () => ({
    navigations: [
      {
        text: 'Inicio',
        routeName: 'Home',
        iconTemplate: `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>`
      },
      {
        text: 'Tus Favoritos',
        routeName: '#',
        iconTemplate: `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round"
                            stroke-width="2"
                            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969
                        0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538
                        1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1
                        1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>
                    </svg>`
      }
    ],
    profile: ['Perfil', 'Cerrar Sesión']
  }),
  computed: {
    ...mapGetters(['user'])
  },
  methods: {
    logoutUser() {
      this.$store.commit('logoutUser')
    },
    editUser(item = null) {
      if (item !== null && (typeof item !== 'string')) {
        const result = this.compareObject(item, this.user)
        if ((typeof result !== 'string') && (result === true)) {
          this.$store.commit('updateLocaleUser', item)
        }
      } else {
        this.$refs.refEditProfile.open()
      }
    }
  }
}
</script>

<style scoped>

</style>