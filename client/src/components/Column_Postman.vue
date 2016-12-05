<template>
  <div class="column">
    <div class="column-title">
      <span> Postman Collection</span>
      <span class="flex-1" />
      <div class="column-title-tool">
        <i v-on:click="importCollection" title="Import Postman colleciton" class="fa fa-plus" aria-hidden="true"></i>
      </div>
    </div>
    <div class="column-body">
      <PostmanItem 
      v-for="item in collections"
      v-bind:item="item"
      >
      </PosttmanItem>
    </div>
  </div>
</template>

<script>
  const PostmanItem = require('./Item_Postman')
  export default {
    name: 'column_postman',
    data() {
      return {
        collections: []
      }
    },
    methods: {
      importCollection: function(evt) {
        // TODO use file input rather than mock data
        this.collections.push(require('../mock/postman.collection.json'))
      }
    },
    components: {
      PostmanItem
    },
    created: function() {
      this.importCollection()
    }
  }
</script>

<style>

</style>