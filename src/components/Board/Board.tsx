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
  const [pieceCountByRow, setPieceCountByRow] = useState<undefined | number>();
  // console.log('outside');
  useLayoutEffect(() => {
    // console.log('inside');
    const pieceCount = Math.pow(Math.round((stage + 0.5) / 2) + 1, 2);
    const tempAnswerIndex = getRandomInt(pieceCount as number, 0);
    setAnswerIndex(tempAnswerIndex);
    setPieceCountByRow(Math.sqrt(pieceCount));

    const [normalRGBCode, answerRGBCode] = getRandomColorAndAnswerColor(stage);

    setPieces(
      Array.from({ length: pieceCount }, (_, i) => (
        <Piece
          key={i}
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
      style={{
        width: `${size}px`,
        height: `${size}px`,
        gridTemplateColumns: `repeat(${pieceCountByRow}, 1fr)`,
      }}
      onClick={(e: any) =>
        handleClick(
          e,
          e.target === e.currentTarget.children[answerIndex as number],
        )
      }
    >
      {/* {console.log('return')} */}
      {pieces}
    </div>
  );
}
