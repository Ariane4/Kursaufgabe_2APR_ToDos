import React from 'react';
import ToDoItemStyle from './ToDoItemStyle.css'

const ToDoItem = (props) => {
    return (
        <div className="ToDoItem">
            <input type="checkbox" checked={props.completed}></input>
            <p>{props.toDo}</p>
        </div>
    )
}

export default ToDoItem