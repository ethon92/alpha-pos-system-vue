<script setup>
  import OrderBill from './components/OrderBill.vue';
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
      <div class="col-md-8">yaa</div>
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
</style>
