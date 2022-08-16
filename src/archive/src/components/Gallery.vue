<template>
  <div>
    <div class="nest hero is-dark">
      <div class="hero-body">
        <div class="container">
          <h1 class="nest title is-1 has-text-centered">Modules</h1>
          <div class="nest control has-icons-left search-bar">
            <input class="input is-rounded" type="text" placeholder="Search for modules" />
            <span class="icon is-small is-left">
              <font-awesome-icon :icon="['fa', 'search']" />
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="nest hero is-dark is-small">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-multiline">
            <div class="column is-3" v-for="index in 15" :key="index">
              <card />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "./Card";

export default {
  components: {
    Card,
  },
};
</script>

<style lang="scss" scoped>
</style>