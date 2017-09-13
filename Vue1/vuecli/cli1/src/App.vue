<template>
  <div id="app">
   
    <hello></hello>
    <sea></sea>
  </div>
</template>

<script>
import Hello from './components/Hello'
import Sea from './components/Hea'
export default {
  components: {
    Hello, Sea
  }
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
*{
  padding:0;
  margin:0;
}
</style>
