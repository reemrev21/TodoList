<template>
  <div>
    <transition-group name="list" tag="b-list-group">
      <b-list-group-item v-for="todoItem, index in this.$store.state.todoItems" v-bind:key="todoItem.item" class="d-flex justify-content-between shadow-sm p-2 mb-1 bg-white rounded">
        <span>
          <b-icon icon="square" v-if="!todoItem.completed" scale="1" class="checkBtn" 
            v-bind:class="{getCheck: todoItem.completed}" 
            v-on:click="toggleComplete(todoItem, index)">
          </b-icon>
          <b-icon icon="check-square-fill" v-if="todoItem.completed" scale="1" class="checkBtn" 
            v-bind:class="{getCheck: todoItem.completed}" 
            v-on:click="toggleComplete(todoItem, index)">
          </b-icon>
        </span> 
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
  methods: {
    removeTodo(todoItem, index) {
      this.$store.commit('removeOneItem', { todoItem, index })
      // store를 사용하기 위해서는 todoitem, index를 객체로 변환해야함
      // this.$store.commit('removeOneItem', todoItem, index)
    },

    toggleComplete(todoItem, index) {
      this.$store.commit('toggleOneItem', { todoItem, index })
    },
  },
}
</script>

<style scoped>
  .removeBtn {
    margin-left: auto;
    color: #de4343;
    cursor: pointer;
  }

  .checkBtn {
    line-height: 45px;
    color: #999;
    /* margin-right: 5px; */
    cursor: pointer;
    float: center;
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
    /* padding-bottom: 20px; */
  }

 /*  리스트 아이템 트랜지션 */
  .list-enter-active, .list-leave-active {
    transition: all 1s;
  }

  .list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
    opacity: 0;
    transform: translateY(30px);
  }

 
</style>