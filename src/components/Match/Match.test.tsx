import { render, screen } from '@testing-library/react';
import Match from './Match';

const mockData = [
    { 
        homeTeam: 'Serbia',
        awayTeam: 'Slovakia',
        homeScore: 0,
        awayScore: 0,
        isStarted: false,
        isFinished: false  
    }
]

it('should have Serbia as a first home team', () => {
    render(<Match match={mockData[0]}/>);
    const homeTeam = screen.getByText(/Serbia/i);
    expect(homeTeam).toBeInTheDocument();
});

it('home team should have initial score 0', () => {
    render(<Match match={mockData[0]}/>);
    const startButton = screen.getAllByText(/0/i);
    expect(startButton[0]).toBeInTheDocument();
});