import CreateTodo from "./components/CreateTodo"
import Todos from "./components/Todos"
import React, { useState, useEffect } from 'react'

function App() {

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/todos')
    .then(async(res)=>{
      const json = await res.json();
      setTodos(json.todos);
      console.log(json);
    })
  }, [])
  
  
  return (
    <>
    <h1>My Todo App</h1>
    <CreateTodo />
    <Todos todos={todos}/>
    </>
  )
}

export default App;
