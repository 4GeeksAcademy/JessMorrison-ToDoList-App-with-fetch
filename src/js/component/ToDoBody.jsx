import React, { useEffect, useState } from "react";

const ToDoBody = ({toDos, setToDos}) => {

	let renderTasks = toDos.map((task, index) => {
		return (
			<div className="tasks" key={index}>
				<li className="list-items">{task.label}{" "}</li>
					<button className="delete-task" onClick={() => deleteTask(index)}>
						<i button className="fas fa-trash"></i>
					</button>
			</div>
		)
	})
	const deleteTask = (id) => {
		const newToDos = toDos.filter((task, index) => index !== id);
		fetch("https://playground.4geeks.com/apis/fake/todos/user/jessmor2", {
                method: "PUT",
                body: JSON.stringify(newToDos),
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            .then( response => {
                if(!response.ok) throw Error(res.statusText)
                return response.json();
            })
            .then(response => {
                console.log("Success", response)
                setToDos(newToDos);
            })
            .catch(error => console.log(error))
	}

	useEffect(() => {
		fetch("https://playground.4geeks.com/apis/fake/todos/user/jessmor2")
		.then(response => response.json())
		.then(data => setToDos(data))
	}, [])
	return (
		<>
			<div className="toDoBody">
                <ul className="tasks-listed">
                    {renderTasks}
                </ul>	
            </div>
		</>
	);
};
export default ToDoBody;