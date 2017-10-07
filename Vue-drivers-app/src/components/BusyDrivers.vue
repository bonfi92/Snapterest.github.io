<template>
<section class="card">
  <h2>Piloti occupati</h2>
  <ul>
    <li v-for="driver in busyDrivers">
      <button @click="removeDriver(driver)">➖</button>
      <p>{{ driver.name }}<br>
        <span>{{ driver.date }}</span>
      </p>
      <figure>
        <img :src="driver.photo" width="100"alt="driver photo">
      </figure>
    </li>
  </ul>
</section>
</template>

<script>
export default {
  props: ['busyDrivers'], // Mi aspetto di ricevere da mio padre la props drivers
  methods: {
    removeDriver(busyDriver) {
      this.$emit('removedDriver', busyDriver);
    }
  }
};
</script>

<style scoped>
</style>
