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

import firebase from "firebase";
// const db = firebase.database();

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
      this.buyer = data.results
    })
  },
  data() {
    return {
      "amount": null,
      "uid": null,
      "hasQuarters" : null,
      "isSoldOut" : null,
      "numofQuarters": 0,
      "buttonPressed": false,
      "soldASoda": false
    }
  },
  methods: {
    getSodas() {
      firebase
        .db()
    }
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
