import React, { useState } from 'react'
import "../../styles/style.css";
import {AddToDo} from "../reducers/todosSlice";
import {useDispatch} from 'react-redux';


function TodoForm() {

    const [text, setText] = useState('');
    const dispatch = useDispatch();

    function handlerChange(event){
        setText(event.target.value);
    }

    function handlerAdd(){
        dispatch(AddToDo(text));
        setText("");
    }

    return (
        <div className="input-group mb-3 todoForm">
        <input type="text" className="form-control" placeholder="Add To Do Item" value={text} onChange={handlerChange}/>
        <div class="input-group-append">
        <button className="btn btn-outline-success" type="button" onClick={handlerAdd}>Add</button>
        </div>
        </div>
    )
}

export default TodoForm
