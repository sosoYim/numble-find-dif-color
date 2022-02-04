import React from 'react';
import './Board.css';
import { BoardType } from './Board.types';
import { Piece } from 'components';

export function Board({ stage }: BoardType) {
  const pieces = Array.from(
    { length: Math.pow(Math.round((stage + 0.5) / 2) + 1, 2) },
    () => <Piece backgroundColor="rgb(42, 137, 72)" />,
  );

  return <div className="board">{pieces}</div>;
}
