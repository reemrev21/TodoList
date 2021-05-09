<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput v-on:addTodoItem="addOneItem"></TodoInput>
    <TodoList v-bind:propsdata="todoItems" v-on:removeItem="removeOneItem" v-on:toggleItem="toggleOneItem"></TodoList>
    <TodoFooter v-on:clearAll="clearAllItems"></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'

export default {
  name: 'App',
  components: {
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter
  },

  data() {
    return {
      todoItems: []    
    }
  },

  methods: {
    addOneItem(todoItem) {
      if (todoItem.key != this,todoItem) {
      const obj = {completed: false, item: todoItem};
      localStorage.setItem(todoItem, JSON.stringify(obj));
      this.todoItems.push(obj);
      }
    },

    removeOneItem(todoItem, index) {
      localStorage.removeItem(todoItem.item)
      this.todoItems.splice(index, 1);
    },

    toggleOneItem(todoItem, index){
      // 로컬 스토리지 데이터 갱신
      // props 사용하지 않고 직접 접근!
      this.todoItems[index].completed = !this.todoItems[index].completed;
      localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem))
    },

    clearAllItems() {
      localStorage.clear();
      // 배열을 비워주어야 화면에 갱신된다.
      this.todoItems = [];
    }
  },

  created() {
    if(localStorage.length > 0) {
      for (var i = 0; i < localStorage.length; i++) {
        if(localStorage.key(i) !== 'loglevel:webpack-dev-server') {
          this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
        }
      }
    }
  },
}
</script>

<style>
  body {
    text-align: center;
    background-color: #E9CfEC;
  }

  input { 
    border-style: groove;
    width: 200px;
  }
  
  button {
    border-style: groove;
  }

  .shadow {
    box-shadow: 5px, 10px, 10px rgba(0, 0, 0, 0.03);
  }
</style>
