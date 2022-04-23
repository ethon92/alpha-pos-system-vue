<template>
  <div class="card mb-3">
    <div class="card-body pt-3 pr-3">
      <div class="text-end">
        <span class="delete-drink">×</span>
      </div>
      <h6 class="card-title mb-1">Black Tea</h6>
      <div class="card-text">Less Ice</div>
      <div class="card-text">Half Sugar</div>
    </div>
      
    <div class="card-footer text-end">
      <div class="card-text text-muted py-2">
        $ <span>30</span>
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