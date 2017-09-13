<template>
<div>
  <p  :class="{p1:isgreen,p2:isred}">
      {{msg}}
  </p>
  <button class="but1" @click="turncolor">turn color</button>
</div>
</template>

<script>

export default {
  data () {
    return {
      msg: 'Ooooooh!!fuck!',
      isgreen: false,
      isred: true
    }
  },

  methods: {
    turncolor: function () {
      this.isgreen = !this.isgreen
      this.isred = !this.isred
      console.log(this.isgreen)
    }
  }
}
</script>

<style>
.p1{
  height:60px;
  width:100%;
  color:red;
  font-size:59px;
  text-align: center;
  line-height:auto;
}

.p2{
  height:60px;
  width:100%;
  color:green;
  font-size:59px;
  text-align: center;
  line-height:auto;
}

.but1{
  width:100px;
  height:30px;
  line-height: 20px;
  margin-top:50px;
}
</style>
