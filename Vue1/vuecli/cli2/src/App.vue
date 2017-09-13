<template>
  <div id="app">
    <router-link to="/"><span class="root0">root</span></router-link>
    <router-link to="/sea1"><span>sea1</span></router-link>
    <router-link to="/sea2"><span>sea2</span></router-link>
    <router-link to="/hello"><span>hello</span></router-link>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.router-link-exact-active,.router-link-active{
  color:green;
  font-size:30px;
  list-style: none;

}
.root0{
  color:black;
  font-size:14px;
}

a{
  text-decoration:none;
  }
</style>
