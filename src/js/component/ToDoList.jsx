import React, { useState } from "react";
import PropTypes from "prop-types";
import ToDoHeader from "./ToDoHeader";
import ToDoBody from "./ToDoBody";
import ToDoFooter from "./ToDoFooter"; 

const ToDoList = () => {

    const [toDos, setToDos] = useState ([]);
	const [inputNewTask, setInputNewTask] = useState ("");

	return (
		<>
			<>
				<ToDoHeader 
				toDos={toDos}
				setToDos={setToDos}
				inputNewTask={inputNewTask}
				setInputNewTask={setInputNewTask}
				/>
				<ToDoBody 
				toDos={toDos}
				setToDos={setToDos}
				/>
			</>
		</>
	);
};

export default ToDoList;

