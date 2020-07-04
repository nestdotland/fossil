<template>
  <div id="app">
    <img alt="nest.land logo" src="./assets/logo_light.png" width="100" />
    <redirect />
  </div>
</template>

<script>
import Redirect from "./components/Redirect.vue";

export default {
  name: "App",
  components: {
    Redirect,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 40vh;
}
</style>
