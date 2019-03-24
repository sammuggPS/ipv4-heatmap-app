<template>
  <div id="app">
    <div id="block-overlay" v-show="!isInitialized || isLoading">
      <span>{{ overlayText }}</span>
    </div>
    <mapbox :features="featureCollection" v-on:initialized="onInitialized"></mapbox>
  </div>
</template>

<script>
import Mapbox from '@/components/MapBox.vue';
import { mapState } from 'vuex';

export default {
  name: 'app',
  components: {
    Mapbox
  },
  data() {
    return {
      isInitialized: false,
      isLoading: true
    };
  },
  methods: {
    onInitialized() {
      let self = this;
      self.isInitialized = true;

      // initialize location to Raleigh
      self.$store.dispatch('FETCH_IPS_FOR_LOCATION', 'rdu')
        .finally(function() {
          self.isLoading = false;
        });
    }
  },
  computed: {
    ...mapState(['featureCollection']),
    overlayText() {
      return !this.isInitialized ? 'Initializing...' : 'Loading Data...';
    }
  }
};
</script>

<style lang="scss">
html,
body,
#app {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  position: relative;

  #block-overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    font-size: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }
}
</style>
