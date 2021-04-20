<template>
  <div class="modal opacity-0 pointer-events-none fixed w-full h-full top-0 left-0 flex items-center justify-center">
    <div class="modal-overlay absolute w-full h-full bg-white opacity-95"></div>
    <div class="modal-container fixed w-full h-full z-50 overflow-y-auto ">

      <a @click.stop="closeModal"
         class="modal-close absolute top-0 right-0 cursor-pointer flex flex-col items-center mt-4 mr-4 text-black text-sm z-50">
        <svg class="fill-current text-black" xmlns="http://www.w3.org/2000/svg" width="18" height="18"
             viewBox="0 0 18 18">
          <path
              d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
        </svg>
      </a>

      <!-- Add margin if you want to see grey behind the modal-->
      <div class="modal-content container mx-auto h-auto text-left p-4">
        <slot name="container"></slot>
        <!--Footer-->
        <div class="flex justify-end pt-2">
          <button class="modal-close px-4 bg-red-500 p-3 rounded-lg text-white hover:bg-red-400" @click.stop="closeModal">
            Cerrar
          </button>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModalTailwind',
  props: {
    color: {
      type: String,
      default: 'red'
    },
    value: {
      type: Object,
      default: null
    },
    openModal: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    text: ''
  }),
  watch: {
    'openModal': {
      handler (val) {
        if (val) {
          this.toggleModal()
        }
      },
      immediate: true
    },
    'value': {
      handler (val) {
        console.log('HIZO', val)
      },
      immediate: true
    }
  },
  methods: {
    closeModal() {
      this.openModal = false
      this.$emit('close',false)
      this.toggleModal()
    },
    toggleModal() {
      const body = document.querySelector('body')
      const modal = document.querySelector('.modal')
      modal.classList.toggle('opacity-0')
      modal.classList.toggle('pointer-events-none')
      body.classList.toggle('modal-active')
    }
  },
  mounted() {
    console.log('Component mounted.')
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
