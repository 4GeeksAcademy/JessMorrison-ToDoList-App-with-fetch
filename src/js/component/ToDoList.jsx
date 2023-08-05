import React, { useState } from "react";
import ToDoHeader from "./ToDoHeader";
import ToDoBody from "./ToDoBody";
import ToDoFooter from "./ToDoFooter";

const ToDoList = () => {

    const [toDos, setToDos] = useState ([]);
	const [inputNewTask, setInputNewTask] = useState ("");
	const [idCounter, setIdCounter] = useState (0);

	return (
		<>
			<>
				<ToDoHeader 
				toDos={toDos}
				setToDos={setToDos}
				inputNewTask={inputNewTask}
				setInputNewTask={setInputNewTask}
				idCounter={idCounter}
				setIdCounter={setIdCounter}
				/>
				<ToDoBody 
				toDos={toDos}
				setToDos={setToDos}
				/>
				<ToDoFooter 
				toDos={toDos}
				/>
			</>
		</>
	);
};

export default ToDoList;

