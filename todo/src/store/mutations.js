const addOneItem = (state, todoItem) => {
  const obj = {completed: false, item: todoItem};
  localStorage.setItem(todoItem, JSON.stringify(obj));
  state.todoItems.push(obj);
}

const removeOneItem = (state, payload) => {
  localStorage.removeItem(payload.todoItem.item)
  state.todoItems.splice(payload.index, 1);
}

const toggleOneItem = (state, payload) => {
  // 로컬 스토리지 데이터 갱신
  state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;
  localStorage.removeItem(payload.todoItem.item);
  localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem))
}

const clearAllItems = (state) => {
  localStorage.clear();
  // 배열을 비워주어야 화면에 갱신된다.
  state.todoItems = [];
}

export { addOneItem, removeOneItem, toggleOneItem, clearAllItems }