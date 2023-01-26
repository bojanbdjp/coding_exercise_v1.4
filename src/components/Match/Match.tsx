import React from 'react'
import { MatchType } from '../../data'


type Props = {
    match: MatchType
}

function Match({match}: Props) {
    return (
        <div>
            <p>{match.homeTeam}</p>
            <p>{match.awayTeam}</p>
    </div>
    )
}

export default Match