import React from 'react';
import ToDoItem from './ToDoItem';
import ToDoData from './ToDoData';

const ToDos = () => {
    const ToDoLoop = ToDoData.map((element, i) => <ToDoItem key={i}
        checkbox={element.checkbox}
        toDo={element.toDo}
    />)
    return (
        <div className="ToDos">{ToDoLoop}</div>
    )
}


export default ToDos