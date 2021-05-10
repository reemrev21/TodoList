<template>
  <div class="top shawdow">
    <b-input-group size="mg" class=" shadow-sm bg-white rounded">
      <!-- item 추가 input box -->
      <b-form-input type="text" placeholder="Add todo" 
        v-model="newTodoItem" v-on:keyup.enter="addTodo">
      </b-form-input>
      <!-- item 추가 button -->
      <b-input-group-prepend class="addContainer" is-text v-on:click="addTodo">
        <b-icon icon="plus"></b-icon>
      </b-input-group-prepend>
    </b-input-group>

    <!-- Modal -->
    <Modal v-if="showModal" @close="showModal = false">
      <h3 slot="header"> 
        <b-icon icon="x" class="closeModalBtn" @click="showModal = false">
          닫기
        </b-icon>
      </h3>
      <h5 slot="body"> 할 일을 입력하세요! </h5>
    </Modal>
  </div>
</template>

<script>
import Modal from './common/Modal'

export default {
  data() {
    return {
      newTodoItem: "",
      showModal: false
    }
  },

  components: {
    Modal
  },

  methods: {
    addTodo() {
      if(this.newTodoItem !== '') { 
        this.$store.commit('addOneItem', this.newTodoItem)
        this.clearInput();
      }
      else {
        // this.showModal = true;
        this.showModal = !this.showModal;
      }
    },
    
    clearInput() {
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
    background: white;
    line-height: 50px;
    border-radius: 5px;
    text-align: center;
  }

  .inputBox input{
    border-style: none;
  }

  .addContainer{
    cursor: pointer;
  }

  .addBtn{
    color: white;
    vertical-align: middle;
  }

  .top{
    margin-bottom: 5px;
  }

  .closeModalBtn{
    color : #000;
  }
</style>