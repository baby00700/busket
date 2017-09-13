<template id="sea1">
  <div>
    Ooooooh!{{sea1msgg}}
    <img v-bind:src="imgsrc" />
  </div>
</template>

<script>
import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)
export default {
  data () {
    return {
      sea1msgg: 'sea1',
      imgsrc: ''
    }
  },
  created: function () {
    var url = 'https://easy-mock.com/mock/59a92b9fe0dc66334198ddf9/example/upload'
    this.$http.post(url, {a: 1, b: 2}).then(function (res) {
      var json = res.body
      console.log(json)
      console.info(json)
      this.sea1msgg = json
      var imgsrc0 = json.img
      var arr = []
      arr = imgsrc0.split('_')
      console.log(arr)
    }, function (res) {
      console.info(res)
    })
    .catch(function (res) {
      console.log(res)
    })
  }
}

</script>


