<template>
  <div class="clearAllContainer">
    <b-button variant="danger" v-on:click="clearTodo">
      Clear All
    </b-button>
  </div>
</template>

<script>
export default {
  methods: {
    clearTodo(){
      this.$store.commit('clearAllItems');
    }
  }
}
</script>

<style scoped>
  .clearAllContainer {
    text-align: center;
    margin: 1.5rem 0 1.5rem;
  }
</style>
