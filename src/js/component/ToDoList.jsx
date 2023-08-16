import React, { useState } from "react";
import ToDoHeader from "./ToDoHeader";
import ToDoBody from "./ToDoBody";
import ToDoFooter from "./ToDoFooter";

const ToDoList = () => {

    const [toDos, setToDos] = useState ([]);
	const [inputNewTask, setInputNewTask] = useState ("");
	const [idCounter, setIdCounter] = useState (5);
	const [newList, setNewList] = useState ("");

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
				newList={newList}
				setNewList={setNewList}
				/>
				<ToDoBody 
				toDos={toDos}
				setToDos={setToDos}
				newList={newList}
				setNewList={setNewList}
				/>
				<ToDoFooter 
				toDos={toDos}
				/>
			</>
		</>
	);
};

export default ToDoList;

