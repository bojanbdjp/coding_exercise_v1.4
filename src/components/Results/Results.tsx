import React, { useState } from 'react'
import { MatchType } from '../../data'

type Props = {
    matchList: MatchType[],
}

function Results({matchList}: Props) {

    const [sortedResults, setSortedResults] = useState([] as MatchType[]);
    const [isResultsListShown, setIsResultsListShown] = useState(false);


    const showResults = () => {
        let sorted = matchList.map((match, index) => {return {...match, added: index}});
        sorted = sorted.filter(match => match.isFinished === true).sort((a: MatchType, b: MatchType) => {
            if ((b.homeScore + b.awayScore) === (a.homeScore + a.awayScore) && (a.added !== undefined && b.added !== undefined)) {
                return b.added - a.added;
            }
            return (b.homeScore + b.awayScore) - (a.homeScore + a.awayScore)
        })
        setIsResultsListShown(true)
        setSortedResults(sorted)
    }

    const sortedResultsList = sortedResults.map(result => {
        return <li key={result.homeTeam}>{result.homeTeam} {result.homeScore} - {result.awayTeam} {result.awayScore}</li>
    })

    return (
        <div style={{display:'flex', alignItems:'center', flexDirection:'column'}}>
            <button onClick={showResults}>Show results</button>
            <ol style={{width: '20%'}}>
                {isResultsListShown && sortedResultsList}
            </ol>
        </div>

    )
}

export default Results