
<template>
  <v-app>
    <app-bar title="News"></app-bar>

    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import AppBar from './components/Layout/AppBar';

export default {
  name: 'App',
  components: {
    AppBar,
  },
  data() {
    return {
      name: 'News',
    };
  },
  computed: {
    ...mapGetters(['dataFromApi']),
  },
  mounted() {
    this.fetchDataFromApi();
  },
  methods: {
    ...mapActions(['fetchDataFromApi']),
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
