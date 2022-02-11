import React from 'react';
import './Board.css';
import { BoardProps } from './Board.types';
import { Piece } from 'components';
import { useBoard } from 'hooks';

export function Board({
  stage,
  isGaming,
  handleClickAnswer,
  size = 360,
}: BoardProps) {
  const {
    boardState: {
      pieceCount,
      pieceCountByRow,
      answerIndex,
      answerData,
      normalData,
    },
  } = useBoard({ stage, isGaming });

  const pieces = Array.from({ length: pieceCount }, (_, i) => (
    <Piece
      key={i}
      backgroundColor={i === answerIndex ? answerData : normalData}
    />
  ));

  return (
    <div
      className="board"
      style={{
        width: size,
        height: size,
        gridTemplateColumns: `repeat(${pieceCountByRow}, 1fr)`,
      }}
      onClick={(e: any) =>
        handleClickAnswer(
          e,
          e.target === e.currentTarget.children[answerIndex as number],
        )
      }
    >
      {pieces}
    </div>
  );
}
