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
         v-show="value"
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
          <div v-show="value" :class="classModal" class="inline-block align-bottom bg-white rounded-lg text-left
          overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
            <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div class="sm:flex sm:items-start">
                <div v-if="icon"
                     class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                  <!-- Heroicon name: outline/exclamation -->
                  <template>
                    <div v-html="icon" class="inline-block align-middle"></div>
                  </template>
                </div>
                <div v-if="activeClose" @click.prevent="$emit('closeModal')"
                     class="mx-auto position-active-close cursor-pointer flex-shrink-0 flex items-center justify-center
                     h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10
                     font-bold"
                     v-text="'x'"
                />
                <div class="text-center sm:mt-0 sm:ml-4 sm:text-left sm:mt-2">
                  <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-title" v-text="title"></h3>
                </div>
              </div>
            </div>
            <div class="container mx-auto p-6 pt-0">
              <slot name="container"></slot>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </transition>

</template>

<script>

export default {
  name: 'ModalTailwind',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    classModal: {
      type: Object|String,
      default: null|''
    },
    title: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: null
    },
    activeClose: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      text: ''
    }
  },
}
</script>

<style scoped>
  .position-active-close {
    position: absolute;
    right: 20px;
  }
</style>
