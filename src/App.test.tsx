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

it('should show results when show results button is clicked', () => {
  render(<App />);
  const startButton = screen.getAllByRole('button', {name: /Start/i});
  fireEvent.click(startButton[0]);
  
  const inputHome = screen.getAllByPlaceholderText('home');
  fireEvent.change(inputHome[0], {target: {value: 5}})
  const updateButton = screen.getAllByRole('button', {name: /Update score/i});
  fireEvent.click(updateButton[0])
  const finishButton = screen.getAllByRole('button', {name: /Finish game/i});
  fireEvent.click(finishButton[0]);
  const showResults = screen.getAllByRole('button', {name: /Show results/i});
  fireEvent.click(showResults[0]);
  const homeResult = screen.getByText(/Mexico 5/i);
  expect(homeResult).toBeInTheDocument();
});


it('should render Spain 3:3 Brazil match before Mexico 5:0 Canada', () => {
  render(<App />);
  // Update Mexico-Canada score to 5:0
  const startButton = screen.getAllByRole('button', {name: /Start/i});
  fireEvent.click(startButton[0]);
  const inputHome = screen.getAllByPlaceholderText('home');
  fireEvent.change(inputHome[0], {target: {value: 5}})
  const updateButton = screen.getAllByRole('button', {name: /Update score/i});
  fireEvent.click(updateButton[0])
  const finishButton = screen.getAllByRole('button', {name: /Finish game/i});
  fireEvent.click(finishButton[0]);

  // Update Spain-Brazil score to 3:3
  const startButton2 = screen.getAllByRole('button', {name: /Start/i});
  fireEvent.click(startButton2[0]);
  const inputHome2 = screen.getAllByPlaceholderText('home');
  fireEvent.change(inputHome2[0], {target: {value: 3}})
  const inputAway = screen.getAllByPlaceholderText('away');
  fireEvent.change(inputAway[0], {target: {value: 3}})
  const updateButton2 = screen.getAllByRole('button', {name: /Update score/i});
  fireEvent.click(updateButton2[0])
  const finishButton2 = screen.getAllByRole('button', {name: /Finish game/i});
  fireEvent.click(finishButton2[0]);

  const showResults = screen.getAllByRole('button', {name: /Show results/i});
  fireEvent.click(showResults[0]);
  const resultsList = screen.getAllByRole('listitem')
  expect(resultsList[0]).toHaveTextContent(/Spain 3/i)
  expect(resultsList[1]).toHaveTextContent(/Mexico 5/i)

});



it('should render recently added team first if total score is the same', () => {
  render(<App />);
  // Update Mexico-Canada score to 2:4
  const startButton = screen.getAllByRole('button', {name: /Start/i});
  fireEvent.click(startButton[0]);
  const inputHome = screen.getAllByPlaceholderText('home');
  fireEvent.change(inputHome[0], {target: {value: 5}})
  const updateButton = screen.getAllByRole('button', {name: /Update score/i});
  fireEvent.click(updateButton[0])
  const finishButton = screen.getAllByRole('button', {name: /Finish game/i});
  fireEvent.click(finishButton[0]);

  // Update Spain-Brazil score to 3:3
  const startButton2 = screen.getAllByRole('button', {name: /Start/i});
  fireEvent.click(startButton2[0]);
  const inputHome2 = screen.getAllByPlaceholderText('home');
  fireEvent.change(inputHome2[0], {target: {value: 3}})
  const inputAway = screen.getAllByPlaceholderText('away');
  fireEvent.change(inputAway[0], {target: {value: 3}})
  const updateButton2 = screen.getAllByRole('button', {name: /Update score/i});
  fireEvent.click(updateButton2[0])
  const finishButton2 = screen.getAllByRole('button', {name: /Finish game/i});
  fireEvent.click(finishButton2[0]);

  const showResults = screen.getAllByRole('button', {name: /Show results/i});
  fireEvent.click(showResults[0]);
  const resultsList = screen.getAllByRole('listitem')
  expect(resultsList[0]).toHaveTextContent(/Spain 3/i)
  expect(resultsList[1]).toHaveTextContent(/Mexico 5/i)

});
