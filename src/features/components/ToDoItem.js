import React from 'react';
import { selectTodoById, ToggleToDo, DeleteToDo} from '../reducers/todosSlice';
import { useSelector } from "react-redux";
import {useDispatch} from 'react-redux';
function ToDoItem(props) {


    const todo = useSelector((state) => selectTodoById(state, props.id));
    const dispatch = useDispatch();

    function handleClick(){
        dispatch(ToggleToDo(props.id));
    }

    function deleteClick(event){
        event.stopPropagation();
        dispatch(DeleteToDo(props.id));
    }

    const todoStatus = todo.done ? "done" : "";
    return (

        <div className={`alert alert-danger ${todoStatus}`} onClick={handleClick}>
            {todo.text} 
            <button type="button" className="btn btn-link-danger btnRight btn-sm" onClick={deleteClick}>
            <span aria-hidden="true">&times;</span>
            </button>          
        </div>
    )
}

export default ToDoItem;
