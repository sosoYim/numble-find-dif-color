export interface GameState {
  stage: number;
  score: number;
  leftTime: number;
  isGaming: boolean;
}

export type GameAction =
  | { type: 'INITIALIZE_GAME' }
  | { type: 'GO_NEXT_STAGE'; stage: number; score: number }
  | { type: 'CHOOSE_WRONG_ANSWER' }
  | { type: 'COUNTING_LEFTTIME' }
  | { type: 'FINISH_GAME' };
