import React from 'react'
import { initialToDoList } from "../../common/constants/constant"

function ToDoItem() {

    const todo = getToDoById(initialToDoList, props.id)

    return (
        <div>
            {todo.text}
        </div>
    )
}

export default ToDoItem;
