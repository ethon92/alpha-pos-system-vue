<script setup>
  import OrderBill from './components/OrderBill.vue';
  import ProductCard from './components/ProductCard.vue'

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
</script>

<template>
  <main class="container">
    <h2 class="text-center text-light pt-4">Alpha Pos System</h2>
    <div class="row">
      <div class="col-md-4 p-4">
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
          <label class="d-block text-light mb-2">Ice</label>
          <div class="btn-group btn-group-toggle" data-toggle="buttons">
            <label class="btn btn-outline-primary">
              <input type="radio" name="ice" value="No Ice" />No
            </label>
            <label class="btn btn-outline-primary">
              <input type="radio" name="ice" value="Less Ice" />Less
            </label>
            <label class="btn btn-outline-primary active">
              <input type="radio" name="ice" value="Regular Ice" checked />Regular
            </label>
          </div>
        </section>
        <section class="sugar p-2">
          <label class="d-block text-light mb-2">Sugar</label>
          <div class="btn-group btn-group-toggle" data-toggle="buttons">
            <label class="btn btn-outline-info">
              <input type="radio" name="sugar" value="No Sugar" />No
            </label>
            <label class="btn btn-outline-info">
              <input type="radio" name="sugar" value="A Little Sugar" />A Little
            </label>
            <label class="btn btn-outline-info">
              <input type="radio" name="sugar" value="Half Sugar" />Half
            </label>
            <label class="btn btn-outline-info">
              <input type="radio" name="sugar" value="Less Sugar" />Less
            </label>
            <label class="btn btn-outline-info active">
              <input type="radio" name="sugar" value="Regular Sugar" checked="checked" />Regular
            </label>
          </div>
        </section>
        <div class="text-end mt-4">
          <div class="btn btn-light" style="min-width:120px;">Add</div>
        </div>
      </div>
    </div>  
  </main>
</template>

<style>
  .container{
    background-color: rgba(0, 0, 0, 0.8);
    border-radius: 3px;
  }

  .col-md-4, .col-md-8 {
    outline: 1px solid steelblue;
    min-height: 600px;
  }

  .ice input[type="radio"],
  .sugar input[type="radio"] {
    -webkit-appearance: none;
  }
</style>
