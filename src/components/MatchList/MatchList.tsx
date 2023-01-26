import React from 'react'
import { MatchType } from '../../data'
import Match from '../Match/Match'

type Props = {
    matchList: MatchType[],
    updateFunction: (match:MatchType) => void
}

function MatchList({matchList, updateFunction}: Props) {
    return (
        <>
            {
                matchList.map(matchObj => {
                    return <Match 
                            match={matchObj}
                            key={matchObj.homeTeam}
                            updateFunction={updateFunction}/>
                })
            }
        </>
    )
}

export default MatchList