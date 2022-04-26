<script setup>
  const props = defineProps({
    total: {
      type: Number,
      required: true
    }
  })

  const emits = defineEmits(['passSubmitModal'])

  function submitModal(e) {
    emits('passSubmitModal', e)
  }
</script>

<template>
  <div class="checkout-modal">
    <div class="modal-dialog">
      <div class="modal-content">
        <h5 class="modal-body">
          Total amount of drinks： $ <span>{{ total }}</span>
        </h5>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" @click="submitModal">Submit</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .checkout-modal {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 999;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
  }

  .modal-footer {
    border-top: none;
  }
</style>