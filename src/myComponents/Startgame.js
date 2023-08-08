import React, { useCallback, useMemo, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { Sgameiteam } from './Sgameiteam';

export const Startgame = ({addScore}) => { 
    const location = useLocation();
    const data= location.state || {};
    const player11=data.player1;
    const player22=data.player2;
    const [players,setPlayers] = useState([
        { 
          sno:1,
          name: player11, 
          score: 0 
        },
        { 
            sno:2,
          name: player22, 
           score: 0 
        },
      ]);
    
        const handleAddScore = useCallback((index) => {
            const tmp = [...players];
            tmp[index].score += 1
            setPlayers(tmp)
            
      
       console.log(players[0].score,players[1].score);
        
      },[]);
      const winby=useMemo(function findwinby(){
        return Math.abs(players[0].score-players[1].score);
      },[players[0].score,players[1].score]

      )

      const winner=useMemo(function findwinner(){
        if(players[0].score>players[1].score){
            return players[0].name;
        }
        else if(players[0].score<players[1].score){
            return players[1].name;
        }
        else{
            return "Its a tie";
        }
      },[players[0].score,players[1].score]

      )


   
    const submit= (e)=>{
        e.preventDefault();
        if(players[1].score===0 && players[0].score===0){
            alert("you Didn't played a game");
        }
        const data={
            player1:players[0].name,
            player2:players[1].name,
            winner:winner,
            winBy:winby,
        }
        addScore(data);

    };
  return (
    <div className='container'>
        <p>{}</p>
        <form onSubmit={submit}>
        {players.map((player)=>{
            return <Sgameiteam  player={player} key={player.sno} handleAddScore={handleAddScore} index={players.indexOf(player)}/>
          }
         )}
        <div className="row">
            <div className="col">
                <input className="form-control" type="text" value="Current Winner" aria-label="Disabled input example" disabled readonly />
            </div>
            <div className="col">
                <input type="text" value={winner} className="form-control" placeholder="Game Started" aria-label="Winner" disabled readonly/>
            </div>
        </div>
        <br/>
        <br/>
        <div className="row">
            <div className="col">
                <input className="form-control" type="text" value="with Difference" aria-label="Disabled input example" disabled readonly />
            </div>
            <div className="col">
                <input type="number" value={winby} className="form-control" placeholder="Game started" aria-label="winby" disabled readonly/>
            </div>
        </div>
        <br/>
        <br/>
        
        <button type="submit" className="btn btn-sm btn-success">Submit</button>
        <br/>
        <br/>
        </form>
    </div>
  )
}
