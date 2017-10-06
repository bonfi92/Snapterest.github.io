<template>
<section class="card card--all-drivers">
  <h2>Tutti i piloti</h2>
  <ul v-for="driver in allDrivers">
    <li>
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
  props: ['allDrivers']
};
</script>

<style scoped>
.card--all-drivers {
  flex: 1 1 100%;
  margin-top: 20px;
}
</style>
