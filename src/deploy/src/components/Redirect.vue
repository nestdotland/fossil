<template>
  <div class="redirect">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: "Redirect",
  data() {
    return {
      msg: "Searching for fossils...",
    };
  },
  mounted() {
    fetch("/redirect")
      .then((response) => response.json())
      .then((data) => {
        this.msg = `Latest publish: ${data}`;
        console.log(data);
        //window.location.href = res;
      });
  },
};
</script>

<style scoped>
</style>
