import './Player.css';

function Player(props) {
  return (
    <div className="Player">
      <header>
        <div className='PlayerRect'>
            <label className='SLabels' id="Title">Player {props.playerID}</label>
            <label className='SLabels'>Name
                <label className='VLabels'>{props.playerName}</label>
            </label>
            <label id='NOLabel' className='SLabels'>Number of times played:
                    <label className='VLabels'>{props.playerCounter}</label>
                </label>
            <div className='ButtonDiv' >
              <button id={props.ID} className='PlayButton' onClick={props.onButtonClick}>{props.text}</button>
            </div>
        </div>
      </header>
      <body>

      </body>
    </div>
  );
}

export default Player;
