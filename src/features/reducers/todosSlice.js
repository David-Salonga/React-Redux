import { createSlice } from "@reduxjs/toolkit";
import { createEntityAdapter } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

const todoAdapter = createEntityAdapter();
const initialState = todoAdapter.getInitialState({
    ids: ["1"],
    entities: {
        1: {
            id: "1",
            text: "Finish Homework",
            done: false,
        },
    },
});

const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers:{
        AddToDo(state, action){
            todoAdapter.addOne(state, action.payload);
        },
        ToggleToDo(state, action){
            const todo = state.entities[action.payload]
            todo.done = !todo.done;
        },
        DeleteToDo(state, action){
           todoAdapter.removeOne(state, action.payload);
        },
        AddTodos(state, action){
            todoAdapter.addMany(state, action.payload);
         },
    },
});



export const {AddToDo, ToggleToDo, DeleteToDo, AddTodos} = todoSlice.actions;

export const { 
    selectAll: selectToTodos,
    selectIds: selectTodosId, 
    selectById: selectTodoById, 
} = todoAdapter.getSelectors((state) => state.todoList);

export const selectDoneList = createSelector([selectToTodos], (todos) => todos.filter(todo => todo.done) )


export default todoSlice.reducer;