import React from 'react'

export default function CreateTodo() {
  return (
    <div>
      <input style={{
        padding: 10,
        margin:10
      }} type="text" placeholder='Title'></input>
      <input style={{
        padding: 10,
        margin:10
      }} type="text" placeholder='Description'></input>
      <button>Add Todo</button>
      
    </div>
  )
}
