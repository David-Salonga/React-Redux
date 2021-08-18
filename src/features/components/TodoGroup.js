import React from 'react';
import ToDoItem from './ToDoItem';
import { selectTodosId } from '../reducers/todosSlice';
import { useSelector } from "react-redux";

 

function TodoGroup() {
    const todoIds = useSelector(selectTodosId);

    return (
        <div    >
            {todoIds.map((id) => (
                <ToDoItem key={id} id={id}/>    
            ))}
           
        </div>
    )
}

export default TodoGroup;
