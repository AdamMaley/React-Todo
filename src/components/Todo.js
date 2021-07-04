import React from 'react';
import "./Todo.css";

const Todo = props => {

    return (
        <div 
        onClick={e => props.toggleCompleted(props.item.id)}
        className={`todo${props.item.completed ? " completed" : ""}`}>
            <p>{props.item.name}</p>
        </div>
    )
}

export default Todo; 