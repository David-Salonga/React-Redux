import React from 'react'
import TodoForm from './TodoForm'
import TodoGroup from './TodoGroup'

function TodoList() {
    return (
       
        <div class="card marginLeft marginRight marginTop">
        <h5 class="card-header">Todo List</h5>
        <div class="card-body">
        <TodoGroup/>
        <TodoForm/>
        </div>
        </div>
    )
}

export default TodoList
