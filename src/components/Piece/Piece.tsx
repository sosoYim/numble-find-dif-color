import React from 'react';
import './Piece.css';
import { PieceProps } from './Piece.types';

export function Piece({
  backgroundColor,
  size = 50,
  ...restProps
}: PieceProps) {
  console.log({ size });
  return (
    <button
      className="piece"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: `${backgroundColor}`,
      }}
      {...restProps}
    ></button>
  );
}
