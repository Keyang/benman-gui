<template>
  <div>
    <div v-if="choseItem === null" id="benmanList" class="column">
      <div class="column-title">
        <span> Benman Scripts</span>
        <span class="flex-1" />
        <div class="column-title-tool">
          <i v-on:click="newBenman" title="New Benman script" class="fa fa-plus" aria-hidden="true"></i>
        </div>
      </div>
      <div class="column-body">
        <div
            v-on:click="openBenman(item)"
            v-for="item in collections"
         >
        <BenmanItem 
            v-bind:item="item"/>

        </div>

      </div>
    </div>
    <div v-if="choseItem">
      <ColumnBenmanItemDetail
        v-on:clearChoseItem="clearChoseItem"
        v-bind:item="choseItem"
      />
    </div>
  </div>
</template>

<script>
  const BenmanItem = require('./Item_Benman')
  const ColumnBenmanItemDetail = require('./Column_Benman_ItemDetail')
  export default {
    name: 'benman-column',
    data() {
      return {
        collections: [],
        choseItem: null
      }
    },
    methods: {
      newBenman() {
        // TODO create new benman entry or import from json
        this.collections.push(require('../mock/benman.json'))
      },
      openBenman(item) {
        this.choseItem = item
      },
      clearChoseItem() {
        this.choseItem = null
      }
    },
    components: {
      BenmanItem,
      ColumnBenmanItemDetail
    }
  }
</script>

<style>

</style>