<script setup>
  import OrderBill from './components/OrderBill.vue';
  import ProductCard from './components/ProductCard.vue'
  import VolumePills from './components/VolumePills.vue';
  import { reactive } from 'vue'

  const products = [
    'Black Tea', 
    'Oolong Tea', 
    'Baozong Tea', 
    'Green Tea', 
    'Bubble Milk Tea',
    'Black Tea Latte',
    'Lemon Green Tea',
    'Matcha Latte'
  ]

  const volumeChoice = reactive([{
    name: 'Ice',
    labelOutline: 'btn-outline-primary',
    choice:  [{
      value: 'No Ice',
      choiceName: 'No',
      isChecked: false
    },{
      value: 'Less Ice',
      choiceName: 'Less',
      isChecked: false
    },{
      value: 'Regular Ice',
      choiceName: 'Regular',
      isChecked: true
    }]
  },{
    name: 'Sugar',
    labelOutline: 'btn-outline-info',
    choice: [{
      value: 'No Sugar',
      choiceName: 'No',
      isChecked: false
    },{
      value: 'A Little Sugar',
      choiceName: 'A Little',
      isChecked: false
    },{
      value: 'Half Sugar',
      choiceName: 'Half',
      isChecked: false
    },{
      value: 'Less Sugar',
      choiceName: 'Less',
      isChecked: false
    },{
      value: 'Regular Sugar',
      choiceName: 'Regular',
      isChecked: true
    }]
  }])

  function handleChecked(e) {
    const targetValue = e.target.value
    const classList = e.target.parentElement.classList

    if (classList.contains('btn-outline-primary')) {
      volumeChoice[0].choice.filter( item => {
        if (item.value === targetValue) {
          item.isChecked = true
        } else {
          item.isChecked = false
        }
      })
    } else if (classList.contains('btn-outline-info')) {
      volumeChoice[1].choice.filter( item => {
        if (item.value === targetValue) {
          item.isChecked = true
        } else {
          item.isChecked = false
        }
      })
    }
  }
</script>

<template>
  <main class="container">
    <h2 class="text-center text-light pt-4">Alpha Pos System</h2>
    <div class="row">
      <div class="col-md-4 p-4">
        <OrderBill />
        <OrderBill />
        <div class="text-end">
          <button class="btn btn-light" style="min-width: 120px;">Checkout</button>
        </div>
      </div>
      <div class="col-md-8">
        <section class="menu p-4">
          <div class="row row-cols-4">
            <ProductCard :products="products"/>
          </div>
        </section>
        <section class="ice p-2">
          <VolumePills :choice="volumeChoice[0]" @after-checked="handleChecked"/>
        </section>
        <section class="sugar p-2">
          <VolumePills :choice="volumeChoice[1]" @after-checked="handleChecked"/>
        </section>
        <div class="text-end mt-4">
          <div class="btn btn-light" style="min-width:120px;">Add</div>
        </div>
      </div>
    </div>  
  </main>
</template>

<style>
  body {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: url('./assets/alphaPos-bg.jpg') no-repeat center center;
    background-size: cover;
  }

  .container {
    background-color: rgba(0, 0, 0, 0.8);
    border-radius: 3px;
  }

  .container .row {
    max-height: 600px;
  }

  .col-md-4 {
    overflow-y: scroll;
    max-height: 580px;
  }

</style>
