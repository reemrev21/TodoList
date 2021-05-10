import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const storage = {
  fetch() {
    // 기존에 this.todoItems를 사용했는데 블럭 문제로 접근이 안되니까
    // arr 배열 만들어서 push 해준다.
    const arr = []
    if(localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        if(localStorage.key(i) !== 'loglevel:webpack-dev-server') {
          arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
        }
      }
    }
    return arr;
  },
}

export default new Vuex.Store({
  state: {
    todoItems: storage.fetch()
  },
  mutations: {
    addOneItem(state, todoItem) {
      const obj = {completed: false, item: todoItem};
      localStorage.setItem(todoItem, JSON.stringify(obj));
      state.todoItems.push(obj);
    },

    removeOneItem(state, payload) {
      localStorage.removeItem(payload.todoItem.item)
      state.todoItems.splice(payload.index, 1);
    },

    toggleOneItem(state, payload){
      // 로컬 스토리지 데이터 갱신
      state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;
      localStorage.removeItem(payload.todoItem.item);
      localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem))
    },

    clearAllItems(state) {
      localStorage.clear();
      // 배열을 비워주어야 화면에 갱신된다.
      state.todoItems = [];
    }
  },
  actions: {
  },
  modules: {
  }
})
