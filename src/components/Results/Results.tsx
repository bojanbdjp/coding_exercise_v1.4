import React, { useState } from 'react'
import { MatchType } from '../../data'

type Props = {
    matchList: MatchType[],
}

function Results({matchList}: Props) {

    const [sortedResults, setSortedResults] = useState([] as MatchType[]);
    const [isResultsListShown, setIsResultsListShown] = useState(false);


    const showResults = () => {
        let sorted = matchList.filter(match => match.isFinished === true).sort((a: MatchType, b: MatchType) => {
            return (b.homeScore + b.awayScore) - (a.homeScore + a.awayScore)
        })
        setIsResultsListShown(true)
        setSortedResults(sorted)
    }

    const sortedResultsList = sortedResults.map(result => {
        return <li key={result.homeTeam}>{result.homeTeam} {result.homeScore} - {result.awayTeam} {result.awayScore}</li>
    })

    return (
        <div>
            <button onClick={showResults}>Show results</button>
            <ol>
                {isResultsListShown && sortedResultsList}
            </ol>
        </div>

    )
}

export default Results