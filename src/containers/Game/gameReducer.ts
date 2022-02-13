import { GameState, GameAction } from './gameReducer.types';
import { GAME } from 'constants/constants';
export const initialGameState: GameState = {
  stage: GAME.INITIAL_STAGE,
  score: GAME.INITIAL_SCORE,
  leftTime: GAME.INITIAL_LEFTTIME,
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
        score: state.score + action.score,
        leftTime: initialGameState.leftTime,
      };
    case 'CHOOSE_WRONG_ANSWER':
      return {
        ...state,
        leftTime:
          state.leftTime - GAME.DEDUCT_LEFTTIME_WRONG_ANSWER > GAME.MIN_LEFTTIME
            ? state.leftTime - GAME.DEDUCT_LEFTTIME_WRONG_ANSWER
            : GAME.MIN_LEFTTIME,
      };
    case 'COUNTING_LEFTTIME':
      return {
        ...state,
        leftTime:
          state.leftTime > GAME.DEDUCT_LEFTTIME
            ? state.leftTime - GAME.DEDUCT_LEFTTIME
            : GAME.MIN_LEFTTIME,
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
