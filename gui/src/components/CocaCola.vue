<template>
  <div id="coca-cola">
    <b-card
      title="Coca Cola"
      img-src="https://raw.githubusercontent.com/mariabrock/soda-machine-gui/master/gui/src/assets/cocaCola.jpg"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem;"
      class="mb-2"
    >
      <b-card-text>
        Together Tastes Better
        <p>price: $0.75</p>
      </b-card-text>

      <b-button 
      variant="primary" 
      @click="purchaseSoda"
      :totalQuarters="totalQuarters" 
      :amount="amount"
      :disabled="totalQuarters < 3 || amount === 0"
      >
        Purchase
      </b-button>

      <h1 v-if="amount === 0">SOLD OUT</h1>

    </b-card>
  </div>
</template>

<style scoped>
  .card {
    background: black;
    
  }
  .card-text, .card-title {
    color: white;
  }
</style>

<script>

export default {
  props: {
    increment: Function,
    totalQuarters: Number
  },
  data() {
    return {
      amount: 15 
    }
  },
  methods: {
    purchaseSoda(amount) {
      if (amount > 0) {
        this.amount--
      }
    }
  },
  watch: {
    totalQuarters() {
      
    }
  }
}
</script>