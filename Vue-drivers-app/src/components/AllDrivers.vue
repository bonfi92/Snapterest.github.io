<template>
<section class="card card--all-drivers">
  <h2>Tutti i piloti</h2>
  <ul>
    <li v-for="driver in allDrivers">
      <p>{{ driver.name }}</p>
      <figure>
        <img :src="driver.photo" width="100" alt="driver photo">
      </figure>
    </li>
    <li>
      <p>{{ newDriver.name }}</p>
      <figure>
        <img :src="newDriver.photo" width="100" alt="driver photo">
      </figure>
    </li>
  </ul>
  <form @submit="addNewDriver">
    <input type="text" placeholder="Name" v-model="newDriver.name">
    <input type="text" placeholder="Photo" v-model="newDriver.photo">
    <input type="submit" value="AGGIUNGI">
  </form>
</section>
</template>

<script>
export default {
  props: ['allDrivers'],
  data() {
    return {
      newDriver: {
        name: '',
        photo: ''
      }
    };
  },
  methods: {
    addNewDriver(e) {
      e.preventDefault();
      if (this.newDriver.name === undefined || this.newDriver.name === '')
        return alert('Aggiungi il nome del pilota');
      this.$emit('addedNewDriver', this.newDriver);
    }
  }
};
</script>

<style scoped>
.card--all-drivers {
  flex: 1 1 100%;
  margin-top: 40px;
  padding: 0 0 40px;
}
</style>
