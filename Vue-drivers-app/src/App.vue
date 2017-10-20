<template>
  <div id="app">
    <h1>Applicazione F1 🚗</h1>
    <free-drivers :freeDrivers="freeDrivers" @movedDriver="movedDriverHandler"></free-drivers>
    <busy-drivers :busyDrivers="busyDrivers" @removedDriver="removedDriverHandler"></busy-drivers>
    <all-drivers :allDrivers="drivers" @addedNewDriver="addedNewDriverHandler"></all-drivers>
  </div>
</template>

<script>
import freeDrivers from './components/FreeDrivers';
import busyDrivers from './components/BusyDrivers';
import allDrivers from './components/allDrivers';

export default {
  data() {
    return {
      drivers: [
        {
          id: 0,
          name: 'Sebastian Vettel',
          hasTeam: false,
          photo:
            'https://www.formula1.com/content/fom-website/en/championship/drivers/sebastian-vettel/_jcr_content/image.img.1024.medium.jpg/1490267969275.jpg'
        },
        {
          id: 1,
          name: 'Kimi Raikkonen',
          hasTeam: false,
          photo:
            'https://www.formula1.com/content/fom-website/en/championship/drivers/kimi-raikkonen/_jcr_content/image.img.1024.medium.jpg/1490268227661.jpg'
        }
      ],
      busyDrivers: []
    };
  },
  computed: {
    freeDrivers() {
      return this.drivers.filter(driver => {
        return !driver.hasTeam;
      });
    }
  },
  methods: {
    movedDriverHandler(freeDriver) {
      const date = new Date();

      freeDriver.hasTeam = true;
      this.busyDrivers.push({
        driverId: freeDriver.id,
        name: freeDriver.name,
        photo: freeDriver.photo,
        date: `${date.getDate()} / ${date.getMonth() +
          1} / ${date.getFullYear()}, ${date.getHours()} : ${date.getMinutes()}`
      });
    },
    removedDriverHandler(busyDriver) {
      const driver = this.drivers.find(d => {
        return d.id === busyDriver.driverId;
      });

      driver.hasTeam = false;

      this.busyDrivers.splice(this.busyDrivers.indexOf(busyDriver), 1); // array.splice(_indice_dove_posizionarsi_, _numero_di_elementi_da_rimuovere_)
    },
    addedNewDriverHandler(newDriver) {
      this.drivers.push({
        id: this.drivers.length,
        name: newDriver.name,
        hasTeam: false,
        photo: newDriver.photo
      });
    }
  },
  components: {
    freeDrivers,
    busyDrivers,
    allDrivers
  }
};
</script>

<style lang="scss">
  @import 'assets/scss/app.scss';
</style>
