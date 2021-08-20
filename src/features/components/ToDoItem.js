import React from 'react';
import { selectTodoById, ToggleToDo, DeleteToDo, EditTodo} from '../reducers/todosSlice';
import { useSelector } from "react-redux";
import {useDispatch} from 'react-redux';

import { updateTodo, deleteTodo, editTodo } from '../api/todos';
import "bootstrap/dist/css/bootstrap.css";
import { useState } from 'react';
import {Button, Modal, Form, InputGroup } from 'react-bootstrap'


function ToDoItem(props) {

    const [text, setText] = useState('');
    const todo = useSelector((state) => selectTodoById(state, props.id));
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);

    const handleClosed = () => {
        setShow(false);
    }

    const handleClose = () => {

        updateTodo(props.id, {text: text, done: todo.done}).then((response) => {
            dispatch(updateTodo(props.id, response.data));
        },)
        setShow(false);
    }
    
    const handleShow = () => setShow(true);


    function handleClick(){
        updateTodo(props.id, {text: todo.text, done: !todo.done}).then((response) => { 
            dispatch(ToggleToDo(props.id, response.data));
        },)
    }

    function deleteClick(event){
        event.stopPropagation();
        deleteTodo(props.id).then((response) => {
            // console.log(props.id,response.data);  
            dispatch(DeleteToDo(props.id, response.data));
        },)
    }   

    function handleChange(event) {
        setText(event.target.value);
    }

    

    const todoStatus = todo.done ? "done" : "";
    return (
        <div className={`alert alert-light ${todoStatus} text `} >

            <div className="row">
                <div className="col">
                    <h5 className="animate__animated animate__bounceIn animate__delay-0.5s" onClick={handleClick}>{todo.id}.) {todo.text}</h5>
                 </div>
                <div className="col">
                    <h5>
                        <button type="button" className="btn btn-link-danger btnRight" onClick={deleteClick}>
                            <span aria-hidden="true"><i className="bi bi-trash2"></i></span>
                        </button>
                        <button type="button" className={`btn btn-link-danger btnRight ${todoStatus} hideBtn text`} onClick={handleShow}>
                            <span><i className="bi bi-pencil"></i></span>
                        </button>
                    </h5>
                </div>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                         <Modal.Title>Editing Todo#{todo.id}</Modal.Title>
                    </Modal.Header>
                            <Modal.Body>
                                <Form.Control as="textarea" id="text-area" placeholder={todo.text} onChange={handleChange} />
                            </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClosed}>Close</Button>
                        <Button variant="primary" onClick={handleClose}>Save Changes</Button>
                    </Modal.Footer>
                 </Modal>

            </div>
            <hr className="animate__animated animate__bounceIn animate__delay-0.5s"/>
        </div>
    )
}

export default ToDoItem;
