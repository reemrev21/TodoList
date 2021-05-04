<template>
  <div class="top shawdow">
     <b-input-group size="lg" class="shadow-sm mb-1 bg-white rounded">
      <b-form-input type="text" placeholder="Add todo" 
        v-model="newTodoItem" v-on:keyup.enter="addTodo">
      </b-form-input>
      <b-input-group-prepend class="addContainer" is-text v-on:click="addTodo">
        <b-icon icon="plus"></b-icon>
      </b-input-group-prepend>
    </b-input-group>
    
    <!-- <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
    <span class="addContainer" v-on:click="addTodo">
      <i class="fas fa-plus addBtn"></i>
    </span> -->
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      newTodoItem: ""
    }
  },

  methods: {
    addTodo: function() {
      if(this.newTodoItem !== '') {
        const obj = {completed: false, item: this.newTodoItem};
        localStorage.setItem(this.newTodoItem, JSON.stringify(obj));
        this.clearInput();
      }
    },
    
    clearInput: function() {
      this.newTodoItem = '';
    }
  }
}
</script>

<style scoped>
  input:focus{
    outline: none;
  }

  .inputBox{
    /* width: 70%; */
    background: white;
    /* height: 50px; */
    line-height: 50px;
    border-radius: 5px;
    text-align: center;
  }

  .inputBox input{
    border-style: none;
    /* font-size: 0.9rem; */
  }

  .addContainer{
    /* float: right;
    background: linear-gradient(to right, #999, #999); */
    /* display: block; */
    /* width: 3rem; */
    /* border-radius: 0 5px 5px 0; */
    cursor: pointer;
  }

  .addBtn{
    color: white;
    vertical-align: middle;
  }

  .top{
    margin-bottom: 10px;
  }
</style>