<template>
  <div>
    <b-list-group>
      <b-list-group-item v-for="todoItem, index in todoItems" v-bind:key="todoItem.item" class="d-flex justify-content-between shadow-sm p-3 mb-1 bg-white rounded">
        <b-icon icon="square" v-if="!todoItem.completed" scale="2" class="checkBtn" 
          v-bind:class="{getCheck: todoItem.completed}" 
          v-on:click="toggleComplete(todoItem, index)">
        </b-icon>
        <b-icon icon="check-square-fill" v-if="todoItem.completed" scale="2" class="checkBtn" 
          v-bind:class="{getCheck: todoItem.completed}" 
          v-on:click="toggleComplete(todoItem, index)">
        </b-icon>    
        <span class="list" v-bind:class="{textCompleted : todoItem.completed}"> 
          {{ todoItem.item }} 
        </span>
        <span class="removeBtn" v-on:click="removeTodo(todoItem, index)">
          <b-icon icon="trash-fill"></b-icon>
        </span>
      </b-list-group-item>
    </b-list-group>
    <!-- <ul>
      <li v-for="todoItem, index in todoItems" v-bind:key="todoItem.item" class="shawdow">
        <i class="checkBtn fas fa-check" 
          v-bind:class="{checkBtnCompleted: todoItem.completed}" 
          v-on:click="toggleComplete(todoItem, index)">
        </i>
        <span v-bind:class="{textCompleted : todoItem.completed}"> 
          {{ todoItem.item }} 
        </span>
        <span class="removeBtn" v-on:click="removeTodo(todoItem, index)">
          <i class="fas fa-trash-alt"></i>
        </span>
      </li>
    </ul> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      todoItems: [],
    }
  },
   
  methods: {
    removeTodo(todoItem, index) {
      localStorage.removeItem(todoItem)
      this.todoItems.splice(index, 1);
    },

    toggleComplete(todoItem) {
      todoItem.completed =! todoItem.completed;
      // 로컬 스토리지 데이터 갱신
      localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem))
    },
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

<style scoped>
  ul {
    list-style-type: none;
    padding-left: 0px;
    margin-top: 0;
    text-align: left;
  }

  li {
    display: flex;
    min-height: 50px;
    height: 50px;
    line-height: 50px;
    margin: 0.5rem 0;
    padding: 0 0.9rem;
    background: white;
    border-radius: 5px;
  }

  .removeBtn {
    margin-left: auto;
    color: #de4343;
    cursor: pointer;
  }

  .checkBtn {
    line-height: 45px;
    color: #999;
    margin-right: 5px;
    cursor: pointer;
  }

  .checkBtnCompleted {
    color: #b3adad;
  }

  .textCompleted {
    text-decoration: line-through;
    color: #b3adad;
  }

  .list{
    padding-left: 20px;
  }
</style>