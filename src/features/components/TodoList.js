import React from 'react'
import { getTodos } from '../api/todos'
import TodoForm from './TodoForm'
import TodoGroup from './TodoGroup'
import { useEffect } from 'react'
import {useDispatch} from 'react-redux';
import { AddTodos } from '../reducers/todosSlice';

function TodoList() {

    const dispatch = useDispatch();

    useEffect(() => {
       getTodos().then((response) => {
           dispatch(AddTodos(response.data));
       })
    }, [dispatch])

    return (
       
        <div className="card marginLeft marginRight marginTop">
        <h5 className="card-header head">Todo List</h5>
        <div className="card-body">
        <TodoGroup/>
        <TodoForm/>
        </div>
        </div>
    )
}

export default TodoList
