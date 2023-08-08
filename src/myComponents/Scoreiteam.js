import React from 'react'

export const Scoreiteam = ({todo,onDelete}) => {
  return (
    <>
      <tr>
      <th scope="row">{todo.sno}</th>
      <td>{todo.player1}</td>
      <td>{todo.player2}</td>
      <td>{todo.winner}</td>
      <td>{todo.winBy}</td>
      <td><button className="btn btn-sm btn-danger" onClick={()=>{onDelete(todo)}}>Delete</button></td>
    </tr>
      
    
      

    </>
  )
}
