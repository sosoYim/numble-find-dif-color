export type State = {
  stage: number;
  score: number;
  leftTime: number;
  isOnGame: boolean;
};

export type Action =
  | { type: 'INITIALIZE_GAME'; defaultProps: State }
  | { type: 'NEXT_STAGE'; stage: number; score: number }
  | { type: 'DECREASE_LEFTTIME' }
  | { type: 'FINISH_GAME' };
