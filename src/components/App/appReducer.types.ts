export type State = {
  stage: number;
  score: number;
  leftTime: number;
  isOnGame: boolean;
};

export type Action =
  | { type: 'INITIALIZE_GAME' }
  | { type: 'GO_NEXT_STAGE'; stage: number; score: number }
  | { type: 'CHOOSE_WRONG_ANSWER' }
  | { type: 'FINISH_GAME' };
