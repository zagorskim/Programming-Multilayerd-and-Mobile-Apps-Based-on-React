import './App.css';
import GameAdmin from './GameAdmin.js';

function App() {
  return (
    <div className="App">
      <header>
        <GameAdmin numberOfPlayers = {2} initialName1="name1" initialName2="name2" initialCounter1="0" initialCounter2="0"/>
      </header>
      <body>

      </body>
    </div>
  );
}

export default App;
