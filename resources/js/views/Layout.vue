<template>
  <div>
    <nav class="bg-gray-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center">
            <a href="https://www.freeiconspng.com/img/45354"
               title="Image from freeiconspng.com">
              <img class="w-16" src="https://www.freeiconspng.com/uploads/3d-pokeball-pok-mon-go-png-24.png"
                   width="350" alt="3D Pokeball Pokémon Go Png"/>
            </a>
          </div>
          <div class="hidden md:block">
            <div class="ml-10 flex items-baseline space-x-4">
              <div v-for="(item, itemIdx) in navigations" :key="itemIdx">
                <template v-if="(itemIdx === 0)">
                  <a :to="{ name: item.routeName }"
                     class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">{{ item.text }}</a>
                </template>
                <!--                <a v-else-->
                <!--                   :to="{ name: item.routeName }"-->
                <!--                   class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">{{ item.text }}</a>-->
              </div>
            </div>
          </div>
          <div class="hidden md:block">
            <div class="ml-4 flex items-center md:ml-6">
              <button class="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none
                            focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                <span class="sr-only" v-text="'Favoritos'"></span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                     stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="2"
                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969
                        0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538
                        1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1
                        1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>
                </svg>
              </button>

              <div class="ml-3 relative">
                <div>
                  <button class="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none
                  focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                    <span class="sr-only">Abrir el menu de usuario</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                    </svg>
                  </button>
                </div>
                <transition enter-active-class="transition ease-out duration-100"
                            enter-from-class="transform opacity-0 scale-95"
                            enter-to-class="transform opacity-100 scale-100"
                            leave-active-class="transition ease-in duration-75"
                            leave-from-class="transform opacity-100 scale-100"
                            leave-to-class="transform opacity-0 scale-95">
                  <select
                      class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <option v-for="(item, indexP) in profile" :key="item" @click="(indexP === 1) ? logoutUser : null">
                      {{ item }}
                    </option>
                  </select>
                </transition>
              </div>
              <!--              <Menu as="div" class="ml-3 relative">-->
              <!--                <div>-->
              <!--&lt;!&ndash;                  <MenuButton class="max-w-xs bg-gray-800 rounded-full&ndash;&gt;-->
              <!--&lt;!&ndash;                  flex items-center text-sm focus:outline-none focus:ring-2&ndash;&gt;-->
              <!--&lt;!&ndash;                  focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">&ndash;&gt;-->
              <!--&lt;!&ndash;                    <span class="sr-only">Abrir menu de usuario</span>&ndash;&gt;-->
              <!--&lt;!&ndash;                    <img class="h-8 w-8 rounded-full"&ndash;&gt;-->
              <!--&lt;!&ndash;                         src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"&ndash;&gt;-->
              <!--&lt;!&ndash;                         alt="" />&ndash;&gt;-->
              <!--&lt;!&ndash;                  </MenuButton>&ndash;&gt;-->
              <!--                </div>-->
              <!--&lt;!&ndash;                <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">&ndash;&gt;-->
              <!--&lt;!&ndash;                  <MenuItems class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">&ndash;&gt;-->
              <!--&lt;!&ndash;                    <MenuItem v-for="item in profile" :key="item" v-slot="{ active }">&ndash;&gt;-->
              <!--&lt;!&ndash;                      <a href="#" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">{{ item }}</a>&ndash;&gt;-->
              <!--&lt;!&ndash;                    </MenuItem>&ndash;&gt;-->
              <!--&lt;!&ndash;                  </MenuItems>&ndash;&gt;-->
              <!--&lt;!&ndash;                </transition>&ndash;&gt;-->
              <!--              </Menu>-->

            </div>
          </div>
        </div>
      </div>
    </nav>
    <header class="bg-white shadow">
      <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold text-gray-900" v-text="'Inicio'"/>
      </div>
    </header>
    <main>
      <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <!-- Replace with your content -->
        <div class="px-4 py-6 sm:px-0">
          <div class="border-4 border-dashed border-gray-200 rounded-lg h-96">
            <router-view/>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
export default {
  data: () => ({
    navigations: [
      {
        text: 'Inicio',
        routeName: 'Home'
      }
    ],
    profile: ['Perfil', 'Cerrar Sesión']
  }),
  methods: {
    logoutUser () {
      this.$store.dispatch('logoutUser')
    }
  },
  name: 'Layout'
}
</script>

<style scoped>

</style>