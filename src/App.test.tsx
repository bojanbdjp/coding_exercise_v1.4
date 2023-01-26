import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Football World Cup live score board/i);
  expect(linkElement).toBeInTheDocument();
});

it('should remove the game when finish game button is clicked', () => {
  render(<App/>);
  const startButton = screen.getAllByRole('button', {name: /Start/i});
  expect(startButton[0]).toBeInTheDocument();
  fireEvent.click(startButton[0]);

  const finishButton = screen.getAllByRole('button', {name: /Finish game/i});
  expect(finishButton[0]).toBeInTheDocument();
  fireEvent.click(finishButton[0]);

  const homeTeam = screen.queryAllByText("Serbia");
  expect(homeTeam.length).toBe(0);

});
