import React from 'react';
import './Piece.css';
import { PieceProps } from './Piece.types';

export function Piece({ backgroundColor, ...restProps }: PieceProps) {
  return (
    <div
      className="piece"
      style={{ ...{ backgroundColor } }}
      {...restProps}
    ></div>
  );
}
