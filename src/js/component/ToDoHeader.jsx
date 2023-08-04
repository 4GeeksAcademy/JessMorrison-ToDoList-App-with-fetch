import React, { useState } from "react";
import ToDoList from "./ToDoList";



const ToDoHeader = ({toDos, setToDos, inputNewTask, setInputNewTask}) => {


    function handleInput() {
        const task = {
            id: toDos.length === 0 ? 1 : toDos[toDos.length - 1].id + 1,
            taskName: inputNewTask,
        };
        setToDos([...toDos, task]);
    }
    return (
		<>
			
				<div className="container-todos"></div>
                    <p className="heading">to dos</p>
                    <div className="header-div">
                        <input 
                        type="text" 
                        className="inputToDo" 
                        placeholder="What needs to be done?"
                        onChange={event => setInputNewTask(event.target.value)}
                        value={inputNewTask}
                        onKeyUp={(e) => {
                            if (e.key === "Enter") {handleInput()}

                        }}
                        />
                        <button
                            className="validate"
                            onClick={handleInput}
                        >Add Task</button>
                    </div>
                    
			
		</>
	);
};

export default ToDoHeader;

