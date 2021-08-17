import React from 'react';
import {initialTodoList} from "../../common/constants/constant";
import {getTodoById} from "../../common/utils/utils";
import { selectTodoById } from '../reducers/todosSlice';
import { useSelector } from "react-redux";
function ToDoItem(props) {

    const { id } = props;
    const todo = useSelector((state) => selectTodoById(state, id));

    return (
        <div>
            {todo.text}
        </div>
    )
}

export default ToDoItem;
