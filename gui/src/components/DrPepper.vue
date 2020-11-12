<template>
  <div id="dr-pepper">
    <b-card
      title="Dr Pepper"
      img-src="https://raw.githubusercontent.com/mariabrock/soda-machine-gui/master/gui/src/assets/drPepper.jpg"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem;"
      class="mb-2"
    >
      <b-card-text>
        Always One of a Kind
        <p>price: $0.75</p>
      </b-card-text>

      <b-button href="#" variant="primary">Purchase</b-button>

      <h1 v-if="amount === 0">SOLD OUT</h1>
    </b-card>
  </div>
</template>

<script>

export default {
  data() {
    return {
      amount: 16 
    }
  }
}
</script>

<style scoped>
  .card {
    background: crimson;
    
  }
  .card-text, .card-title {
    color: white;
  }
</style>