import React from 'react';
import {initialTodoList} from "../../common/constants/constant";
import {getTodoById} from "../../common/utils/utils";
import { selectTodoById } from '../reducers/todosSlice';
import { useSelector } from "react-redux";
function ToDoItem(props) {

    const { id } = props;
    const todo = useSelector((state) => selectTodoById(state, id));

    return (
        <div class="alert alert-danger">
            {todo.text} 
            <button type="button" class="btn btn-link-danger btnRight btn-sm" data-dismiss="alert" aria-label="Close" al>
            <span aria-hidden="true">&times;</span>
        </button>
        </div>


        
    )
}

export default ToDoItem;
