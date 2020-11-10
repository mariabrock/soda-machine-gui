<template>
  <div id="app">
      <InsertCoins />
      <SalesBox />

      <b-container class="soda-grid">
        <b-row>
          <b-col>
            <CocaCola />
            <DrPepper />
          </b-col>

          <b-col>
            <JonesSoda />
            <LaCroix />
          </b-col>

          <b-col>
            <MtDew />
            <Pepsi />
          </b-col>
        </b-row>
      </b-container> 
      
  </div>
</template>

<script>
import SalesBox from './components/SalesBox.vue'
import InsertCoins from './components/InsertCoins.vue'
import CocaCola from './components/CocaCola.vue'
import DrPepper from './components/DrPepper.vue'
import JonesSoda from './components/JonesSoda.vue'
import LaCroix from './components/LaCroix.vue'
import MtDew from './components/MtDew.vue'
import Pepsi from './components/Pepsi.vue'


export default {
  name: 'App',
  components: {
    SalesBox,
    InsertCoins,
    CocaCola,
    DrPepper,
    JonesSoda,
    LaCroix,
    MtDew,
    Pepsi
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
