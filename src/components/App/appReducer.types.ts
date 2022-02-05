export type State = {
  stage: number;
  score: number;
  leftTime: number;
  isGaming: boolean;
};

export type Action =
  | { type: 'INITIALIZE_GAME' }
  | { type: 'GO_NEXT_STAGE'; stage: number; score: number }
  | { type: 'CHOOSE_WRONG_ANSWER' }
  | { type: 'COUNTING_LEFTTIME'; leftTime: number }
  | { type: 'FINISH_GAME' };
