import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';


const ToDoLists = (props) => {

        
    return (
        <>
        <div className="todo-style">
        <FontAwesomeIcon className="fa fa-times" icon={faCircleXmark} onClick={()=>{
            props.onSelect(props.id);
        }} />
            <li>{props.text}</li>
        </div>
        </>
    );

}

export default ToDoLists;