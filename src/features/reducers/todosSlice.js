import { createSlice } from "@reduxjs/toolkit";
import { createEntityAdapter } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

const todoAdapter = createEntityAdapter();
const initialState = todoAdapter.getInitialState();

const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers:{
        AddToDo(state, action){
            todoAdapter.addOne(state, action.payload);
        },
        ToggleToDo(state, action){
            const todo = state.entities[action.payload]
            todo.done = !todo.done
        },
        DeleteToDo(state, action){
           todoAdapter.removeOne(state, action.payload);
        },
        AddTodos(state, action){
            todoAdapter.addMany(state, action.payload);
        },
        EditTodo(state, action){
            todoAdapter.updateOne(state, {
                id: action.payload.id,
                changes: action.payload.updateTodo,
            })
            return state;
        },
    },  
});



export const {AddToDo, ToggleToDo, DeleteToDo, AddTodos, EditTodo} = todoSlice.actions;

export const { 
    selectAll: selectToTodos,
    selectIds: selectTodosId, 
    selectById: selectTodoById, 
} = todoAdapter.getSelectors((state) => state.todoList);

export const selectDoneList = createSelector([selectToTodos], (todos) => todos.filter(todo => todo.done))




export default todoSlice.reducer;