import React from 'react';
import ToDoItem from './ToDoItem';
import {initialTodoList} from "../../common/constants/constant";
import {getAllTodoIds} from "../../common/utils/utils";
import { selectTodosId } from '../reducers/todosSlice';
import { useSelector } from "react-redux";

 

function TodoGroup() {
    const todoIds = useSelector(selectTodosId);

    return (
        <div>
            {todoIds.map((id) => (
                <ToDoItem key={id} id={id}/>    
            ))}
           
        </div>
    )
}

export default TodoGroup;
