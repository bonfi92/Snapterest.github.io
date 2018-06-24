<template>
  <transition name="fade">
    <section class="body__content carousel-c">
      <Slick
        class="carousel aspect-ratio"
        ref="slick"
        :options="slickOptions"
        @init="handleInit"
        @lazyLoaded="handleLazyLoaded">
        <div class="carousel__item"><img data-lazy="../static/img/project1.jpg" alt="" /></div>
        <div class="carousel__item"><img data-lazy="../static/img/project2.jpg" alt="" /></div>
        <div class="carousel__item"><img data-lazy="../static/img/project3.jpg" alt="" /></div>
        <div class="carousel__item"><img data-lazy="../static/img/project4.jpg" alt="" /></div>
      </Slick>
    </section>
  </transition>
</template>

<script>
import Slick from 'vue-slick';
import EventBus from '../event-bus';

export default {
  name: 'Home',

  components: {
    Slick
  },

  data() {
    return {
      bodyC: null,
      carousel: null,
      slickOptions: {
        lazyLoad: 'progressive',
        fade: true,
        autoplay: true,
        autoplaySpeed: 2000,
        draggable: false
      }
    };
  },

  methods: {
    handleLazyLoaded() {
      EventBus.$emit('imagesLoaded');
    },
    handleInit() {
      EventBus.$emit('carouselReady');
    }
  }
};
</script>
