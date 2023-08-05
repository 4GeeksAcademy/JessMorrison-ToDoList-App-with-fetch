import React, { useState } from "react";

const ToDoBody = ({toDos, setToDos}) => {

	const deleteTask = (id) => {
		const newToDos = toDos.filter((task) => task.id !== id);
		
		setToDos(newToDos);
	}

	return (
		<>
			<div className="toDoBody">
                <ul className="tasks-listed">
                    {toDos.map((task) => {
						return ( 
						<>
							<div className="tasks">
								<li className="list-items">{task.taskName}{" "}</li>
								<button className="delete-task" onClick={() => deleteTask(task.id)}>
									<i button className="fas fa-trash"></i>
								</button>
							</div>
						</>
						
						);
					
                })}
                </ul>
            </div>
		</>
	);
	
};
export default ToDoBody;