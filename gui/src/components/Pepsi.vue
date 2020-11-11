<template>
  <div id="pepsi">
    <b-card
      title="Pepsi"
      img-src="https://raw.githubusercontent.com/mariabrock/soda-machine-gui/master/gui/src/assets/pepsi.jpg"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem;"
      class="mb-2"
    >
      <b-card-text>
        That's what I like!
        <p>price: $0.75</p>
      </b-card-text>

      <b-button href="#" variant="primary">Purchase</b-button>
    </b-card>
  </div>
</template>

<style scoped>
  .card {
    background: royalblue;
    
  }
  .card-text, .card-title {
    color: white;
  }
</style>