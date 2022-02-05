import React, { useEffect, useMemo, useReducer } from 'react';
import './App.css';
import { Board, Header } from 'components';
import { reducer, initialGameState } from './appReducer';

export function App() {
  const [state, dispatch] = useReducer(reducer, initialGameState);
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

  const endGame = async () => {
    await dispatch({ type: 'FINISH_GAME' });
    // TODO: await을 쓰지 않으면 isGaming 상태 변하지 않음. 왜?
    // console.log({ isGaming: state.isGaming });
    window.alert(`GAME OVER!\n스테이지: ${state.stage}, 점수:${state.score}`);
    dispatch({ type: 'INITIALIZE_GAME' });
  };

  useEffect(() => {
    state.leftTime === 0 && endGame();
    const clearId = setInterval(
      () =>
        dispatch({ type: 'COUNTING_LEFTTIME', leftTime: state.leftTime - 1 }),
      1000,
    );
    return () => clearInterval(clearId);
  }, [state.leftTime]);

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
