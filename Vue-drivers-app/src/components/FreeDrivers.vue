<template>
<section class="card">
  <h2>Piloti liberi</h2>
  <ul v-for="driver in freeDrivers">
    <li>
      <button @click="addDriver(driver)">➕</button>
      <p>{{ driver.name }}</p>
      <figure>
        <img :src="driver.photo" width="100"alt="">
      </figure>
    </li>
  </ul>
</section>
</template>

<script>
export default {
  props: ['freeDrivers'], // Mi aspetto di ricevere da mio padre la props drivers
  methods: {
    addDriver(freeDriver) {
      this.$emit('movedDriver', freeDriver); //dico al padre che voglio spostare il pilota che gli passo (driver)
    }
  }
};
</script>

<style scoped>
</style>
