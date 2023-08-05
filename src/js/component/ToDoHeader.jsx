import React, { useState } from "react";



const ToDoHeader = ({toDos, setToDos, inputNewTask, setInputNewTask, idCounter, setIdCounter}) => { 

    function handleInput() {
        const task = {
            id: idCounter,
            taskName: inputNewTask,
        };
        setToDos([...toDos, task]);
        setIdCounter(x => x + 1)
        setInputNewTask("")
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
