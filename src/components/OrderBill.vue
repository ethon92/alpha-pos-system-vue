<script setup>
  const props = defineProps({
    orderBills: Array
  })


  const emits = defineEmits(['passDeleteBill'])
  
  function deleteBill(e) {
    emits('passDeleteBill', e)
  }

</script>


<template>
  <div class="card mb-3" v-for="bill in orderBills" :key="bill.id">
    <div class="card-body pt-3 pr-3">
      <div class="text-end" @click="deleteBill">
        <span class="delete-drink" :id="bill.id">×</span>
      </div>
      <h6 class="card-title mb-1">{{ bill.name }}</h6>
      <div class="card-text">{{ bill.ice }}</div>
      <div class="card-text">{{ bill.sugar }}</div>
    </div>
      
    <div class="card-footer text-end">
      <div class="card-text text-muted py-2">
        $ <span>{{ bill.price }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .delete-drink {
    display: inline-block;
    text-align: center;
    color: #999;
    cursor: pointer;
    width: 20px;
    height: 20px;
    font-size: 20px;
    line-height: 1;
  }

  .delete-drink:hover {
    color: #333;
  }
</style>