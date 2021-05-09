<template>
  <div class="clearAllContainer">
    <b-button variant="danger" v-on:click="clearTodo">
      Clear All
    </b-button>

    <!-- <span class="clearAllBtn" v-on:click="clearTodo">
      Clear all
    </span> -->
  </div>
</template>

<script>
export default {
  methods: {
    clearTodo: function(){
      this.$emit('clearAll');
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
