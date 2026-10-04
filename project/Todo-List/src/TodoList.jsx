import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
export default function TodoList(){
    let[todos,setTodos]=useState([{task:"Sample Task" ,id:uuidv4()}]);
    let[newTodo,setNewTodo]=useState("");

    let addnewTask=()=>{
        setTodos([...todos,{task:"newTodo" ,id:uuidv4()}])
    }
    let updateTodoValue=(event)=>{
        setNewTodo(event.target.value);
    }
    return (
        <div>
            <input placeholder="Add a Task" value={newTodo} onChange={updateTodoValue}></input>
            <button onClick={addnewTask}>Add Task</button>
            <hr />
            <br /><br /><br />

            <h4>Todo List</h4>
            <ul>
                {
                    todos.map((todo)=>(
                        <li key={todo.id}>{todo.task}</li> 
                    ))
                }
            </ul>
        </div>
    );
}