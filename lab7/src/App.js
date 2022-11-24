import logo from './logo.svg';
import './App.css';
import {RecoilRoot} from 'recoil';
import Match from './components/Match.jsx'

export default function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <Match />
      </div>
    </RecoilRoot>
  );
}

