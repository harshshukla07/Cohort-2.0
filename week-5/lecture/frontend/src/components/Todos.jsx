import React from 'react'

export default function Todos({todos}) {
  return (
    <div>
      {todos.map((todo)=>{
        return (<div key={todo._id}>
            <h1>{todo.title}</h1>
            <h2>{todo.description}</h2>
            <button>{todo.completed == true ? "Completed" : "Mark as Complete"}</button>
        </div>)
      })}
    </div>
  )
}
