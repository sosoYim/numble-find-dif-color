import React, { useEffect, useMemo, useReducer } from 'react';
import './App.css';
import { Board, Header } from 'components';
import { reducer, initialGameState } from './appReducer';

export function App() {
  const [state, dispatch] = useReducer(reducer, initialGameState);

  const handleClick = (
    e: React.MouseEvent<HTMLElement, MouseEvent>,
    isAnswer: boolean,
  ) => {
    const target = e.target as HTMLElement;
    if (!target.classList.contains('piece')) return;
    isAnswer
      ? dispatch({
          type: 'GO_NEXT_STAGE',
          stage: (state.stage += 1),
          score: Math.pow(state.stage, 3) * state.leftTime,
        })
      : dispatch({ type: 'CHOOSE_WRONG_ANSWER' });
  };

  useEffect(() => {
    const clearId = setInterval(
      () =>
        dispatch({ type: 'COUNTING_LEFTTIME', leftTime: state.leftTime - 1 }),
      1000,
    );
    state.leftTime === 0 && dispatch({ type: 'FINISH_GAME' });
    return () => clearInterval(clearId);
  }, [state.leftTime]);

  useEffect(() => {
    if (state.isGaming) return;
    // TODO: state.leftTime = 0 인 상태가 Header에 적용되어야 함
    window.alert(`GAME OVER!\n스테이지: ${state.stage}, 점수:${state.score}`);
    dispatch({ type: 'INITIALIZE_GAME' });
  }, [state.isGaming]);

  // Only to prevent rerendering
  const board = useMemo(
    () => (
      <Board
        stage={state.stage}
        isGaming={state.isGaming}
        handleClick={handleClick}
      />
    ),
    [state.stage, state.isGaming],
  );

  return (
    <>
      <Header state={state} />
      {board}
    </>
  );
}
