<template>
  <div class="postman">
    <div v-on:click="isOpen=!isOpen" class="postman-item">
      <i class="fa fa-folder" aria-hidden="true"></i>
      <div class="postman-item-summary flex-1">
        <span class="postman-item-summary-name">{{item.info.name}}</span>
        <span class="postman-item-summary-requests">{{item.item.length}} requests</span>
      </div>
      <div class="postman-item-tool">
        <div>
          <i class="fa fa-angle-double-right" aria-hidden="true"></i>
        </div>
        <div>
          <i class="fa fa-ellipsis-h" aria-hidden="true"></i>
        </div>
      </div>
    </div>
    <div v-if="isOpen" class="postman-list">
      <div v-for="p in item.item" v-on:click="alertDrag" class="postman-list-item">
        <div class="postman-list-item-drag">
          <i class="fa fa-bars" aria-hidden="true"></i>
        </div>
        <span class="postman-list-item-method">{{p.request.method}}</span>
        <span class="flex-1">{{p.name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'postman_item',
    props: ['item'],
    data() {
      return {
        isOpen: false
      }
    },
    methods: {
      alertDrag() {
        window.alert('Please drag and drop the items.')
      }
    }
  }
</script>

<style>
  .postman {
    display: flex;
    flex-direction: column;
  }
  
  .postman-item {
    display: flex;
    flex-direction: row;
    background: #F2F2F2;
    align-items: center;
    border-bottom: 1px solid #999;
    cursor: pointer;
  }
  
  .postman-item>i {
    padding: 10px;
    font-size: 2em;
    padding-left: 20px;
    color: #999;
  }
  
  .postman-item-summary {
    padding: 10px;
    display: flex;
    flex-direction: column;
    border-right: 1px solid #999;
  }
  
  .postman-item-summary-name {
    color: #333;
    margin-bottom: 5px;
    font-weight: bold;
  }
  
  .postman-item-summary-requests {
    color: #666;
    font-size: 0.9em;
  }
  
  .postman-item-tool {
    display: flex;
    flex-direction: column;
    align-self: stretch;
    align-items: stretch;
    justify-content: center;
  }
  
  .postman-item-tool>div {
    flex: 1;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  
  .postman-item-tool>div:hover {
    background: #ddd;
  }
  
  .postman-item-tool>div:first-child {
    border-bottom: 1px solid #999;
  }
  
  .postman-list {
    -webkit-box-shadow: inset 0 1px 5px 0 #757575;
    box-shadow: inset 3px 2px 4px 0 #999;
    display: flex;
    flex-direction: column;
  }
  
  .postman-list-item {
    padding: 10px;
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid #ccc;
    cursor: pointer;
    border-left: 3px solid #999;
  }
  
  .postman-list-item-drag {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .postman-list-item-method {
    font-size: 0.8em;
    font-weight: bold;
    vertical-align: middle;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 10px;
    padding-right: 10px;
  }
</style>