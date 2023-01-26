import React, { useRef, useState } from 'react'
import { MatchType } from '../../data'


type Props = {
    match: MatchType,
    updateFunction: (match:MatchType) => void
}

function Match({match, updateFunction}: Props) {

    const [status, setStatus] = useState(match.isStarted);
    const [homeScore, setHomeScore] = useState(match.homeScore)
    const [awayScore, setAwayScore] = useState(match.awayScore)
    const homeScoreRef = useRef<HTMLInputElement>(null);
    const awayScoreRef = useRef<HTMLInputElement>(null);

    const startGame = () => {
        setStatus(true);
    }

    const updateScore = () => {
        setHomeScore(+homeScoreRef.current!.value)
        setAwayScore(+awayScoreRef.current!.value)
    }

    const finishMatch = () => {
        updateFunction({homeTeam: match.homeTeam, homeScore, awayScore}) 
    }

    if(match.isFinished !== true) {
        return (
            <div>
                <div>
                    <p>{match.homeTeam}</p>
                    <p>{match.awayTeam}</p>
                </div>
                <div>
                    <p>{homeScore}</p>
                    <p>{awayScore}</p>
                </div>

                {status === false 
                ?   <div>
                        <button onClick={startGame}>Start</button>
                    </div> 
                : <div>
                        <input type='number' ref={homeScoreRef} placeholder='home'></input>
                        <input type='number' ref={awayScoreRef} placeholder='away'></input>
                        <button onClick={updateScore}>Update score</button>
                        <button onClick={finishMatch}>Finish game</button>
                    </div>}
        </div>
        )
    } else {
        return <></>
    }    
}

export default Match