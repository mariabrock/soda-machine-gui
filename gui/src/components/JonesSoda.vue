<template>
  <div id="jones-soda">
    <b-card
      title="Jones Soda"
      img-src="https://raw.githubusercontent.com/mariabrock/soda-machine-gui/master/gui/src/assets/jonesSoda.jpg"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem;"
      class="mb-2"
    >
      <b-card-text>
        "Run with the little guy… create some change."
        <p>price: $0.75</p>
      </b-card-text>

      <b-button href="#" variant="primary">Purchase</b-button>
    </b-card>
  </div>
</template>

<style scoped>
  .card {
    background: dodgerblue;
    
  }
  .card-text, .card-title {
    color: white;
  }
</style>