import React, { useState } from 'react'
import "../../styles/style.css";
import {AddToDo} from "../reducers/todosSlice";
import {useDispatch} from 'react-redux';

function TodoForm() {

    const [text, setText] = useState("");
    const dispatch = useDispatch();

    function handlerChange(event){
        setText(event.target.value);
    }

    function handlerAdd(){
        dispatch(AddToDo(text));
        setText("");
    }

    return (
        <div className="todoForm">
            <input type="text" placeholder="Add Todo Item" value={text} onChange={handlerChange}/>
            <button onClick={handlerAdd} className="btn">Add</button>
        </div>
    )
}

export default TodoForm
