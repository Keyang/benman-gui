<template>
  <div class="unit">
    <div class="unit-head flex-1">
      <div class="flex-1">
        <div class="unit-head-title">{{unit.name}}</div>
        <div class="unit-head-info">
          <span>
            <clickTextInput title="Number of concurrent users running the unit" v-model="unit.numberOfUser"></clicktextinput> Users
          </span>
          <span><clickTextInput v-model="unit.loopCount"></clicktextinput> Iterations</span>
          <span>User Rampup: <clickTextInput v-model="unit.rampUpPeriod"/> s</span>
          <span>Aggregator: <clickTextInput v-model="unit.aggregator"/></span>
        </div>
      </div>
      <div class="unit-tools">
        <div class="btn btn-icon"><i class="fa fa-play" aria-hidden="true"></i></div>
        <div class="btn btn-icon"><i class="fa fa-trash-o" aria-hidden="true"></i></div>
      </div>
    </div>
    <div class="unit-items">
      <div v-for="p in unit.newmanOption.collection.item" class="unit-list-item">
          <span class="unit-list-item-method">{{p.request.method}}</span>
          <span class="flex-1">{{p.name}}</span>
          <span class="unit-list-item-remove"><i class="fa fa-times" aria-hidden="true"></i></span>
        </div> 
    </div>
  </div>
</template>


<script>
  export default {
    name: 'benmanunit',
    props: ['unit'],
    methods: {
      show() {
        console.log(this.unit.numberOfUser)
      }
    }
  }
</script>

<style>
  .unit{
    padding-bottom:50px;
    border-bottom:1px solid #999;
  }
  .unit-head {
    padding: 8px;
    background: #eee;
    display: flex;
    flex-direction: row;
  }
  .unit-head-title{
    color: #333;
    font-size:1.2em;
    font-weight:bold;
  }
  .unit-head-info{
    display: flex;
    flex-direction: row;

  }
  .unit-head-info>span{
    margin-right:10px;
  }  
  .unit-tools{
    display: flex;
    flex-direction: row;
  }
  .unit-tools>*{
    width:30px;
    margin-right:5px;
  }
  .unit-tools>.btn .fa{
    font-size:1.2em;
  }
  .unit-list-item{
    padding: 10px;
    display: flex;
    flex-direction: row;
    margin:10px;
    margin-bottom:0;
    background: #ddd;
    align-items: center;
  }
  .unit-list-item-method{
       font-size: 0.8em;
    font-weight: bold;
    vertical-align: middle;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 10px;
    padding-right: 10px 
  }
  .unit-list-item-remove{
    cursor: pointer;
    padding:8px;
    color:red;
  }
  .unit-list-item-remove>.fa{
    color:red;
  }
</style>