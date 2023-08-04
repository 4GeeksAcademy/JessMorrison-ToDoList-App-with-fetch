import React, { useState } from "react";


const ToDoFooter = (toDos, setToDos) => {
	return (
		<>
			<div className="toDoFooter">
                <span>{toDos.length == 0 ? "No tasks, add a task" : " tasks left to do"}</span>
            </div>
		</>
	);
};

export default ToDoFooter;