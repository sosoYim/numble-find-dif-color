import React, { useState } from 'react';
import './App.css';
import { Board } from 'components';

export function App() {
  const [stage, setStage] = useState(1);
  // TODO: 최초 시간 상수화
  const [leftTime, setLeftTime] = useState(15);
  const [score, setScore] = useState(0);

  return (
    <>
      <header>
        스테이지: {stage}, 남은 시간: {leftTime}, 점수: {score}
      </header>
      <Board stage={stage} />
    </>
  );
}
