import './App.css';
import Header from './myComponents/Header';
import {Footer} from './myComponents/Footer';
import React, { useCallback, useState } from 'react';
import { Playerform } from './myComponents/Playerform';
import {Score} from './myComponents/Score';
import {Startgame} from './myComponents/Startgame';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";

function App() {
  const onDelete = (todo)=>{
    console.log("I'm Delete",todo);
    setscoreCard(scoreCard.filter((e)=>{
      return e!==todo;
    }

    ))
    
  }
  const addScore =(card)=>{
    const sno=scoreCard[scoreCard.length-1].sno+1;
    const myscore={
      sno:sno,
      player1:card.player1,
      player2:card.player2,
      winner:card.winner,
      winBy:card.winBy,

    }
    setscoreCard([...scoreCard,myscore])
    console.log("i m adding title and desc",myscore)
  }
  

  const [scoreCard, setscoreCard] = useState([
    {
      sno:1,
      player1:"ram",
      player2:"shyam",
      winner:"ram",
      winBy:4
    },
    {
      sno:2,
      player1:"ram2",
      player2:"shyam2",
      winner:"ram2",
      winBy:5
    },
    
  ]);
  return (
    <>
     <BrowserRouter>
      <Header  title="Counter Game"/>
      <Routes>
          <Route path="/pscore" element={<Score scoreCard={scoreCard} onDelete={onDelete}/>} />
          <Route path="/" element={<Playerform />}/>
          <Route path="/sgame" element={<Startgame addScore={addScore}/>}/>
      </Routes>

      </BrowserRouter>

      
     
      
    </>
  );
}

export default App;
