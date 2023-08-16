import React, { useState } from "react";



const ToDoHeader = ({toDos, setToDos, inputNewTask, setInputNewTask, idCounter, setIdCounter, newList, setNewList}) => { 

    function handleInput() {
        let myToDos = [...toDos]
        const task = {
            done: false,
            label: inputNewTask,
        };
        myToDos.push(task)
        fetch("https://playground.4geeks.com/apis/fake/todos/user/jessmor2", {
                method: "PUT",
                body: JSON.stringify(myToDos),
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
                setToDos([...toDos, task]);
            })
            .catch(error => console.log(error))
        // setToDos([...toDos, task]);
        setInputNewTask("")
        // assignNewTask()
    }

    function assignNewTask(toDos) {
            fetch("https://playground.4geeks.com/apis/fake/todos/user/jessmor2", {
                method: "PUT",
                body: JSON.stringify(toDos),
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
            })
            .catch(error => console.log(error))}

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


// function assignNewTask(toDos) {
//     fetch("https://playground.4geeks.com/apis/fake/todos/user/jessmor2", {
//         method: "PUT",
//         body: JSON.stringify(toDos),
//         headers: {
//             'Content-Type': 'application/json',
//         }
//     })
//     .then( response => {
//         if(!response.ok) throw Error(res.statusText)
//         return response.json();
//     })
//     .then(response => {
//         console.log("Success", response)
//     })
//     .catch(error => console.log(error))
// }
