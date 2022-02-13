export interface BoardState {
  pieceCount: number;
  pieceCountByRow: number;
  answerIndex: number;
  normalData: string;
  answerData: string;
}

export type BoardAction =
  | { type: 'INITIALIZE_BOARD' }
  | { type: 'INITIALIZE_BOARD_BY_STAGE'; stage: number };
