<template>
  <div id="app">
      <InsertCoins />
      <SalesBox />
      <CocaCola />
  </div>
</template>

<script>
import SalesBox from './components/SalesBox.vue'
import InsertCoins from './components/InsertCoins.vue'
import CocaCola from './components/CocaCola.vue'

export default {
  name: 'App',
  components: {
    SalesBox,
    InsertCoins,
    CocaCola
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
