import classnames from 'classnames';
import React, { useState } from 'react';
import Board from './../Board';

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default function Game() {
  const [history, setHistory] = useState([
    {
      squares: Array(9).fill(null),
      location: null,
    },
  ]);
  const [xIsNext, setXIsNext] = useState(true);
  const [stepNumber, setStepNumber] = useState(0);

  const handleClick = (i) => {
    const newHistory = history.slice(0, stepNumber + 1);
    const current = newHistory[newHistory.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = xIsNext ? 'X' : 'O';
    setHistory([...newHistory, { squares, step: i }]);
    setStepNumber(newHistory.length);
    setXIsNext(!xIsNext);
  };

  const jumpTo = (step) => {
    setStepNumber(step);
    setXIsNext(step % 2 === 0);
  };

  const convertToLocation = (step) => {
    const col = (step % 3) + 1;
    const row = Math.trunc(step / 3) + 1;
    return [row, col];
  };

  const current = history[stepNumber];
  const winner = calculateWinner(current.squares);

  const moves = history.map((item, index) => {
    console.log('index', index);
    console.log('item', item);
    const [row, col] = convertToLocation(item.step);
    const desc = index
      ? `Go to move #${index} [${row},${col}]`
      : 'Go to game start';
    return (
      <li key={index}>
        <button
          className={classnames({ 'selected-move': stepNumber === index })}
          onClick={() => jumpTo(index)}
        >
          {desc}
        </button>
      </li>
    );
  });

  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  return (
    <div className='game'>
      <div className='game-board'>
        <Board squares={current.squares} onClick={(i) => handleClick(i)} />
      </div>
      <div className='game-info'>
        <div>{status}</div>
        <ol>{moves}</ol>
      </div>
    </div>
  );
}
