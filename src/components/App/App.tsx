import React, { useEffect, useLayoutEffect, useReducer } from 'react';
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
          type: 'GO_NEXT_STAGE',
          stage: (state.stage += 1),
          score: Math.pow(state.stage, 3) * state.leftTime,
        })
      : dispatch({ type: 'CHOOSE_WRONG_ANSWER' });
  };

  const endGame = () => {
    window.alert(`GAME OVER!\n스테이지: ${state.stage}, 점수:${state.score}`);
    dispatch({ type: 'INITIALIZE_GAME' });
  };

  useEffect(() => {
    const clearId = setInterval(
      () =>
        dispatch({ type: 'COUNTING_LEFTTIME', leftTime: state.leftTime - 1 }),
      1000,
    );
    state.leftTime === 0 && endGame();
    return () => clearInterval(clearId);
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
