import { ADD, DELETE, UPDATE } from "./redux/actionTypes.js";
import { store } from "./redux/task.js";

store.getState().todo.name="dfsdf"

console.log(store.getState().todo)

// store.getState().todo.name="dfsdfgdff"

// console.log(store.getState().todo)


store.dispatch({type:ADD,payload:store.getState().name="dfsdf"})
console.log(store.getState())

store.dispatch({type:UPDATE,payload:store.getState().name="dfsdf"})

console.log(store.getState())

store.dispatch({type:DELETE,payload:store.getState().name="dfsdf"})

console.log(store.getState())