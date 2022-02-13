import React, { useMemo } from 'react';
import './App.css';
import { Board } from 'containers';
import { Header } from 'components';
import { useGame } from 'hooks';

export function App() {
  const {
    gameState: { leftTime, isGaming, stage, score },
    handleClickAnswer,
  } = useGame();

  return (
    <>
      <Header stage={stage} leftTime={leftTime} score={score} />
      <Board
        stage={stage}
        isGaming={isGaming}
        handleClickAnswer={handleClickAnswer}
      />
    </>
  );
}
