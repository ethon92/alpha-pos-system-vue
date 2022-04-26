<script setup>
  const props = defineProps({
    choice: {
      type: Object,
      required: true
    }
  })
  
  const emits = defineEmits(['afterChecked'])

  function checkInput(e) {
    emits('afterChecked', e)
  }
</script>

<template>
  <label class="d-block text-light mb-2">{{ choice.name }}</label>
  <div class="btn-group btn-group-toggle" data-toggle="buttons">
    <label class="btn" 
      :class="[choice.labelOutline, { active: item.isChecked }]"
      v-for="item in choice.choice" 
      :key="item.id"
    >
      <input 
        type="radio" 
        :name="choice.name" 
        :value="item.value"
        :checked="item.isChecked" 
        @change="checkInput" 
      /> 
      {{ item.choiceName }}
    </label>
  </div>
</template>

<style scoped>
  input[type="radio"] {
    -webkit-appearance: none;
  }
</style>