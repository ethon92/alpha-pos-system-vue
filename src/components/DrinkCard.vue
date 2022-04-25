<script setup>
  const props = defineProps({
    drinks: {
      type: Array,
      required: true
    }
  })

  const emit = defineEmits(['passDrink'])

  function selectDrink(e) {
    emit('passDrink', e)
  }
</script>

<template>
  <div class="card text-center" 
    v-for="drink in drinks" 
    :key="drink.id"
  >
    <label class="card-body px-2">
      <h5 class="card-title">{{ drink.name }}</h5>
      <input type="radio" name="drink" :value="drink.name" @click="selectDrink">
    </label>
  </div>
</template>

<style scoped>
  .card,
  .card-body {
    cursor: pointer;
  }
</style>