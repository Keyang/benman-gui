<template>
  <span class="clickTextInput">
    <span v-if="!isEdit" v-on:click="edit" class="clicktextinput-value">{{value}}</span>
    <input v-if="isEdit" :size="textSize" v-on:blur="isEdit=false" v-on:input="update($event.target.value)" :value="value" class="clicktextinput-input"></div>
  </span>
</template>


<script>
  export default {
    name: 'clicktextinput',
    props: ['value'],
    data() {
      return {
        isEdit: false
      }
    },
    methods: {
      update(d) {
        this.$emit('input', d)
      },
      edit() {
        this.isEdit = true
        this.$nextTick(() => {
          this.$el.querySelector('input').focus()
          this.$el.querySelector('input').select()
        })
      }
    },
    computed: {
      textSize() {
        return this.value.toString().length
      }
    }
  }
</script>

<style>
.clicktextinput-value{
  border-bottom:1px solid #333;
  cursor: pointer;
}
.clicktextinput-input{
  background: transparent;
  border:none;
  padding:0;
  border-bottom:1px solid #333;
  outline: none;
  font-size:1em;
}
</style>
