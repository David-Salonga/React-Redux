import React from 'react'
import { selectDoneList} from '../reducers/todosSlice';
import { useSelector } from 'react-redux';
import ToDoItem from './ToDoItem';


function DoneList() {

    const todoDone =  useSelector(selectDoneList);
    
    return (
        <div>
        <div className="card marginLeft marginRight marginTop">
        <h5 className="card-header head">Done List</h5>
        <div className="card-body">
            {
                todoDone.map((doneTodo) => (
                    <ToDoItem key={doneTodo.id} id={doneTodo.id}/>
                )) 
            }
        </div>
        </div>
        </div>
    )
}

export default DoneList
