import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as mutations from './mutations'

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
  getters,
  mutations,
  actions: {
  },
  modules: {
  }
})
