import React, { useState } from 'react'
import "../../styles/style.css";
import {AddToDo} from "../reducers/todosSlice";
import {useDispatch} from 'react-redux';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/Button';

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
        // <div className="todoForm">
        //     <input type="text" placeholder="Add Todo Item" value={text} onChange={handlerChange}/>
        //     <button onClick={handlerAdd} className="btn">Add</button>
        // </div>

        <div class="input-group mb-3 todoForm">
        <input type="text" class="form-control" placeholder="Add To Do Item" value={text} onChange={handlerChange}/>
        <div class="input-group-append">
            <button class="btn btn-outline-success" type="button" onClick={handlerAdd}>Add</button>
        </div>
        </div>

        

    )
}

export default TodoForm
