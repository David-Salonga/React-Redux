import React from 'react'
import TodoForm from './TodoForm'
import TodoGroup from './TodoGroup'

function TodoList() {
    return (
        <div>
            <h1>Todo List</h1>
            <TodoGroup/>
            <TodoForm/>
        </div>
    )
}

export default TodoList
