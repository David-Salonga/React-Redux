import React from 'react'
import { getTodos } from '../api/todos'
import TodoForm from './TodoForm'
import TodoGroup from './TodoGroup'
import { useEffect } from 'react'
import {useDispatch} from 'react-redux';
import { AddTodos } from '../reducers/todosSlice';
import "animate.css"

function TodoList() {

    const dispatch = useDispatch();

    useEffect(() => {
       getTodos().then((response) => {
           dispatch(AddTodos(response.data));
       })
    }, [dispatch])

    return (
        <div className="card marginLeft marginRight marginTop text animate__animated animate__fadeIn ">
        <h2 className="card-header head">Todo List</h2>
        <div className="card-body">
        <TodoForm/>
        <TodoGroup/>
        </div>
        </div>
    )
}

export default TodoList
