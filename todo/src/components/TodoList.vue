<template>
  <div>
    <transition-group name="list" tag="b-list-group">
      <b-list-group-item v-for="todoItem, index in propsdata" v-bind:key="todoItem.item" class="d-flex justify-content-between shadow-sm p-3 mb-1 bg-white rounded">
        <b-icon icon="square" v-if="!todoItem.completed" scale="2" class="checkBtn" 
          v-bind:class="{getCheck: todoItem.completed}" 
          v-on:click="toggleComplete(todoItem, index)">
        </b-icon>
        <b-icon icon="check-square-fill" v-if="todoItem.completed" scale="2" class="checkBtn" 
          v-bind:class="{getCheck: todoItem.completed}" 
          v-on:click="toggleComplete(todoItem, index)">
        </b-icon>    
        <span class="list" v-bind:class="{textCompleted : todoItem.completed}"> 
        <b> {{ todoItem.item }} </b>
        </span>
        <span class="removeBtn" v-on:click="removeTodo(todoItem, index)">
          <b-icon icon="trash-fill"></b-icon>
        </span>
      </b-list-group-item>
    </transition-group>
  </div>
</template>

<script>
export default {
  props: ['propsdata'],

  methods: {
    removeTodo(todoItem, index) {
      this.$emit('removeItem', todoItem, index)
    },

    toggleComplete(todoItem, index) {
      this.$emit('toggleItem', todoItem, index)
    },
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

  .list-enter-active, .list-leave-active {
    transition: all 1s;
  }

  .list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
    opacity: 0;
    transform: translateY(30px);
  }

  /*  리스트 아이템 트랜지션 */
</style>