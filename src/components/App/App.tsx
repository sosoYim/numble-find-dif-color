import React, { useEffect, useReducer } from 'react';
import './App.css';
import { Board } from 'components';
import { reducer, initialState } from './appReducer';

export function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  //React.MouseEvent<HTMLElement>
  //React.SyntheticEvent<HTMLElement>
  // TODO: target 도 인식하는 타입 찾기
  const handleClick = (e: any, isAnswer: any) => {
    if (!e.target.classList.contains('piece')) return;
    isAnswer
      ? dispatch({
          type: 'NEXT_STAGE',
          stage: (state.stage += 1),
          score: Math.pow(state.stage, 3) * state.leftTime,
        })
      : dispatch({ type: 'DECREASE_LEFTTIME' });
  };

  const endGame = () => {
    window.alert(`GAME OVER!\n스테이지: ${state.stage}, 점수:${state.score}`);
    dispatch({ type: 'INITIALIZE_GAME' });
  };

  useEffect(() => {
    state.leftTime === 0 && endGame();
  }, [state.leftTime]);

  return (
    <>
      <header>
        스테이지: {state.stage}, 남은 시간: {state.leftTime}, 점수:{' '}
        {state.score}
      </header>
      <Board stage={state.stage} handleClick={handleClick} />
    </>
  );
}
