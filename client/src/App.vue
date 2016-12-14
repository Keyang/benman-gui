<template>
  <ColumnBenman/>
</template>

<script>
  const ColumnPostman = require('./components/Column_Postman')
  const ColumnBenman = require('./components/Column_Benman')
  export default {
    name: 'appp',
    components: {
      ColumnPostman,
      ColumnBenman
    }
  }
</script>

<style>

</style>