import React, {useState} from 'react';
import './GameAdmin.css';
import Player from './Player.js';

function GameAdmin(props) {
  const [name1, setName1] = useState(props.initialName1);
  const [name2, setName2] = useState(props.initialName2);
  const [counter1, setCounter1] = useState(props.initialCounter1);
  const [counter2, setCounter2] = useState(props.initialCounter2);
  const [playerInGame, setPlayerInGame] = useState(0)
  function onTextInputUpdate1(e)
  {
    setName1(e.target.value);
  }
  
  function onTextInputUpdate2(e)
  {
    setName2(e.target.value);
  }

  function onButtonClick(e)
  {
    if(e.target.id == 1 && playerInGame != 1)
    {
      setPlayerInGame(1);
      setCounter1(parseInt(counter1 + 1));
    }
    else if(e.target.id == 2 && playerInGame != 2)
    {
      setPlayerInGame(2);
      setCounter2(parseInt(counter2 + 1));
    }
  }

  return (
    
    <div className="GameAdmin">
      <header>
        <Player playerID="One" playerName={name1} playerCounter={counter1} onButtonClick={onButtonClick} ID="1" text={playerInGame == 1 ? "This user Is playing now" : "Play"}/>
        <Player playerID="Two" playerName={name2} playerCounter={counter2} onButtonClick={onButtonClick} ID="2" text={playerInGame == 2 ? "This user Is playing now" : "Play"}/>
        <hr className="SeparatingLine"/>
        <div className="TextInputDiv">
          <label className='setLabels'>Set Name of Player One</label>
          <input type="text" onChange={(e) => onTextInputUpdate1(e)} inputDisabled="false" className="TextInput" placeholder="Write name here"/>
        </div>
        <div className="TextInputDiv">
          <label className='setLabels'>Set Name of Player Two</label>
          <input type="text" onChange={onTextInputUpdate2} className="TextInput" placeholder="Write name here"/>
        </div>
      </header>
      <body>

      </body>
    </div>
  );
}


export default GameAdmin;
