<template>
  <transition name="fade">
    <section class="body__content">

      <div class="aspect-ratio-c">
        <div class="aspect-ratio">
          <Google-Map class="media-container" />
        </div>
      </div>

      <h2>contact</h2>
      <div class="desc">
        <p>
          HOTTOSTUDIO
          <br>Studio Associato
          <br>
          <a href="#">Baluardo La Marmora 17
            <br>28100 Novara NO
            <br>Piedmont, Italy</a>
          <br>
          <br>General inquiries
          <br>
          <a href="mailto:info@hottostudio.com">info@hottostudio.com</a>
          <br>+39 340 27 77 318
          <br>+39 340 35 06 186
          <br>
          <br>Receive by appointment.
        </p>
      </div>
    </section>
  </transition>
</template>

<script>
import GoogleMap from '../components/GoogleMap';

export default {
  name: 'App',
  components: {
    GoogleMap
  }
};
</script>
