import React, { useState } from 'react';
import './App.css';
import MatchList from './components/MatchList/MatchList';
import {matchList} from './data'



function App() {
  const [matches, setMatches] = useState(matchList);

  return (
    <div className="App">
      <h1>Football World Cup live score board</h1>
      <MatchList matchList={matches}/>
    </div>
  );
}

export default App;
