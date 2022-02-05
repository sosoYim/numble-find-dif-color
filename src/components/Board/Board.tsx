import React, { useEffect, useState } from 'react';
import './Board.css';
import { BoardProps } from './Board.types';
import { Piece } from 'components';
import { getRandomColorAndAnswerColor, getRandomInt } from 'utils';

export function Board({ stage, handleClick }: BoardProps) {
  const [pieces, setPieces] = useState<JSX.Element[] | []>([]);
  const [answerIndex, setAnswerIndex] = useState<undefined | number>();

  useEffect(() => {
    const piecesCount = Math.pow(Math.round((stage + 0.5) / 2) + 1, 2);
    const tempAnswerIndex = getRandomInt(piecesCount as number, 0);
    setAnswerIndex(tempAnswerIndex);
    const [normalRGBCode, answerRGBCode] = getRandomColorAndAnswerColor(stage);
    console.log({ stage, piecesCount, tempAnswerIndex });
    // 생성한 piece 갯수와 정답 idx
    setPieces(
      Array.from({ length: piecesCount }, (_, i) => (
        <Piece
          key={i}
          data-idx={i}
          backgroundColor={
            i === tempAnswerIndex ? answerRGBCode : normalRGBCode
          }
        />
      )),
    );
  }, [stage]);

  return (
    <div
      className="board"
      onClick={(e: any) => handleClick(e, answerIndex == e.target.dataset.idx)}
    >
      {pieces}
    </div>
  );
}
