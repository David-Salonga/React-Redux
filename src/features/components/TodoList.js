import React from 'react'
import TodoForm from './TodoForm'
import TodoGroup from './TodoGroup'

function TodoList() {
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
