import classnames from 'classnames';
import React from 'react';

export default function Square({ value, onClick, isHighlighted }) {
  return (
    <button
      className={classnames('square', { 'square-highlight': isHighlighted })}
      onClick={onClick}
    >
      {value}
    </button>
  );
}
