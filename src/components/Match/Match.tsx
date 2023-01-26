import React from 'react'
import { MatchType } from '../../data'


type Props = {
    match: MatchType
}

function Match({match}: Props) {
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
    </div>
    )
}

export default Match