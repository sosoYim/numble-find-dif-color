import React from 'react';
import { PieceProps } from './Piece.types';

export function Piece({ backgroundColor }: PieceProps) {
  return (
    <button
      className="piece"
      style={{
        backgroundColor: `${backgroundColor}`,
      }}
    ></button>
  );
}
