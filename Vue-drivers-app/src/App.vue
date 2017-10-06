<template>
  <div id="app">
    <h1>Applicazione F1 🚗</h1>
    <free-drivers :freeDrivers="freeDrivers" @movedDriver="movedDriverHandler"></free-drivers>
    <busy-drivers :busyDrivers="busyDrivers" @removedDriver="removedDriverHandler"></busy-drivers>
    <all-drivers :allDrivers="drivers" @addedNewDriver="addedNewDriverHandler"></all-drivers>
  </div>
</template>

<script>
import Hello from './components/Hello';
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

<style>
@import url('https://fonts.googleapis.com/css?family=Lobster');

* {
  box-sizing: border-box;
}

#app {
  font-family: 'Lobster', cursive, 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.card {
  flex: 1 1 20%;
  margin: 0 20px;
  background: seashell;
  box-shadow: 0 0.071rem 0.214rem 2px rgba(0, 0, 0, 0.1);
}

h1 {
  width: 100%;
  font-size:50px;
  letter-spacing: 5px;
  margin: 0 0 40px;
}

h2 {
  font-size: 40px;
  letter-spacing: 2px;
}

p {
  font-size: 20px;
  letter-spacing: 2px;
  padding: 0 20px;
}

span {
  font-size: 15px;
  letter-spacing: 1px;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  text-align: left;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  max-width: 530px;
  margin: 0 auto;
}

p,
button {
  display: inline-block;
}

button {
  border: 18px solid black;
  background-color: transparent;
  border-radius: 50%;
  padding: 0;
  position: relative;
  box-shadow: 0 0.071rem 0.214rem 2px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
}

button::after {
  content: '';
  position: absolute;
  top: calc(50% - 22px);
  left: calc(50% - 22px);;
  width: 40px;
  height: 40px;
  background: transparent;
  border-radius: 50%;
  border: 2px solid indianred;
}

img {
  display: block;
  transition: transform 0.3s ease-in-out;
}

figure {
  margin: 0;
  display: inline-block;
  border-radius: 50%;
  box-shadow: 0 0.071rem 0.214rem 2px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

button:hover ~ figure img {
  transform: scale(1.05);
}

form {
  display: flex;
  justify-content: space-between;
  max-width: 600px;
  margin: 0 auto;
  flex-wrap: wrap;
}

input[type=text] {
  border: 0;
  box-shadow: 0 0.071rem 0.214rem 2px rgba(0, 0, 0, 0.1);
  font-size: 20px;
  font-family: 'Lobster', cursive;
  color: #2c3e50;
  letter-spacing: 2px;
  padding: 10px;
  flex: 1 1 20%;
  margin: 20px 0;
}

input[type=text] + input[type=text]{
  margin: 20px 0 20px 20px;
}

input[type=submit] {
  border: 0;
  box-shadow: 0 0.071rem 0.214rem 2px rgba(0, 0, 0, 0.1);
  padding: 10px;
  font-family: 'Lobster', cursive;
  cursor: pointer;
  font-size: 20px;
  letter-spacing: 2px;
  color: #2c3e50;
  background: rgba(205, 92, 92, 0.6);
  flex: 1 1 100%;
}
</style>
