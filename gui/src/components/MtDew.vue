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

      <b-button href="#" variant="primary">Purchase</b-button>
    </b-card>
  </div>
</template>

<style scoped>
  .card {
    background: limegreen;
    
  }
  .card-text, .card-title {
    color: white;
  }
</style>