import React, { useReducer } from 'react';
import './App.css';
import { Board } from 'components';

type State = {
  stage: number;
  score: number;
  leftTime: number;
};

type Action =
  | { type: 'INITIALIZE_GAME'; defaultProps: State }
  | { type: 'NEXT_STAGE'; stage: number; score: number }
  | { type: 'DECREASE_LEFTTIME' };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'INITIALIZE_GAME':
      return {
        ...action.defaultProps,
      };
    case 'NEXT_STAGE':
      return {
        ...state,
        stage: action.stage,
        // TODO: 왜 2씩 증가?
        // stage: (state.stage += 1),
        score: action.score,
      };
    case 'DECREASE_LEFTTIME':
      return {
        ...state,
        // TODO: 차감 시간 상수로 빼기
        leftTime: state.leftTime - 3 > 0 ? state.leftTime - 3 : 0,
      };
    default:
      throw new Error('Wrong action type');
  }
}

const defaultProps: State = {
  stage: 1,
  score: 0,
  leftTime: 15,
};

export function App() {
  const [state, dispatch] = useReducer(reducer, defaultProps);

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
