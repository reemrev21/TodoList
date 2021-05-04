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
      localStorage.clear();
    }
  }
}
</script>

<style scoped>
  .clearAllContainer {
    margin-top: 10px;
    text-align: center;
  }
</style>
