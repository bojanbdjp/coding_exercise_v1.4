export type MatchType = {
    homeTeam: string,
    awayTeam?: string,
    homeScore: number,
    awayScore: number,
    isStarted?: boolean,
    isFinished?: boolean  
}
export const matchList: MatchType[] = [
{ 
    homeTeam: 'Mexico',
    awayTeam: 'Canada',
    homeScore: 0,
    awayScore: 0,
    isStarted: false,
    isFinished: false  
},
{ 
    homeTeam: 'Spain',
    awayTeam: 'Brazil',
    homeScore: 0,
    awayScore: 0,
    isStarted: false,
    isFinished: false  
},
{
    homeTeam: 'Germany',
    awayTeam: 'France',
    homeScore: 0,
    awayScore: 0,
    isStarted: false,
    isFinished: false  
},
{ 
    homeTeam: 'Uruguay',
    awayTeam: 'Italy',
    homeScore: 0,
    awayScore: 0,
    isStarted: false,
    isFinished: false  
},
{ 
    homeTeam: 'Argentina',
    awayTeam: 'Australia',
    homeScore: 0,
    awayScore: 0,
    isStarted: false,
    isFinished: false  
},
]