import { State, Action } from './appReducer.types';

export const initialProps: State = {
  stage: 1,
  score: 0,
  leftTime: 15,
  isOnGame: true,
};

export function reducer(state: State, action: Action): State {
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
    case 'FINISH_GAME':
      return {
        ...state,
        isOnGame: false,
      };
    default:
      throw new Error('Wrong action type');
  }
}
