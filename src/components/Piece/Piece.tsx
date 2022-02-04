import React from 'react';
import './Piece.css';
import { PieceType } from './Piece.types';

export function Piece({ backgroundColor }: PieceType) {
  return <div className="piece" style={{ ...{ backgroundColor } }}></div>;
}
