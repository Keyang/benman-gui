<template>
  <div class="column">
      <div class="column-title">
        <div v-on:click="onBack" class="btn btn-icon column-title-back">
          <i class="fa fa-chevron-left" aria-hidden="true"></i>
        </div>
        <span>{{item.name}}</span>
        <span class="flex-1" />
        <div class="column-title-tool">
        </div>
      </div>
      <div class="column-body">
        <div class="benman-toolbar">
          <button class="btn normal success">Start <i style="margin-left:3px" class="fa fa-play" aria-hidden="true"></i></button>
          <button class="btn normal primary">Edit <i style="margin-left:3px" class="fa fa-pencil" aria-hidden="true"></i></button>
          <span class="flex-1"/>
          <button class="btn normal primary"><i style="margin-right:3px" class="fa fa-plus" aria-hidden="true"></i> Unit</button>
        </div>
        <Unit v-for="unit in item.units" v-bind:unit="unit"/>
      </div>
    </div>
</template>

<script>
  const Unit = require('./BenmanUnit')
  export default {
    name: 'benman-itemdetail-column',
    props: ['item'],
    data() {
      return {}
    },
    methods: {
      onBack() {
        this.$emit('clearChoseItem')
      }
    },
    components: {
      Unit
    }
  }
</script>


<style>
  .benman-toolbar {
    display: flex;
    flex-direction: row;
    padding: 8px;
  }
  
  .benman-toolbar>* {
    margin-right: 8px;
  }
</style>