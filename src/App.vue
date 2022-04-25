<script setup>
  import OrderBill from './components/OrderBill.vue';
  import DrinkCard from './components/DrinkCard.vue'
  import VolumePills from './components/VolumePills.vue';
  import { reactive, ref } from 'vue'

  const drinks = [
    { 
      id: 1,
      name: 'Black Tea',
      price: 30
    },
    { 
      id: 2,
      name: 'Oolong Tea',
      price: 30
    },
    { 
      id: 3,
      name: 'Baozong Tea',
      price: 30
    },
    { 
      id: 4,
      name: 'Green Tea',
      price: 30
    },
    { 
      id: 5,
      name: 'Bubble Milk Tea',
      price: 50
    },
    { 
      id: 6,
      name: 'Lemon Green Tea',
      price: 50
    },
    { 
      id: 7,
      name: 'Black Tea Latte',
      price: 55
    },
    { 
      id: 8,
      name: 'Matcha Latte',
      price: 55
    },

  ]

  const volumeChoice = reactive([{
    name: 'Ice',
    labelOutline: 'btn-outline-primary',
    choice:  [{
      id: 1,
      value: 'No Ice',
      choiceName: 'No',
      isChecked: false
    },{
      id: 2,
      value: 'Less Ice',
      choiceName: 'Less',
      isChecked: false
    },{
      id: 3,
      value: 'Regular Ice',
      choiceName: 'Regular',
      isChecked: true
    }]
  },{
    name: 'Sugar',
    labelOutline: 'btn-outline-info',
    choice: [{
      id: 1,
      value: 'No Sugar',
      choiceName: 'No',
      isChecked: false
    },{
      id: 2,
      value: 'A Little Sugar',
      choiceName: 'A Little',
      isChecked: false
    },{
      id: 3,
      value: 'Half Sugar',
      choiceName: 'Half',
      isChecked: false
    },{
      id: 4,
      value: 'Less Sugar',
      choiceName: 'Less',
      isChecked: false
    },{
      id: 5,
      value: 'Regular Sugar',
      choiceName: 'Regular',
      isChecked: true
    }]
  }])

  const selectDrink = ref('')
  const selectDrinkPrice = ref()
  const selectSugar = ref('Regular Sugar')
  const selectIce = ref('Regular Ice')
  const orderBills = ref([])
  let id = 1

  function handleChecked(e) {
    const targetValue = e.target.value
    const classList = e.target.parentElement.classList
    
    // 當選擇的是甜度的欄位時
    if (classList.contains('btn-outline-primary')) {
      selectSugar.value = targetValue
      // 處理label active的狀態
      volumeChoice[0].choice.forEach( item => {
        if (item.value === targetValue) {
          item.isChecked = true
        } else {
          item.isChecked = false
        }
      })
      // 當選擇的是冰塊的欄位時
    } else if (classList.contains('btn-outline-info')) {
      selectIce.value = targetValue
      // 處理label active的狀態
      volumeChoice[1].choice.forEach( item => {
        if (item.value === targetValue) {
          item.isChecked = true
        } else {
          item.isChecked = false
        }
      })
    }
  }

  function handleDrink(e) {
    const drinkName = e.target.value

    selectDrink.value = drinkName

    drinks.forEach( item => {
      if (item.name === drinkName) {
        selectDrinkPrice.value = item.price
      }
    })
  }

  function handleDeleteBill(e) {
    const id = Number(e.target.id)
    orderBills.value = orderBills.value.filter( bill => bill.id !== id )
  }

  function addBill() {
    if (!selectDrink.value) {
      alert('Please choose at least one item.')
      return
    }
    const drink = new Drink(id, selectDrink.value, selectSugar.value, selectIce.value, selectDrinkPrice.value)
    orderBills.value.unshift(drink)
    id++
  }

  function Drink (id, name, sugar, ice, price) {
    this.id = id
    this.name = name
    this.sugar = sugar
    this.ice = ice
    this.price = price
  }
</script>

<template>
  <main class="container">
    <h2 class="text-center text-light pt-4">Alpha Pos System</h2>
    <div class="row">
      <div class="col-md-4 p-4">
        <OrderBill :order-bills="orderBills" @pass-delete-bill="handleDeleteBill"/>
        <div class="text-end">
          <button class="btn btn-light" style="min-width: 120px;">Checkout</button>
        </div>
      </div>
      <div class="col-md-8">
        <section class="menu p-4">
          <div class="row row-cols-4">
            <DrinkCard :drinks="drinks" @pass-drink="handleDrink"/>
          </div>
        </section>
        <section class="ice p-2">
          <VolumePills :choice="volumeChoice[0]" @after-checked="handleChecked"/>
        </section>
        <section class="sugar p-2">
          <VolumePills :choice="volumeChoice[1]" @after-checked="handleChecked"/>
        </section>
        <div class="text-end mt-4 mb-4">
          <div class="btn btn-light" style="min-width:120px;" @click="addBill">Add</div>
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
