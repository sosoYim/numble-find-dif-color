import React from 'react';
import './App.css';

export function App() {
  return (
    <>
      <header>스테이지: 1, 남은 시간: 0, 점수: 0</header>
      <div className="board-wrapper">
        <div className="board"></div>
        <div className="board"></div>
        <div className="board"></div>
        <div className="board"></div>
      </div>
    </>
  );
}
