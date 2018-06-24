<template>
  <div class="main" id="app" :class="{'loaded' : imagesLoaded,
                             'visible' : carouselReady,
                             'opened-menu' : isMenuOpen,
                             'main--dark' : darkBackground}">
    <div class="loader">
      <h1>hottostudio <br><span>graphic design | photography</span></h1>
    </div>

    <Header></Header>

    <main class="body" :class="{'body--absolute' : isHome}">
      <router-view/>
    </main>

    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/Header';
import Footer from './components/Footer';
import EventBus from './event-bus';

export default {
  components: {
    Header,
    Footer
  },

  data() {
    return {
      carouselReady: false, // carousel ready
      imagesLoaded: false, // loaded images
      isMenuOpen: false,
      darkBackground: false,
      isHome: true
    };
  },

  methods: {
    ifRootPath(route) {
      return route.path === '/' || route.path.match(/\/home/gi);
    }
  },

  watch: {
    $route(to) {
      this.isHome = this.ifRootPath(to);

      this.isMenuOpen = false;

      EventBus.$emit('closedMenu');

      const body = document.querySelector('body');

      if (this.isHome) {
        this.darkBackground = false;
        body.classList.remove('dark-bg');
      } else {
        this.darkBackground = true;
        body.classList.add('dark-bg');
      }
    }
  },

  created() {
    EventBus.$on('carouselReady', () => { this.carouselReady = true; });
    EventBus.$on('imagesLoaded', () => { this.imagesLoaded = true; });
    EventBus.$on('darkBackground', (IsDark) => { this.darkBackground = IsDark; });
    EventBus.$on('isMenuOpen', (IsOpen) => { this.isMenuOpen = IsOpen; });

    if (!this.ifRootPath(this.$route)) {
      this.isHome = false;
      this.carouselReady = true;
      this.imagesLoaded = true;
      this.darkBackground = true;
    }
  }
};
</script>

<style lang="scss">
  @import 'assets/scss/app.scss';
</style>

