import React, { useRef, useState } from 'react'
import { MatchType } from '../../data'


type Props = {
    match: MatchType
}

function Match({match}: Props) {

    const [status, setStatus] = useState(match.isStarted);
    const [homeScore, setHomeScore] = useState(match.homeScore)
    const [awayScore, setAwayScore] = useState(match.awayScore)
    const homeScoreRef = useRef<HTMLInputElement>(null);
    const awayScoreRef = useRef<HTMLInputElement>(null);

    const startGame = () => {
        setStatus(true);
    }


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
                    <button>Update score</button>
                    <button>Finish game</button>
                </div>}
    </div>
    )
}

export default Match