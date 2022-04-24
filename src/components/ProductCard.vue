<script setup>
  const props = defineProps({
    products: {
      type: Array,
      required: true
    }
  })
</script>

<template>
  <div class="card text-center" v-for="product in products" :key="product">
    <label class="card-body px-2">
      <h5 class="card-title">{{ product }}</h5>
      <input type="radio" name="drink" :value="product">
    </label>
  </div>
</template>