<template>
  <div class="benman-list-item">
    <div class="benman-list-item-info">
      <span class="benman-list-item-info-title">{{item.name}}</span>
      <span class="benman-list-item-info-units">{{item.units.length}} Units</span>
    </div>
    <span class="flex-1"/>
    <i class="fa fa-chevron-right" aria-hidden="true"></i>
  </div>
</template>

<script>
  export default {
    name: 'benman-item',
    props: ['item']
  }
</script>

<style>
  .benman-list-item {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px;
    cursor: pointer;
  }
  
  .benman-list-item:hover {
    background: #eee;
  }
  
  .benman-list-item-info {
    display: flex;
    flex-direction: column;
  }
  
  .benman-list-item-info-title {
    font-weight: bold;
  }
  
  .benman-list-item-info-units {
    font-size: 0.8em;
  }
</style>