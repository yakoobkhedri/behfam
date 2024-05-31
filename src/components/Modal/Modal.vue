<template>
  <transition name="modal-animation">
    <div v-show="modalActive" :class="{'z-999':modalActive}" class="modalBox px-2 bg-modal overflow-y-auto position-fixed h-100vh w-100vw top-0 start-0">
     <transition name="modal-animation-inner">
       <div v-show="modalActive" class="modal-inner max-w-50 mx-auto my-5 bg-secondary rounded-20">
          <div class="py-4 position-relative">
            <div @click="closeModal"
            class="ms-4 position-absolute end-0 top-12 cursor-pointer fs-1-7vw"
          >
          ❌
          </div>

          </div>
          <!-- modal content -->
          <slot />
       </div>
     </transition>
    </div>
  </transition>
</template>

<script>
export default {
    name: "Modal2-component",
    props:['modalActive'],
    setup(props ,{emit}){
      const closeModal = () =>{
        emit('closeModal')
      }
      return{
        closeModal
      }
    }
}
</script>

<style>
  .modal-animation-enter-active,
  .modal-animation-leave-active{
    transition: opacity 0.3s cubic-bezier(0.52,0.02,0.19,1.02);
  }
  .modal-animation-enter-from,
  .modal-animation-leave-to{
    opacity: 0;
  }
  .modal-animation-inner-enter-active{
    transition: all 0.3s cubic-bezier(0.52,0.02,0.19,1.02) 0.15s;
  }
  .modal-animation-inner-leave-active{
    transition: all 0.3s cubic-bezier(0.52,0.02,0.19,1.02);
  }
  .modal-animation-inner-enter-from{
    opacity: 0;
    transform: scale(0.8);
  }
  .modal-animation-inner-leave-to{
    transform: scale(0.8);
  }
</style>