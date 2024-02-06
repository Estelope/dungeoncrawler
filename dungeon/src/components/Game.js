import React, { useState } from "react";

function Game() {
  // const [health, setHealth] = useState(100);
  // const [interactionScore, setInteractionScore] = useState(0);
  const [inventory, setInventory] = useState([]);
  const [gameStatus, setGamestatus] = useState('menu');
  const [turn, setTurn] = useState(0);
  const [location, setlocation] = useState(null);

  const gameInit = () => {
    setGamestatus('start')
    setTurn(0)
  }

  const handlePlayerEnterCommand = (command) => {
    if (gameStatus == 'start') {
      processTurn(command)
    }
  }
  const processTurn = (command) => {
    // command: verb noun -> DIR, ITEM, -> if a direction: (exits?)  if an item. (in inventory? in room?) -> available actions
    setTurn(turn+1)
  }
  return (
    <>
      {}
    </>
  )



}


// You wake up in a room with one door, a small window and a desk. You see a note on top of the desk.
// Items: Note

