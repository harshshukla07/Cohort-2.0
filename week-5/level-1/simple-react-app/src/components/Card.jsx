import React from 'react'

export default function Card(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.description}</p>
      <h2>Interests</h2>
      <ul>{props.interests.map((interest)=>{
        return <li>{interest}</li>
      })}</ul>

    </div>
  )
}
