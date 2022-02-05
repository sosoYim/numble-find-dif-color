import React, { useLayoutEffect, useEffect, useState } from 'react';
import './Board.css';
import { BoardProps } from './Board.types';
import { Piece } from 'components';
import { getRandomColorAndAnswerColor, getRandomInt } from 'utils';

export function Board({ stage, isGaming, handleClick }: BoardProps) {
  const [pieces, setPieces] = useState<JSX.Element[] | []>([]);
  const [answerIndex, setAnswerIndex] = useState<undefined | number>();

  useLayoutEffect(() => {
    // TODO: isGaming 상태를 두고 false, true 두번 바꾸는 것보다
    // isGaming 상태 없이 Board를 재랜더링 한 번하면 불필요한 리랜더링을 방지할 수 있다.
    // 하지만 force rerendering은 지양해야하므로 이 정도 리랜더링은 감수하고 상태로 관리하는게 나은가...

    // useEffect에서는 alert창 닫고 나서 false,true 찍혔는데
    // useLayoutEffect는 alert창 전 false, 닫고나서 true
    console.log({ isGaming });
    const piecesCount = Math.pow(Math.round((stage + 0.5) / 2) + 1, 2);
    const tempAnswerIndex = getRandomInt(piecesCount as number, 0);
    setAnswerIndex(tempAnswerIndex);
    const [normalRGBCode, answerRGBCode] = getRandomColorAndAnswerColor(stage);
    setPieces(
      Array.from({ length: piecesCount }, (_, i) => (
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
