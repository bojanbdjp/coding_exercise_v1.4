import React from 'react'
import { MatchType } from '../../data'
import Match from '../Match/Match'

type Props = {
    matchList: MatchType[]
}

function MatchList({matchList}: Props) {
    return (
        <>
            {
                matchList.map(matchObj => {
                    return <Match match={matchObj} key={matchObj.homeTeam}/>
                })
            }
        </>
    )
}

export default MatchList