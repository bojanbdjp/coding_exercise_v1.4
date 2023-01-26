import React, { useState } from 'react'
import { MatchType } from '../../data'


type Props = {
    match: MatchType
}

function Match({match}: Props) {

    const [status, setStatus] = useState(match.isStarted);

    return (
        <div>
            <div>
                <p>{match.homeTeam}</p>
                <p>{match.awayTeam}</p>
            </div>
            <div>
                <p>{match.homeScore}</p>
                <p>{match.awayScore}</p>
            </div>

            {status === false 
            ?   <div>
                    <button>Start</button>
                </div> 
            : <></>
            }
    </div>
    )
}

export default Match