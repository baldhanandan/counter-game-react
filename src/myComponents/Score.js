import React from 'react'
import { Scoreiteam} from './Scoreiteam'

export const Score = (props) => {
    const myStyle={
        minHeight:"70vh",
        margin:"10px auto"
    }
  return (
    <div className='container my-3' style={myStyle}>
        <h3 className='my-3'>Score Card</h3>
        <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Player 1</th>
                <th scope="col">Player 2</th>
                <th scope="col">Winner</th>
                <th scope="col">Win By</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>

        {props.scoreCard.length===0? "no previous game" : 
         props.scoreCard.map((todo)=>{
            return <Scoreiteam todo={todo} key={todo.sno} onDelete={props.onDelete}/>
          }
         )}
         </tbody>

        
        </table>
    </div>
  )
}
