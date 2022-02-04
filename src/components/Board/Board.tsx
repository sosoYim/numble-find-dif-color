import React from 'react';
import './Board.css';
import { BoardProps } from './Board.types';
import { Piece } from 'components';
import { getRandomColorAndDifferentColor, getRandomInt } from 'utils';

export function Board({ stage, handleClick }: BoardProps) {
  // 생성한 piece 갯수와 정답 idx
  const piecesCount = Math.pow(Math.round((stage + 0.5) / 2) + 1, 2);
  const differentIndex = getRandomInt(piecesCount, 0);
  const [normalRGBCode, differentRGBCode] =
    getRandomColorAndDifferentColor(stage);

  const pieces = Array.from({ length: piecesCount }, (_, i) => (
    <Piece
      key={i}
      data-idx={i}
      backgroundColor={i === differentIndex ? differentRGBCode : normalRGBCode}
    />
  ));

  return (
    <div
      className="board"
      onClick={(e: any) =>
        handleClick(e, differentIndex == e.target.dataset.idx)
      }
    >
      {pieces}
    </div>
  );
}
