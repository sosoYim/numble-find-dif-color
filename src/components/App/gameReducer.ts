import { GameState, GameAction } from './gameReducer.types';

export const initialGameState: GameState = {
  stage: 1,
  score: 0,
  leftTime: 15,
  isGaming: true,
};

export function gameReducer(state: GameState, action: GameAction): GameState {
  switch (action.type) {
    case 'INITIALIZE_GAME':
      return {
        ...initialGameState,
      };
    case 'GO_NEXT_STAGE':
      return {
        ...state,
        stage: action.stage,
        score: action.score,
        leftTime: initialGameState.leftTime,
      };
    case 'CHOOSE_WRONG_ANSWER':
      return {
        ...state,
        // TODO: 차감 시간 상수로 빼기
        leftTime: state.leftTime - 3 > 0 ? state.leftTime - 3 : 0,
      };
    case 'COUNTING_LEFTTIME':
      return {
        ...state,
        // leftTime: action.leftTime,
        leftTime: state.leftTime > 1 ? state.leftTime - 1 : 0,
      };
    case 'FINISH_GAME':
      return {
        ...state,
        isGaming: false,
      };
    default:
      throw new Error('Wrong GameAction type');
  }
}
