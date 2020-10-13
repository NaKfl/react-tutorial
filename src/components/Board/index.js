import React from 'react';
import Square from './../Square';

export default function Board({ squares, onClick }) {
  const renderSquare = (i) => (
    <Square value={squares[i]} onClick={() => onClick(i)} />
  );

  const renderBoard = (squares) => {
    const content = [];
    for (let i = 0; i < squares.length; i += 3) {
      const row = [];
      for (let j = i; j < i + 3; j++) {
        row.push(renderSquare(j));
      }
      content.push(<div className='board-row'>{row}</div>);
    }
    return content;
  };

  return <div>{renderBoard(squares)}</div>;
}
