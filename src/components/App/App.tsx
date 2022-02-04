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
  | { type: 'NEXT_STAGE' }
  | { type: 'DECREASE_LEFTTIME'; leftTime: number };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'INITIALIZE_GAME':
      return {
        ...action.defaultProps,
      };
    case 'NEXT_STAGE':
      return {
        ...state,
        stage: (state.stage += 1),
      };
    case 'DECREASE_LEFTTIME':
      return {
        ...state,
        leftTime: state.leftTime - action.leftTime,
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

  return (
    <>
      <header>
        스테이지: {state.stage}, 남은 시간: {state.leftTime}, 점수:{' '}
        {state.score}
      </header>
      <Board stage={state.stage} />
    </>
  );
}
