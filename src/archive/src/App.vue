<template>
  <div id="app">
    <Gallery />
  </div>
</template>

<script>
import Gallery from "./components/Gallery";

export default {
  name: "App",
  components: {
    Gallery,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap");

#app {
  font-family: "Inter", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.hero.is-dark {
  background-color: #262835 !important;
}

.title.is-1 {
  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 64px;
  line-height: 77px;
  text-transform: uppercase;
}
</style>
