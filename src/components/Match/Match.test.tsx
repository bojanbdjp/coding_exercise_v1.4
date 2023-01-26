import { fireEvent, render, screen } from '@testing-library/react';
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
    const intialScore = screen.getAllByText(/0/i);
    expect(intialScore[0]).toBeInTheDocument();
});

it('should have a start button', () => {
    render(<Match match={mockData[0]}/>);
    const startButton = screen.getAllByRole('button', {name: /Start/i});
    expect(startButton[0]).toBeInTheDocument();
});

it('should show the update score button when start button is clicked', () => {
    render(<Match match={mockData[0]}/>);
    const startButton = screen.getAllByRole('button', {name: /Start/i});
    fireEvent.click(startButton[0])
    const updateButton = screen.getAllByRole('button', {name: /Update score/i});
    expect(updateButton[0]).toBeInTheDocument();
});

it('should update results when the update score button is clicked', () => {
    render(<Match match={mockData[0]}/>);
    const startButton = screen.getAllByRole('button', {name: /Start/i});
    fireEvent.click(startButton[0])

    const inputHome = screen.getAllByPlaceholderText('home');
    fireEvent.change(inputHome[0], {target: {value: 5}})

    const updateButton = screen.getAllByRole('button', {name: /Update score/i});
    fireEvent.click(updateButton[0])

    const updateHomeTeamScore = screen.getAllByText(/5/i);
    expect(updateHomeTeamScore[0]).toHaveTextContent("5")
    
});