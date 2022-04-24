<script setup>
  const props = defineProps({
    choice: {
      type: Object,
      required: true
    }
  })
  
  const emit = defineEmits(['afterChecked'])

  function checkInput(e) {
    emit('afterChecked', e)
  }
</script>

<template>
  <label class="d-block text-light mb-2">{{ choice.name }}</label>
  <div class="btn-group btn-group-toggle" data-toggle="buttons">
    <label class="btn" 
      :class="[choice.labelOutline, { active: item.isChecked }]"
      v-for="item in choice.choice" 
      :key="item.choiceName"
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