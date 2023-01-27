import React, { useState } from 'react';
import './App.css';
import MatchList from './components/MatchList/MatchList';
import Results from './components/Results/Results';
import {matchList, MatchType} from './data'



function App() {
  const [matches, setMatches] = useState(matchList);

  const updateMatcheList = (match: MatchType) => {
    const newState = matches.map(obj =>
      obj.homeTeam === match.homeTeam ? { ...obj, homeScore: match.homeScore, awayScore: match.awayScore, isStarted: true, isFinished: true } : obj)
      setMatches(newState);
  }

  return (
    <div className="App">
      <h1>Football World Cup live score board</h1>
      <MatchList matchList={matches} updateFunction={updateMatcheList}/>
      <Results matchList={matches} />
    </div>
  );
}

export default App;
