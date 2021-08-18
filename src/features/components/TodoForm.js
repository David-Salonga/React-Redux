import React, { useState, useEffect } from 'react'
import "../../styles/style.css";
import {AddToDo} from "../reducers/todosSlice";
import {useDispatch} from 'react-redux';
import { createTodo } from '../api/todos';


function TodoForm() {

    const [text, setText] = useState('');
    const dispatch = useDispatch();

    function handlerChange(event){
        setText(event.target.value);
    }

    
    function handlerAdd(){

        createTodo(text).then((response) => {
            dispatch(AddToDo(response.data));
        },)
        setText("");    
    }

    return (
        <div className="input-group mb-3 todoForm text">
        <input type="text" className="form-control" placeholder="Add To Do Item..." value={text} onChange={handlerChange}/>
        <div className="input-group-append">    
        <button className="btn btn-outline-success" type="button" onClick={handlerAdd}><i className="bi bi-pencil"></i></button>
        </div>
        </div>
    )
}

export default TodoForm;
