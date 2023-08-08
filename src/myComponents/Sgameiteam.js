import React from 'react'

export const Sgameiteam = ({player,handleAddScore,index}) => {
    console.log(index);
  return (
    <>
    <div className="row">
            <div className="col">
                <input className="form-control" type="text" value={player.name} aria-label="Disabled input example" disabled />
            </div>
            <div className="col">
            <button onClick={() => handleAddScore(index)} type="button" className="btn btn-primary">Add Value 1</button>
            </div>
    </div>
        <br/>
        <br/>
        <div className="row">
            <div className="col">
                <input className="form-control" type="text" value={"Score of "+player.name} aria-label="Disabled input example" disabled />
            </div>
            <div className="col">
                <input type="number" value={player.score} className="form-control" placeholder="Player 1 Score" aria-label="Player 1 Score" disabled />
            </div>
    </div>
    <br/>
        <br/>
    </>
  )
}
