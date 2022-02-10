import React from 'react';
import './App.css';
import { Board, Header } from 'components';
import { useGame } from 'hooks';

export function App() {
  const {
    gameState: { leftTime, isGaming, stage, score },
    handleClick,
  } = useGame();

  return (
    <>
      <Header stage={stage} leftTime={leftTime} score={score} />
      <Board stage={stage} isGaming={isGaming} handleClick={handleClick} />
    </>
  );
}
