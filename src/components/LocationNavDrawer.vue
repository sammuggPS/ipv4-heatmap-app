<template>
  <v-layout wrap>
    <v-container>
      <v-layout justify-center>
        <v-btn dark fab fixed top left color="blue" @click.stop="drawer = true">
          <v-icon>{{ toggleIcon }}</v-icon>
        </v-btn>
      </v-layout>
    </v-container>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list class="pa-1">
        <v-list-tile>
          <v-list-tile-action>
            <v-btn flat icon @click.stop="drawer = false">
              <v-icon>close</v-icon>
            </v-btn>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="title">
              Pick a Location
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>

      <v-list class="pt-0" dense>
        <v-divider></v-divider>

        <v-list-tile v-for="key in locationKeys" :key="key" @click="navigateTo(key)">
          <v-list-tile-content>
            <v-list-tile-title>{{ locations[key].displayName }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </v-layout>
</template>

<script>
export default {
  props: ['locations'],
  computed: {
    locationKeys() {
      return Object.keys(this.locations);
    }
  },
  data() {
    return {
      drawer: null,
      toggleIcon: 'explore'
    };
  },
  methods: {
    navigateTo(key) {
      this.drawer = false;
      this.$emit('navigate', key);
    }
  }
};
</script>
