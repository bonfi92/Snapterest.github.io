<template>
  <div>
    <button @click="toggleMenu()" class="hamburger hamburger--squeeze hidden-on-desktop" type="button">
      <span class="hamburger-box">
        <span class="hamburger-inner"></span>
      </span>
    </button>

    <nav class="menu">
      <ul>
        <li class="menu__item">
          <router-link class="link" to="/about"><span>about</span></router-link>
          <router-link class="link" to="/contact"><span>contact</span></router-link>
        </li>
        <li class="menu__item hidden-on-mobile">
          <a class="link" href="#"><span>facebook</span></a>
          <a class="link" href="#"><span>instagram</span></a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import EventBus from '../event-bus';

export default {
  data() {
    return {
      isMenuOpen: false // menu mobile is open
    };
  },

  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
      EventBus.$emit('isMenuOpen', this.isMenuOpen);
    }
  },

  created() {
    EventBus.$on('closedMenu', () => { this.isMenuOpen = false; });
  }
};
</script>

