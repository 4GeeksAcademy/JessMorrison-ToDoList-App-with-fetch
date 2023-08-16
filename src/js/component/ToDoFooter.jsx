import React, { useState } from "react";



const ToDoFooter = ({toDos, setToDos}) => {

    return (
        <>
            <div className="toDoFooter">
                <span>{toDos.length == 0 ? "No current tasks, add a task above" : toDos.length == 1 ? `${toDos.length} task left to complete` : `${toDos.length} tasks left to complete`}</span>
            </div>
        </>
    )

}

export default ToDoFooter;
