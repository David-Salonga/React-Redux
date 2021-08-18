import React from 'react';
import { selectTodoById, ToggleToDo, DeleteToDo} from '../reducers/todosSlice';
import { useSelector } from "react-redux";
import {useDispatch} from 'react-redux';
import { updateTodo } from '../api/todos';
function ToDoItem(props) {


    const todo = useSelector((state) => selectTodoById(state, props.id));
    const dispatch = useDispatch();

    function handleClick(){
        updateTodo(props.id, {done: !todo.done}).then((response) => {
            // console.log(response.data);  
            dispatch(ToggleToDo(props.id, response.data));
        },)
       
    }

    function deleteClick(event){
        event.stopPropagation();
        dispatch(DeleteToDo(props.id));
    }

    const todoStatus = todo.done ? "done" : "";
    return (

        <div className={`alert alert-light ${todoStatus} text `} onClick={handleClick}>
            <h5 className="animate__bounceIn">{todo.id}.) {todo.text} 
            <button type="button" className="btn btn-link-danger btnRight btnRight" onClick={deleteClick}>
            <span aria-hidden="true"><i className="bi bi-trash2"></i></span>
            </button>
            </h5>
            <hr/>
        </div>
    )
}

export default ToDoItem;
