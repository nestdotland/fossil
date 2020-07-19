<template>
  <div class="nest" id="app">
    <Gallery />
    <Footer />
  </div>
</template>

<script>
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    Gallery,
    Footer,
  },
};
</script>

<style lang="scss"></style>
