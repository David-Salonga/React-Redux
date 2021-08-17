import { createSlice } from "@reduxjs/toolkit";
import { createEntityAdapter } from "@reduxjs/toolkit";
import {v4 as uuid } from "uuid";

const todoAdapter = createEntityAdapter();
const initialState = todoAdapter.getInitialState({
    ids: ["1"],
    entities: {
        1: {
            id: "1",
            text: "todo example 1",
            done: false,
        },
    },
});

const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers:{
        AddToDo(state, action){
            todoAdapter.addOne(state, {
                id: uuid(),
                text: action.payload,
                done: false,
                
            });
        },
        
    },
});

export const {AddToDo} = todoSlice.actions;

export const { selectIds: selectTodosId, selectById: selectTodoById } = todoAdapter.getSelectors((state) => state.todoList);

export default todoSlice.reducer;