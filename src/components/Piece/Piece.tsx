import React from 'react';
import './Piece.css';
import { PieceType } from './Piece.types';

export function Piece({ backgroundColor, ...restProps }: PieceType) {
  return (
    <div
      className="piece"
      style={{ ...{ backgroundColor } }}
      {...restProps}
    ></div>
  );
}
