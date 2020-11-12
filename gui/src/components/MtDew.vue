<template>
  <div id="mtDew">
    <b-card
      title="Mountain Dew"
      img-src="https://raw.githubusercontent.com/mariabrock/soda-machine-gui/master/gui/src/assets/mtDew.jpg"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem;"
      class="mb-2"
    >
      <b-card-text>
       Do the DEW
       <p>price: $0.75</p>
      </b-card-text>

      <b-button href="#" variant="primary" disabled>Purchase</b-button>

      <h1 v-if="amount === 0">SOLD OUT</h1>

    </b-card>
  </div>
</template>

<script>

export default {
  data() {
    return {
      amount: 0 
    }
  }
}
</script>

<style scoped>
  .card {
    background: limegreen;
    
  }
  .card-text, .card-title {
    color: white;
  }
  h1 {
    color: yellow;
    margin-top: 1rem;
  }
</style>