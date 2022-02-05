import React, { useLayoutEffect, useEffect, useState } from 'react';
import './Board.css';
import { BoardProps } from './Board.types';
import { Piece } from 'components';
import { getRandomColorAndAnswerColor, getRandomInt } from 'utils';

export function Board({
  stage,
  isGaming,
  handleClick,
  size = 360,
}: BoardProps) {
  const [pieces, setPieces] = useState<JSX.Element[] | []>([]);
  const [answerIndex, setAnswerIndex] = useState<undefined | number>();

  useLayoutEffect(() => {
    const pieceCount = Math.pow(Math.round((stage + 0.5) / 2) + 1, 2);
    console.log({ piecesCount: pieceCount });
    const tempAnswerIndex = getRandomInt(pieceCount as number, 0);
    setAnswerIndex(tempAnswerIndex);
    const [normalRGBCode, answerRGBCode] = getRandomColorAndAnswerColor(stage);

    const rowPieceCount = Math.sqrt(pieceCount);
    const pieceSize = Math.floor(size / rowPieceCount) - 4 * rowPieceCount;

    setPieces(
      Array.from({ length: pieceCount }, (_, i) => (
        <Piece
          key={i}
          size={pieceSize}
          backgroundColor={
            i === tempAnswerIndex ? answerRGBCode : normalRGBCode
          }
        />
      )),
    );
  }, [stage, isGaming]);

  return (
    <div
      className="board"
      style={{ width: `${size}px`, height: `${size}px` }}
      onClick={(e: any) =>
        handleClick(
          e,
          e.target === e.currentTarget.children[answerIndex as number],
        )
      }
    >
      {pieces}
    </div>
  );
}
