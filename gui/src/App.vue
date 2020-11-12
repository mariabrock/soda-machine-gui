<template>
  <div id="app">
      <div id="quarter-btn">
        <b-button @click="increment" variant="primary">Add A Quarter</b-button>
        <p>Total Quarters: {{ totalQuarters }}</p>
      </div>

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

import CocaCola from './components/CocaCola.vue'
import DrPepper from './components/DrPepper.vue'
import JonesSoda from './components/JonesSoda.vue'
import LaCroix from './components/LaCroix.vue'
import MtDew from './components/MtDew.vue'
import Pepsi from './components/Pepsi.vue'

export default {
  name: 'App',
  components: {
    CocaCola,
    DrPepper,
    JonesSoda,
    LaCroix,
    MtDew,
    Pepsi
  },
  data() {
    return {
      totalQuarters: 0,
      sodaData: []
    }
  },
  // mounted() {
  //   const database = this.$firebase.firestore();
  //     database
  //     .collection('test')
  //     .get()
  //     .then(snap => {
  //       const sodaData = [];
  //       snap.forEach(soda => {
  //         sodaData.push({ [soda.sodaId] : soda.data});
  //       })
  //       this.sodaData = sodaData;
  //     })
  // },
  methods: {
    increment(totalQuarters) {
      if (totalQuarters) {
        this.totalQuarters++ 
      }
      this.totalQuarters
      console.log(totalQuarters)
    }
  }
}
</script>

<style>
html {
  background-color: lightslategray;
}
#app {
  background-color: lightslategray;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
