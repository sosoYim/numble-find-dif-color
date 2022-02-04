import { State, Action } from './appReducer.types';

export const initialState: State = {
  stage: 1,
  score: 0,
  leftTime: 15,
  isOnGame: true,
};

export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'INITIALIZE_GAME':
      return {
        ...initialState,
      };
    case 'GO_NEXT_STAGE':
      return {
        ...state,
        stage: action.stage,
        score: action.score,
      };
    case 'CHOOSE_WRONG_ANSWER':
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
