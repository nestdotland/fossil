<template>
  <div class="redirect">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import Arweave from "arweave/web";

export default {
  name: "Redirect",
  data() {
    return {
      msg: "Searching for fossils...",
    };
  },
  async mounted() {
    const arweave = Arweave.init({
      host: "arweave.net", // Hostname or IP address for a Arweave host
      port: 443, // Port
      protocol: "https", // Network protocol http or https
      timeout: 20000, // Network request timeouts in milliseconds
      logging: false, // Enable network request logging
    });

    const transactions = await arweave.arql({
      op: "and",
      expr1: {
        op: "equals",
        expr1: "from",
        expr2: "tySYSW93nDky1sbCO56PmyEyspbyYx7x9ZXMNueKOOg",
      },
      expr2: {
        op: "equals",
        expr1: "from",
        expr2: "tySYSW93nDky1sbCO56PmyEyspbyYx7x9ZXMNueKOOg",
      },
    });
    const latest = transactions[0];
    this.msg = latest;
    window.location.href = `https://arweave.net/tx/${latest}`;
  },
};
</script>

<style scoped>
</style>
