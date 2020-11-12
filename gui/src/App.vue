<template>
  <div id="app">
      <div id="quarter-btn">
        <b-button @click="increment" variant="primary">Add A Quarter</b-button>
        <p>Total Quarters: {{ addQuarter }}</p>
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

// import firebase from "firebase";
// const db = firebase.database();

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
  mounted() {
    fetch("https://soda-machine-gui.firebaseio.com", {
      method: 'get'
    })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      this.sodas = data.results
    })
  },
  data() {
    return {
      addQuarter: 0
    }
  },
  methods: {
    increment(addQuarter) {
      if (addQuarter) {
        this.addQuarter++ 
      }
      console.log(addQuarter)
    },
  //   purchaseSoda() {
    
  // }
  }
}
</script>

<style>
html body #app {
  background-color: lightslategray;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
