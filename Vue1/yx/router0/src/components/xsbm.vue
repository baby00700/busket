<template>
<div>
  <p>{{msg}}</p>
  <input v-model='msg' id='input1' v-bind:disabled='disabled ? true : false' />
  <button id='sub1' @click='alert0(msg)' v-bind:disabled='disabled ? true : false'>submit</button>
</div>
  
</template>
<script>
export default {
  data: function () {
    return {
      msg: '新生报名22',
      disabled: true
    }
  },
  methods: {
    getdata: function () {
      console.log('456')
    },
    alert0: function (msg) {
      alert(msg)
    }
  }
}
</script>
<style>
#input1{
  border:1px solid red;
}
</style>
